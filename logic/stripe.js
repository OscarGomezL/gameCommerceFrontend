export const buy = (data) => {
	let items = data.filter(el=>el!=="").map(game=> {
		if(game.length === 1) game = game[0]
		return {id: game.listNum, quantity: game.quantity}
	})
	fetch('https://game-commerce.herokuapp.com/v1/stripe/create-checkout-session', {
		method: 'POST',
		headers: {
			'Content-Type':'application/json'
		},
		body: JSON.stringify({items}),
	}).then(res=> {
		if(res.ok) return res.json()
		return res.json().then(json=>Promise.reject(json))
	}).then(({url}) => {
		window.location = url
	}).catch(console.error)
}