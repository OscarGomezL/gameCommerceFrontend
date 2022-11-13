import { useEffect } from "react"
import Layout from "../components/layout"
import Image from 'next/image'
//swal
import NonReactSwal from 'sweetalert2'
import WithReactContent from 'sweetalert2-react-content'
import {mustLogin} from '../logic/mustLoginSwal'
//redux
import { searcher, logger } from '../redux/actions'
import { useSelector, useDispatch } from "react-redux"

export default function Wii({data}) {
	const Swal2 = WithReactContent(NonReactSwal)
	const search = useSelector(s=>s.search)
	const log = useSelector(s=>s.log)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(searcher("WII", ""))
	}, [])

	const GameSwal = (title, id, desc, price, console, logo, listNum) => {
		Swal2.fire({
			title: title + "<br/>" + price + "$",
			text: desc,
			color:"var(--brown_1)",
			background: "var(--brown_3)",
			confirmButtonText: "Add to Cart",
			confirmButtonColor: "var(--brown_3)",
			preConfirm: function() {
				return new Promise((res,rej) =>{
					res({
						id,
						title,
						price,
						console,
						logo,
						listNum
					})
				})
			}
		}).then(data=>{
			if(data.value && !log) {
				mustLogin()
			}
			else if (data.value && log) {
				let UserObj = JSON.parse(localStorage.getItem("User"))
				for(let el of UserObj.user.gamesCart) {
					if(el.listNum === data.value.listNum) {
						return Swal2.fire({
							title:"You already added this game to your list",
							text: "Try adding a different game or check your cart list.",
							background: "var(--brown_3)",
							confirmButtonColor: "var(--brown_3)",
							color: "var(--brown_1)",
							icon: "error",
							iconColor: "var(--brown_1)",
						})
					}
				}
				UserObj.user.gamesCart.push([{
					title:data.value.title,
					console: data.value.console,
					price:`${data.value.price}`,
					logo: data.value.logo,
					listNum: data.value.listNum,
					quantity: 1,
				}])
				dispatch(logger("PATCH", UserObj))
				let gamesCart = UserObj.user.gamesCart
				fetch(`https://game-commerce.herokuapp.com/v1/user/update/${UserObj.user.id}`, {
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
								<Image 
									src={game.logo}
									key={game._id}
									className='game_image'
									width={650}
									height={450}
									alt={game.name}
									onClick={()=>{
										GameSwal(
											game.name,
											game._id,
											game.description,
											game.price,
											game.console,
											game.logo,
											game.listNum,
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
	const response = await fetch("https://game-commerce.herokuapp.com/v1/games")
	const data = await response.json()
	return {props: {data}}
}