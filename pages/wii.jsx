import Layout from "../components/Layout"
import NonReactSwal from 'sweetalert2'
import WithReactContent from 'sweetalert2-react-content'

export default function Wii({data}) {
	const Swal2 = WithReactContent(NonReactSwal)
	const GameSwal = (title, console, desc, img) => {
		Swal2.fire({
			title: title + "<br/>" + console,
			text: desc,
			color:"#432",
			background: "rgb(230,178,77)",
			confirmButtonText: "Add to Cart",
			confirmButtonColor: "rgb(230,178,77)",
		})
	}
	return (
		<div className='page' >
			<Layout needsSearcher={true}>
			{
					data.games.map(game=>{
						if(game.console=="Wii"){
							return (
								<img 
									src={game.logo}
									key={game._id}
									alt={game.name}
									onClick={()=>{
										GameSwal(
											game.name,
											game.console,
											game.description,
											""
										)
									}}	
								/>
							)						}
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