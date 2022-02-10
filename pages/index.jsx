import Layout from "../components/Layout"

export default function Home() {
	return (
		<div className='page'>
			<Layout singlePage={true} needsSearcher={false}>
				<main className="main-home">
					<h2>GameCommerce</h2>
					<p>GameCommerce is one of the personal projects I'm doing on my free time. It's an ecommerce realistic simulation which can actually work as a functional ecommerce in production. In GameCommerce you're provided with a fake card which works with Stripe as a real credit or debit card with infinite fake money so the user can “order” whichever game he wants and assign such order to a direction just like he would on an actual ecommerce.</p>
				</main>
			</Layout>
		</div>
	)
}