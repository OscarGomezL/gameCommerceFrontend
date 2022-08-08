import Layout from "../components/Layout"
import {useSelector} from 'react-redux'
import { useEffect } from "react"

export default function User() {
	const log = useSelector(s=>s.log)
	
	return (
		<div className='page'>
			<Layout singlePage={true} needsSearcher={false}>
				<main className="main-user">
					<div className="main-user-title">
						<h2>Your Information:</h2>
					</div>
					<div className="main-user-content">
						<div> {log.user ? "Username: " + log.user.username : "You&apos;ve not logged in yet"} </div>
						<div> {log.user ? "Name: " + log.user.name : ""} </div>
						<div> {log.user ? "Email: " + log.user.email : ""} </div>
						<div> {log.user ? "Country: " + log.user.country : ""} </div>
					</div>
				</main>
			</Layout>
		</div>
	)
}