import Layout from "../components/layout"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-solid-svg-icons'
import NonReactSwal from 'sweetalert2'
import WithReactContent from 'sweetalert2-react-content'

export default function AboutDeveloper() {
	const Swal2 = WithReactContent(NonReactSwal)
	return (
		<div className='page'>
			<Layout singlePage={false} needsSearcher={false}>
				<main className="main-about">
					<div className="main-about-about">
						<h2>About</h2>
						<p>GameCommerce is one of the personal projects I&apos;m doing on my free time. It&apos;s an ecommerce realistic simulation which can actually work as a functional ecommerce in production. In GameCommerce you&apos;re provided with a fake card which works with Stripe as a real card just so the user can complete payments like he would on an actual ecommerce.</p>
						<h3>To complete payments you have to:</h3>
					</div>
					<div className="main-about-requirements">
						<ul>
							<li>
								Use this card: 4242424242424242
								<FontAwesomeIcon 
									icon={faCopy}
									className="main-about-requirements-ul-li-icon"
									onClick={()=>{
										Swal2.fire({
											title:'The card number has been copied succesfully',
											background: "var(--brown_3)",
											confirmButtonColor: "var(--brown_3)",
											color: "var(--brown_1)",
											icon: "success",
											iconColor: "var(--brown_1)",
										})
										navigator.clipboard.writeText("4242424242424242")
									}}
								/>
							</li>
							<li>Use any future date</li>
							<li>Use any CVC</li>
							<li>Use any value for the rest of the form spaces</li>
						</ul>
					</div>
				</main>
			</Layout>
		</div>
	)
}