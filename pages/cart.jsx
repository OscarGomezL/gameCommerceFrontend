import Layout from "../components/Layout"
import { useState, useEffect } from "react"
//redux
import { useSelector } from "react-redux"
import CartObject from "../components/cart/cartObject"
import { buy } from "../logic/stripe"

export default function Cart() {
	const log = useSelector(s=>s.log)
	const [cartList, setCartList] = useState(undefined)
	const [cartPrice, setCartPrice] = useState(0)
	const changeCheck = useSelector(s=>s.changeCheck)

	useEffect(() => {
		setCartList(log ? log.user.gamesCart : [])
	}, [log]);
	useEffect(() => {
		let allPrices = document.querySelectorAll('.cart-object-price-text')
		let totalPrice = 0
		allPrices.forEach(
			el=>{
				console.log(el)
				let marked = document.querySelector(`.checkbox-${parseInt(el.classList[1])}`).getAttribute('value')
				let splitted = el.innerHTML.split('')
				splitted.pop()
				let price = parseInt(splitted.join().replace(/,/g,''))
				if(marked=== 'true') {
					totalPrice += price 
				}
			}
		)
		setCartPrice(totalPrice)
	}, [changeCheck])
	
	useEffect(() => {
		//waits for client-side to be available
		async function waitForClientSide() {
			return new Promise(resolve => {
				if(typeof window !== "undefined") {
					resolve(true)
				}
				else {
					waitForClientSide()
				}
			});
		}
		async function asyncCall() {
			const result = await waitForClientSide();
			if(result) {
				let prices = document.querySelectorAll('.cart-object-price-text')
				let price = 0
				prices.forEach(
					el=>{
						let arr = el.innerHTML.split('')
						arr.pop()
						price += parseInt(arr.join().replace(/,/g,''))
					}
				)
				setCartPrice(price)
			}
			else asyncCall()
		}
		  
		asyncCall();
	}, [])
	
	if(cartList === undefined ) return null
	return (
		<div className='page'>
			<Layout singlePage={true} needsSearcher={false}>
				<main className="main-cart">
					<div className="main-cart-content">
						<div className="main-cart-content-list">
							{
								cartList.map((game, index)=>{
									if(game[0] !== undefined) game = game[0] 
									if(game !== undefined && game !== "") {
										return (
											<CartObject index={index} key={index} game={game} setCartPrice={setCartPrice} />
											)
									}
								})
							}
						</div>
						<div className="main-cart-content-pay">
							<div className="main-cart-content-pay-price">
								Total of: {cartPrice}$
							</div>
							<div 
								className="main-cart-content-pay-checkout"
								onClick={()=>{
									if( log.user.gamesCart.length !== 0 ) {
										return Swal2.fire({
											title:'The email you tried to register is already signed up',
											text: "Try to login with that email instead",
											background: "var(--brown_3)",
											confirmButtonColor: "var(--brown_3)",
											color: "var(--brown_1)",
											icon: "error",
											iconColor: "var(--brown_1)",
										})
									}
									/*
									else if( log.user.directions.length !== 0 ) {
										return 
									}
									 && ) {
										buy(
											log.user.gamesCart.filter(
												(game,index)=> document.querySelector(`.checkbox-${index}`).getAttribute('value') == "true"
											)
										)
											} 
									*/
								}}
							>
								Proceed To Checkout
							</div>
						</div>
					</div>
				</main>
			</Layout>
		</div>
	)
}