import Layout from "../components/Layout"

export default function Home() {
	return (
		<div className='page'>
			<Layout singlePage={true}>
				<main>
					<h1>Important Warning</h1>
				</main>
			</Layout>
		</div>
	)
}