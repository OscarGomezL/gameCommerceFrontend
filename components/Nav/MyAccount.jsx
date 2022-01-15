import React from 'react'
import NonReactSwal from 'sweetalert2'
import WithReactContent from 'sweetalert2-react-content'
import Swal1 from 'sweetalert'

export default function MyAccount() {
	const Swal2 = WithReactContent(NonReactSwal)
	const registerSwal = () => {
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
				Swal2.fire({
					title:'Congratulations your account has been successfully created',
					text: "You can refresh the page and you should be able to login from this account",
					background: "rgb(230,178,77)",
					confirmButtonColor: "rgb(230,178,77)",
					color: "#432",
					icon: "success",
					iconColor: "#432",
				})

			}
		})
	}
	const loginSwal = () => {
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
		})

	}
	return (
		<div 
			className='my-account-container nav-container' 
			onClick={()=>{
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
			}}
		>
			My Account
		</div>
	)
}