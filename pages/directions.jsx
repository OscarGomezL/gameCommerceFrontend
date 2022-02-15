import Layout from "../components/Layout"
import NonReactSwal from 'sweetalert2'
import { getCountryDropList } from "../logic/return"
import { mustLogin } from "../logic/mustLoginSwal"
import WithReactContent from 'sweetalert2-react-content'
const Swal2 = WithReactContent(NonReactSwal)
import {useContext, useEffect, useState} from 'react'
import AuthContext from "../context/AuthContext"

export default function Directions() {
	const {auth,dataPatch} = useContext(AuthContext)
	const [directions, setDirections] = useState([])
	useEffect(() => {
		setDirections(auth ? auth.user.directions : [])
	}, [auth ? auth.user.directions : ""]);
	const addDirectionsSwal = () => {
		if(auth) {
			Swal2.fire({
				title: "Add New Direction",
				color:"#432",
				background: "rgb(230,178,77)",
				confirmButtonColor: "rgb(230,178,77)",
				confirmButtonText: "Add",
				html: `
					${getCountryDropList("add-swal-input-8")}
					<input id="add-swal-input-7" type="text" maxlength="50" placeholder="Direction, Postal Mail, Company Name" class="swal2-input"/>
					<input id="add-swal-input-6" type="text" maxlength="50" placeholder="Department, Suite, Building Name, Flat" class="swal2-input"/>
					<input id="add-swal-input-5" type="text" maxlength="5" placeholder="Zip Code" class="swal2-input"/>
					<input id="add-swal-input-4" type="text" maxlength="20" placeholder="City" class="swal2-input"/>
					<input id="add-swal-input-3" type="text" maxlength="20" placeholder="State, Province, Region" class="swal2-input"/>
					<input id="add-swal-input-2" type="text" maxlength="50" placeholder="Full Name" class="swal2-input"/>
					<input id="add-swal-input-1" type="text" maxlength="20" title="Could be helpful to delivery" placeholder="Telephone Number" class="swal2-input"/>
				`,
				preConfirm: function() {
					return new Promise((res,rej) =>{
						const validateField = (idNum, placeholder, required) => {
							let inputValue = document.getElementById(`add-swal-input-${idNum}`).value
							if(!required) return inputValue
							if(inputValue) return inputValue
							else Swal2.showValidationMessage(`${placeholder} data missing`)
						}
						res({
							phone: validateField(1,"Phone", true),
							fullName: validateField(2,"Full Name", true),
							state: validateField(3,"State",false),
							city: validateField(4,"City",true),
							zip: validateField(5,"zip",true),
							specific: validateField(6,"specific",false),
							direction: validateField(7,"Direction",true),
							country: validateField(8,"Country",true),
						})
					})
				}
			}).then(obj=>{
				if(obj.value) {
					let UserObj = JSON.parse(localStorage.getItem("User"))
					UserObj.user.directions.push(obj.value)
					dataPatch(UserObj)
					let directions = UserObj.user.directions
					fetch(`http://localhost:4000/v1/user/update/${UserObj.user.id}`, {
						method: "PATCH",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify({directions})
					}).then(r=>r.json).then(r=>console.log(r)).catch(e=>console.log(e))			}
			})
		}
		else mustLogin()
	}
	if(directions === undefined) return null
	return (
		<div className='page'>
			<Layout singlePage={false} needsSearcher={false}>
				<main className="main-directions">
					<h2>Directions</h2>
					<div className="main-directions-content">
						<div className="add-direction" onClick={addDirectionsSwal}>+<br/>Add Direction</div>
						{
							directions.map((direction, index)=>{
								return (
									<div className="direction" key={index}>
										<div className="direction-data">
											<div className="direction-data-element"><b>{direction.fullName}</b></div><br/>
											<div className="direction-data-element">{direction.direction}</div><br/>
											<div className="direction-data-element">{direction.specific}</div><br/>
											<div className="direction-data-element">{direction.country}</div><br/>
											<div className="direction-data-element">{direction.phone}</div><br/>
										</div>
										<div className="direction-actions">
											<div 
												className="direction-action-delete"
												onClick={()=>{
													let UserObj = JSON.parse(localStorage.getItem("User"))
													UserObj.user.directions.splice(index, 1)
													dataPatch(UserObj)
													let directions = UserObj.user.directions
													fetch(`http://localhost:4000/v1/user/update/${UserObj.user.id}`, {
														method: "PATCH",
														headers: {
															"content-type": "application/json",
														},
														body: JSON.stringify({directions})
													}).then(r=>r.json()).then(r=>console.log(r)).catch(e=>console.log(e))
												}}
											>
												<div className="direction-action-delete-text">
													Delete
												</div>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
				</main>
			</Layout>
		</div>
	)
}