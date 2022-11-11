import Layout from "../components/layout"
import {useSelector} from 'react-redux'

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
						<div> {log ? "Username: " + log.user.username : "You've not logged in yet"} </div>
						<div> {log ? "Name: " + log.user.name : ""} </div>
						<div> {log ? "Email: " + log.user.email : ""} </div>
						<div> {log ? "Country: " + log.user.country : ""} </div>
					</div>
				</main>
			</Layout>
		</div>
	)
}