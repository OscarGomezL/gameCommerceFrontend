import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { logger, changeChecker } from "../../redux/actions"
import { useSelector } from "react-redux"

export default function gameCart({index,game}) {
  	const dispatch = useDispatch()
	const [defaultValue, setDefaultValue] = useState(1)
	const [price, setPrice] = useState(game.price)
	const changeCheck = useSelector(s=>s.changeCheck)
	
	return (
		<div className="cart-object" key={index+1}>
			<div className="cart-object-selector">
				<div className={`checkbox-${index} checkbox marked`}>
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
							dispatch(changeChecker('', !changeCheck))
							setDefaultValue(e.target.value)
						}}
					/>
					<div 
						className="cart-object-container_1-controls-delete"
						onClick={()=>{
							dispatch(changeChecker('', !changeCheck))
							console.log('AH')
							let UserObj = JSON.parse(localStorage.getItem("User"))
							UserObj.user.gamesCart.splice(index, 1)
							dispatch(logger('PATCH',UserObj))
							let gamesCart = UserObj.user.gamesCart
							fetch(`http://localhost:4000/v1/user/update/${UserObj.user.id}`, {
								method: "PATCH",
								headers: {
									"content-type": "application/json",
								},
								body: JSON.stringify({gamesCart})
							}).then(r=>r.json()).then(r=>console.log(r)).catch(e=>console.log(e))
						}}>
						<div className="cart-object-container_1-controls-delete-text">
							Delete
						</div>
					</div>
				</div>
			</div>
			<div className="cart-object-price">
				<div className="cart-object-price-text">{price}$</div>
			</div>
		</div>
  	)
}