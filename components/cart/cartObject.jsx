import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { logger, changeChecker } from "../../redux/actions"
import { useSelector } from "react-redux"

export default function GameCart({index,game}) {
	const dispatch = useDispatch()
	const [defaultValue, setDefaultValue] = useState(game.quantity)
	const [price, setPrice] = useState(game.price * game.quantity)
	const changeCheck = useSelector(s=>s.changeCheck)

	return (
		<div className="cart-object" key={index}>
			<div className="cart-object-selector">
				<div
					className={`checkbox-${index} checkbox marked`}
					value={true}
					onClick={()=>{
						dispatch(changeChecker('', !changeCheck))
						document.querySelector(`.checkbox-${index}`).classList.toggle('marked') 
						document.querySelector(`.checkbox-${index}`).setAttribute("value", !(document.querySelector(`.checkbox-${index}`).attributes.value.value === "true"))
					}}
				>
					✔
				</div>
			</div>
			<div className="cart-object-image">
				<img src={game.logo} className={`${game.console}-ds`} alt="" />
			</div>
			<div className="cart-object-container_1">
				<div className="cart-object-container_1-title">
					<div className="cart-object-container_1-title-text">
						<b> {game.title}</b><br/>
						{game.console}
					</div>
				</div>
				<div className="cart-object-container_1-controls">
					<input 
						type="number"
						onKeyUp={e=>{
							if(e.target.value < 0){
								setDefaultValue(1)
								dispatch(changeChecker('', !changeCheck))
								setPrice(game.price)
							}
						}}
						min={1}
						className="cart-object-container_1-controls-quantity"
						value={defaultValue}
						onChange={e=>{
							setPrice(game.price*e.target.value)
							setDefaultValue(e.target.value)

							let UserObj = JSON.parse(localStorage.getItem("User"))
							UserObj.user.gamesCart[index][0].quantity = parseInt(e.target.value) 
							dispatch(logger('PATCH',UserObj))

							fetch(`https://game-commerce.herokuapp.com/v1/user/update/${UserObj.user.id}`, {
								method: "PATCH",
								headers: {
									"content-type": "application/json",
								},
								body: JSON.stringify({gamesCart: UserObj.user.gamesCart})
							}).then(r=>r.json()).then(r=>dispatch(changeChecker('', !changeCheck))).catch(console.log)
						}}
					/>
					<div 
						className="cart-object-container_1-controls-delete"
						onClick={()=>{
							let UserObj = JSON.parse(localStorage.getItem("User"))
							UserObj.user.gamesCart.splice(index, 1, "")
							dispatch(logger('PATCH',UserObj))
							let gamesCart = UserObj.user.gamesCart.filter(el => el !== "")
							fetch(`https://game-commerce.herokuapp.com/v1/user/update/${UserObj.user.id}`, {
								method: "PATCH",
								headers: {
									"content-type": "application/json",
								},
								body: JSON.stringify({gamesCart})
							}).then(r=>r.json()).then(r=>dispatch(changeChecker('', !changeCheck))).catch(console.log)
						}}>
						<div className="cart-object-container_1-controls-delete-text">
							Delete
						</div>
					</div>
				</div>
			</div>
			<div className="cart-object-price">
				<div className={`cart-object-price-text ${index}`}>{price}$</div>
			</div>
		</div>
  	)
}