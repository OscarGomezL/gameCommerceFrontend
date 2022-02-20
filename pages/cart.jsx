import Layout from "../components/Layout"

export default function Cart() {
	return (
		<div className='page'>
			<Layout singlePage={true} needsSearcher={false}>
				<main className="main-cart">
					<div className="main-cart-title">
						<h2>Cart</h2>
					</div>
					<div className="main-cart-content"></div>
				</main>
			</Layout>
		</div>
	)
}