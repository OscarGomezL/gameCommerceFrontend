import Layout from "../components/Layout"
import { useState, useEffect } from "react"
//redux
import { logger } from '../redux/actions'
import { useSelector, useDispatch } from "react-redux"
import CartObject from "../components/cart/cartObject"

export default function Cart() {
	const dispatch = useDispatch()
	const log = useSelector(s=>s.log)
	const [cartList, setCartList] = useState(undefined)
	
	useEffect(() => {
		console.log(log ? log.user.gamesCart : [])
		setCartList(log ? log.user.gamesCart : [])
	}, [log]);

	if(cartList === undefined ) return null
	return (
		<div className='page'>
			<Layout singlePage={true} needsSearcher={false}>
				<main className="main-cart">
					<div className="main-cart-title">
						<h2>Cart</h2>
					</div>
					<div className="main-cart-content">
						<div className="main-cart-content-list">
							{
								cartList.map((game, index)=>{
									return (
										<CartObject index={index} game={game}/>
									)
								})
							}
						</div>
						<div className="main-cart-content-pay"></div>
					</div>
				</main>
			</Layout>
		</div>
	)
}