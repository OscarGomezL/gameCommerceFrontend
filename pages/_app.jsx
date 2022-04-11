import { useEffect, useState } from 'react'
//redux
import { createStore } from 'redux'
import allReducers from '../redux/reducers'
import { Provider } from 'react-redux'
//css
import '../styles/variables.css'
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
import '../styles/main/cart-object.css'
import '../styles/main/user.css'
import '../styles/main/home.css'
import '../styles/main/directions.css'

export default function MyApp({ Component, pageProps }) {
	const [store, setStore] = useState()
	useEffect(() => {
		setStore(createStore(allReducers, {log: JSON.parse(localStorage.getItem("User"))}))
	}, [])
	if(store===undefined) return null
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}