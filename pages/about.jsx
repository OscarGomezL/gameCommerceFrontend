import Layout from "../components/Layout"

export default function AboutDeveloper() {
	return (
		<div className='page'>
			<Layout singlePage={false} needsSearcher={false}>
				<main className="main-about">
					<h2>About</h2>
					<p>GameCommerce is one of the personal projects I'm doing on my free time. It's an ecommerce realistic simulation which can actually work as a functional ecommerce in production. In GameCommerce you're provided with a fake card which works with Stripe as a real card just so the user can complete payments like he would on an actual ecommerce.</p>
					<h3>To complete payments you have to:</h3>
					<div className="main-about-requirements">
						<ul>
							<li>Use this card: 4242424242424242</li>
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