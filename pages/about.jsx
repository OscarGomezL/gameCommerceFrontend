import Layout from "../components/Layout"

export default function AboutDeveloper() {
	return (
		<div className='page'>
			<Layout singlePage={true} needsSearcher={false}>
				<main className="main-about">
					<h2>GameCommerce</h2>
					<p>GameCommerce is one of the personal projects I'm doing on my free time. It's an ecommerce realistic simulation which can actually work as a functional ecommerce in production. In GameCommerce you're provided with a fake card which works with Stripe as a real credit or debit card with infinite fake money so the user can “order” whichever game he wants and assign such order to a direction just like he would on an actual ecommerce.</p>
					<h3>Here's a card you can use:</h3>
					<p>4242-4242-4242-4242</p>
					<h3>Warning!</h3>
					<p>Do NOT use a real credit or debit card, it's going to work. Use the fake card instead.</p>
				</main>
			</Layout>
		</div>
	)
}