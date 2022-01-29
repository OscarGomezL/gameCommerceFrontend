import NonReactSwal from 'sweetalert2'
import WithReactContent from 'sweetalert2-react-content'
import Swal1 from 'sweetalert'
import jwtDecode from 'jwt-decode'

export function contextLogin(token) {
	const jsonToken = jwtDecode(token)
	console.log(jsonToken)
	localStorage.setItem("User", JSON.stringify(jsonToken))
}
export function registerSwal() {
	const Swal2 = WithReactContent(NonReactSwal)
	Swal2.fire({
		title:"Register",
		html: `
		<form>
			<input id="register-swal-input-4" type="text" placeholder="Name" class="swal2-input">
			<input id="register-swal-input-3" type="text" placeholder="Username" class="swal2-input"/>
			<input id="register-swal-input-2" type="email" placeholder="Email" class="swal2-input"/>
			<input id="register-swal-input-1" type="password" placeholder="Password" class="swal2-input"/>
		</form>
		`,
		preConfirm: function() {
			return new Promise((res,rej) =>{
				const validateField = (idNum, placeholder, email) => {
					let inputValue = document.getElementById(`register-swal-input-${idNum}`).value
					if(inputValue){
						if(email) {
							if(!inputValue.includes('@')) Swal2.showValidationMessage('Non valid email direction')
						}
						return inputValue
					}
					else Swal2.showValidationMessage(`${placeholder} data missing`)
				}
				res({
					password: validateField(1,"Password",false),
					email: validateField(2,"Email",true),
					username: validateField(3,"Username",false),
					name: validateField(4,"Name",false),
				})
			})
		},
		color:"#432",
		background: "rgb(230,178,77)",
		confirmButtonColor: "rgb(230,178,77)",
	}).then(data=>{
		if(data.value){
			data.value.gamesCart = []
			data.value.directions = []
			fetch("http://localhost:4000/v1/user/signup", {
				method: "POST",
				body: JSON.stringify(data.value),
				headers: {"Content-type": "application/json"}
			}).then(response=>response.json()).then(data=>{
				if(!data.message) {
					Swal2.fire({
						title:'Congratulations your account has been successfully created',
						text: "You should now be able to login from the account you registered",
						background: "rgb(230,178,77)",
						confirmButtonColor: "rgb(230,178,77)",
						color: "#432",
						icon: "success",
						iconColor: "#432",
					})
				}
				else {
					Swal2.fire({
						title:'The email you tried to register is already signed up',
						text: "Try to login with that email instead",
						background: "rgb(230,178,77)",
						confirmButtonColor: "rgb(230,178,77)",
						color: "#432",
						icon: "error",
						iconColor: "#432",
					})
				}
			})
		}
	})
}
export function getUserData() {
	return localStorage.getItem("User")
}

export function loginSwal() {
	const Swal2 = WithReactContent(NonReactSwal)
	Swal2.fire({
		title:"Login",
		html: `
			<input id="login-swal-input-1" type="email" placeholder="Email" class="swal2-input" required="true"/>
			<input id="login-swal-input-2" type="password" placeholder="Password" class="swal2-input" required="true"/>
		`,
		color:"#432",
		background: "rgb(230,178,77)",
		confirmButtonColor: "rgb(230,178,77)",
		preConfirm: function() {
			return new Promise((res,rej) =>{
				const validateLoginField = (idNum, placeholder, email) => {
					let inputValue = document.getElementById(`login-swal-input-${idNum}`).value
					if(inputValue){
						if(email) {
							if(!inputValue.includes('@')) Swal2.showValidationMessage('Non valid email direction')
						}
						return inputValue
					}
					else Swal2.showValidationMessage(`${placeholder} data missing`)
				}
				res({
					password: validateLoginField(2,"Password", false),
					email: validateLoginField(1, "Email", true)
				})
			})
		}
	}).then(data=>{
		if(data.value) {
			fetch("http://localhost:4000/v1/user/signin", {
				method: "POST",
				body: JSON.stringify(data.value),
				headers: {"Content-type": "application/json"}
			}).then(response=>response.json()).then(data=>{
				if(!data.user) {
					Swal2.fire({
						title: data.message,
						text: "Try to login again",
						background: "rgb(230,178,77)",
						confirmButtonColor: "rgb(230,178,77)",
						color: "#432",
						icon: "error",
						iconColor: "#432",
					})
				}
				else {
					contextLogin(data.token)
					Swal2.fire({
						title: "Congratulations!",
						text: `You are now logged in as ${data.user.username}`,
						background: "rgb(230,178,77)",
						confirmButtonColor: "rgb(230,178,77)",
						color: "#432",
						icon: "success",
						iconColor: "#432",
					})
				}
			})
		}
	})
}
export function myAccountSwal() {
	if(!getUserData()){
		Swal1({
			title:"Join GameCommerce Now!",
			text : "Do you already have an account?",
			buttons : {
				in : {
					text:"Sign In",
					value: "in"
				},
				up : {
					text: "Sign Up",
					value: "up"
				}
			}
		}).then(btn=>{
		if(!btn) return
		if(btn == "in") {
			loginSwal()	
		}
		else {
			registerSwal()
		}
		})
	}
	else {
		Swal1({
			title: `You are now logged in with ${JSON.parse(getUserData()).user.email}`,
			buttons : {
				password : {
					text:"Change My Password",
					value: "change"
				},
				out : {
					text: "Logout",
					value: "out"
				}
			}
		}).then(btn=>{
			if (!btn) return
			if(btn == "out") {
				localStorage.removeItem("User")
			}
		})
	}
}