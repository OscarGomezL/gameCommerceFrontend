import Layout from "../components/Layout"
import { useEffect } from "react"
//swal
import NonReactSwal from 'sweetalert2'
import WithReactContent from 'sweetalert2-react-content'
import {mustLogin} from '../logic/mustLoginSwal'
//redux
import { searcher,logger } from '../redux/actions'
import { useSelector, useDispatch } from "react-redux"

export default function DS({data}) {
	const Swal2 = WithReactContent(NonReactSwal)
	const search = useSelector(s=>s.search)
	const log = useSelector(s=>s.log)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(searcher("DS", ""))
	}, [])

	const GameSwal = (title, id, desc, price, console, logo) => {
		Swal2.fire({
			title: title + "<br/>" + console,
			text: desc,
			color:"#432",
			background: "rgb(230,178,77)",
			confirmButtonText: "Add to Cart",
			confirmButtonColor: "rgb(230,178,77)",
			preConfirm: function() {
				return new Promise((res,rej) =>{
					res({
						id,
						title,
						price,
						console,
						logo
					})
				})
			}
		}).then(data=>{
			if(data.value && !log) {
				mustLogin()
			}
			else if (data.value && log) {
				//alert(data.value.title)
				let UserObj = JSON.parse(localStorage.getItem("User"))
				UserObj.user.gamesCart.push({title:data.value.title,console: data.value.console,price:`${data.value.price}`, logo: data.value.logo})
				dispatch(logger("PATCH", UserObj))
				let gamesCart = UserObj.user.gamesCart
				fetch(`http://localhost:4000/v1/user/update/${UserObj.user.id}`, {
					method: "PATCH",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify({gamesCart})
				})
			}
			else return ""
		})
	}
	return (
		<div className='page'>
			<Layout ds={true} needsSearcher={true} platform="Ds">
			{
					data.games
					.filter(game=>{
						console.log(search)
						if(
							search[1] == "" &&
							search[0] == "DS"
						) return game
						else if (
							search[1] != "" &&
							search[0] == "DS" &&
							game.name.toLowerCase().includes(search[1].toLowerCase())
						) return game
					})
					.map(game=>{
						if(game.console=="Ds"){
							return (
								<img 
									src={game.logo}
									key={game._id}
									alt={game.name}
									onClick={
										()=>{
											GameSwal(
												game.name,
												game._id,
												game.description,
												game.price,
												game.console,
												game.logo
											)
										}
									}
								/>
							)						}
						}
					)
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