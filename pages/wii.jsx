import { useEffect } from "react"
import Layout from "../components/Layout"
//swal
import NonReactSwal from 'sweetalert2'
import WithReactContent from 'sweetalert2-react-content'
import {mustLogin} from '../logic/mustLoginSwal'
//redux
import {searcher} from '../redux/actions'
import { useSelector, useDispatch } from "react-redux"

export default function Wii({data}) {
	const Swal2 = WithReactContent(NonReactSwal)
	const search = useSelector(s=>s.search)
	const log = useSelector(s=>s.log)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(searcher("WII", ""))
	}, [])

	const GameSwal = (title, console, desc) => {
		Swal2.fire({
			title: title + "<br/>" + console,
			text: desc,
			color:"#432",
			background: "rgb(230,178,77)",
			confirmButtonText: "Add to Cart",
			confirmButtonColor: "rgb(230,178,77)",
		}).then(data=>{
			if(data.value && !log) {
				mustLogin()
			}
			else return ""
		})
	}
	if(!search) return ""
	return (
		<div className='page' >
			<Layout needsSearcher={true} platform="Wii">
				{
					data.games
					.filter(game=>{
						if(
							search[1] == "" &&
							search[0] == "WII"
						) return game
						else if (
							search[1] != "" &&
							search[0] == "WII" &&
							game.name.toLowerCase().includes(search[1].toLowerCase())
						) return game
					})
					.map(game=>{
						if(game.console == "Wii") {
							return (
								<img 
									src={game.logo}
									key={game._id}
									alt={game.name}
									onClick={()=>{
										GameSwal(
											game.name,
											game.console,
											game.description
										)
									}}	
								/>
							)
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