import Layout from "../components/Layout"

export default function Xbox360({data}) {
	return (
		<div className='page'>
			<Layout>
				{
					data.games.map(game=>{
						if(game.console=="Xbox360") {
							return <img src={game.logo} key={game._id} alt={game.name} />
						}
					})
				}	
			</Layout>
		</div>
	)
}
export async function getStaticProps() {
	const response = await fetch("http://localhost:4000/v1/games")
	const data = await response.json()
	return {props: {data}}
}