import Layout from "../components/Layout"

export default function Home() {
	return (
		<div className='page'>
			<Layout singlePage={true} needsSearcher={false}>
				<main>
					<h2>Important Warning</h2>
					<p></p>
				</main>
			</Layout>
		</div>
	)
}