import Layout from "../components/Layout"
import {useContext} from 'react'
import AuthContext from "../context/AuthContext"

export default function User() {
	const {auth} = useContext(AuthContext)
	return (
		<div className='page'>
			<Layout singlePage={true} needsSearcher={false}>
				<main className="main-user">
					<h2>Your Information:</h2>
					<div> {auth ? "Username: " + auth.user.username : "You've not logged in yet"} </div>
					<div> {auth ? "Name: " + auth.user.name : ""} </div>
					<div> {auth ? "Email: " + auth.user.email : ""} </div>
					<div> {auth ? "Country: " + auth.user.country : ""} </div>
				</main>
			</Layout>
		</div>
	)
}