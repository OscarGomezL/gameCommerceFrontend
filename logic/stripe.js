export const buy = (data) => {
	console.log(data)
	fetch('http://localhost:4000/v1/stripe/create-checkout-session', {
		method: 'POST',
		headers: {
			'Content-Type':'application/json'
		},
		body: JSON.stringify({
			items: [
				{ id: 1, quantity: 3},
				{ id: 2, quantity: 1},
			]
		}),
	}).then(res=> {
		if(res.ok) return res.json()
		return res.json().then(json=>Promise.reject(json))
	}).then(({url}) => {
		window.location = url
	}).catch(console.error)
}