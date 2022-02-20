import { useDispatch } from "react-redux"
import { logger } from "../../redux/actions"

export default function gameCart({index,game}) {
  	const dispatch = useDispatch()
	return (
		<div className="cart-object" key={index}>
			<div className="cart-object-selector">
				<input type="checkbox" />
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
					<input type="number" className="cart-object-container_1-controls-quantity"/>
					<div className="cart-object-container_1-controls-delete">
						<div
							className="cart-object-container_1-controls-delete-text"
							onClick={()=>{
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
							}}
						>
							Delete
						</div>
					</div>
				</div>
			</div>
			<div className="cart-object-price">
				<div className="cart-object-price-text">{game.price}$</div>
			</div>
		</div>
  	)
}