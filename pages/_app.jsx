import { useMemo, useState, useEffect } from 'react'
import AuthContext from '../context/AuthContext'
//redux
import { createStore } from 'redux'
import allReducers from '../redux/reducers'
import { Provider } from 'react-redux'
const store = createStore(allReducers)
//css
import '../styles/reset.css'
import '../styles/global.css'
import '../styles/header/header.css'
import '../styles/header/searcher.css'
import '../styles/header/menuIcon.css'
import '../styles/nav/nav.css'
import '../styles/nav/myAccount.css'
import '../styles/footer/footer.css'
import '../styles/menu/menu.css'
import '../styles/menu/menuContent.css'
import '../styles/menu/account.css'
import '../styles/layout.css'
import '../styles/swal/swal1.css'
import '../styles/swal/swal2.css'
import '../styles/swal/custom.css'
import '../styles/main/content.css'
import '../styles/main/main.css'
import '../styles/main/about.css'
import '../styles/main/cart.css'
import '../styles/main/user.css'
import '../styles/main/home.css'
import '../styles/main/directions.css'

export default function MyApp({ Component, pageProps }) {
	const [auth, setAuth] = useState(undefined)
	useEffect(() => {
		const isLogged = localStorage.getItem("User")
		if(isLogged) {
			setAuth(JSON.parse(isLogged))
		}
		else {
			setAuth(null)
		}
	}, []);
	const dataPatch = mod => {
		localStorage.setItem("User",JSON.stringify(mod))
		setAuth(mod)
	}
	const dataDelete = () => {
		localStorage.removeItem("User")
		setAuth(null)
	}
	const authData = useMemo(
		()=>({
			auth,
			dataPatch,
			dataDelete,
		}),
		[auth]
	)
	if(auth === undefined) return null
	return (
		<Provider store={store}>
			<AuthContext.Provider value={authData}>
				<Component {...pageProps} />
			</AuthContext.Provider>
		</Provider>
	)
}