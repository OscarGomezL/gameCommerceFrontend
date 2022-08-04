export const buy = (data) => {
	let items = data.filter(el=>el!=="").map(game=> {
		return {id: game.listNum, quantity: game.quantity}
	})
	fetch('http://localhost:4000/v1/stripe/create-checkout-session', {
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