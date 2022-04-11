import jwtDecode from 'jwt-decode'
import {getCountryDropList} from '../../logic/return.js'
//swal
import NonReactSwal from 'sweetalert2'
import WithReactContent from 'sweetalert2-react-content'
import Swal1 from 'sweetalert'
//redux
import { logger } from '../../redux/actions'
import { useDispatch } from "react-redux"

const MyAccount = () => {

	const Swal2 = WithReactContent(NonReactSwal)
	const dispatch = useDispatch()

	const getUserData = () => JSON.parse(localStorage.getItem("User"))
	const reduxLogin = (token) => {
		const jsonToken = jwtDecode(token)
		dispatch(logger('PATCH', jsonToken))
	}
	const loginSwal = () => {
		Swal2.fire({
			title:"Login",
			html: `
				<input id="login-swal-input-1" type="email" placeholder="Email" class="swal2-input" required="true"/>
				<input id="login-swal-input-2" type="password" placeholder="Password" class="swal2-input" required="true"/>
			`,
			color:"var(--brown_1)",
			background: "var(--brown_3)",
			confirmButtonColor: "var(--brown_3)",
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
							background: "var(--brown_3)",
							confirmButtonColor: "var(--brown_3)",
							color: "var(--brown_1)",
							icon: "error",
							iconColor: "var(--brown_1)",
						})
					}
					else {
						reduxLogin(data.token)
						Swal2.fire({
							title: "Congratulations!",
							text: `You are now logged in as ${data.user.username}`,
							background: "var(--brown_3)",
							confirmButtonColor: "var(--brown_3)",
							color: "var(--brown_1)",
							icon: "success",
							iconColor: "var(--brown_1)",
						})
					}
				})
			}
		})
	}
	const registerSwal = () => {
		Swal2.fire({
			title:"Register",
			html: `
			<form>
				${getCountryDropList("register-swal-input-0")}
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
						console.log(inputValue)
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
						country: validateField(0,"Country", false),
					})
				})
			},
			color:"var(--brown_1)",
			background: "var(--brown_3)",
			confirmButtonColor: "var(--brown_3)",
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
							background: "var(--brown_3)",
							confirmButtonColor: "var(--brown_3)",
							color: "var(--brown_1)",
							icon: "success",
							iconColor: "var(--brown_1)",
						})
					}
					else {
						Swal2.fire({
							title:'The email you tried to register is already signed up',
							text: "Try to login with that email instead",
							background: "var(--brown_3)",
							confirmButtonColor: "var(--brown_3)",
							color: "var(--brown_1)",
							icon: "error",
							iconColor: "var(--brown_1)",
						})
					}
				})
			}
		})
	}
	const myAccountSwal = () => {
		console.log(getUserData())
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
				title: `You are now logged in with ${getUserData().user.email}`,
				buttons : {
					delete : {
						text: "Delete My Account",
						value: "delete"
					},
					out : {
						text: "Logout",
						value: "out"
					},
				},
			}).then(btn=>{
				if (!btn) return
				if(btn == "out") {
					dispatch(logger('DELETE'))
				}
				if(btn == "delete") {
					console.log(getUserData().user.id)
					fetch(`http://localhost:4000/v1/user/delete/${getUserData().user.id}`, {
						method: "DELETE",
					}).then(r=>r.json()).then(r => console.log(r)).catch(console.log)
					dispatch(logger('DELETE'))
				}
			})
		}
	}
	return (
		<div 
			className='my-account-container nav-container' 
			onClick={myAccountSwal}
		>
			My Account
		</div>
	)
}
export default MyAccount