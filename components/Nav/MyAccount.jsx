import React from 'react'
import NonReactSwal from 'sweetalert2'
import WithReactContent from 'sweetalert2-react-content'
import Swal1 from 'sweetalert'

export default function MyAccount() {
	const Swal2 = WithReactContent(NonReactSwal)
	const registerSwal = async() => {
		const {value: formValues } = await Swal2.fire({
			title:"Register",
			html: `
				<input id="register-swal-input-1" required="true"type="text" placeholder="Name" class="swal2-input">
				<input id="register-swal-input-2" required="true" type="text" placeholder="Username" class="swal2-input"/>
				<input id="register-swal-input-3" required="true" type="email" placeholder="Email" class="swal2-input"/>
				<input id="register-swal-input-4" required="true" type="password" placeholder="Password" class="swal2-input"/>
			`,
			color:"#432",
			background: "rgb(230,178,77)",
			confirmButtonColor: "rgb(230,178,77)",
			preConfirm: () => {
				return [
					document.getElementById("register-swal-input-1").value,
					document.getElementById("register-swal-input-2").value,
					document.getElementById("register-swal-input-3").value,
					document.getElementById("register-swal-input-4").value,
				]
			}
		})
	}
	const loginSwal = async() => {
		const {value: formValues} = await Swal2.fire({
			title:"Login",
			html: `
				<input type="email" placeholder="Email" class="swal2-input" required="true"/>
				<input type="password" placeholder="Password" class="swal2-input" required="true"/>
			`,
			color:"#432",
			confirmButtonColor: "rgb(230,178,77)",
			focusCancel: "true",
			background: "rgb(230,178,77)",
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
