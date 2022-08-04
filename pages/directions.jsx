import Layout from "../components/Layout"
import NonReactSwal from 'sweetalert2'
import { getCountryDropList } from "../logic/return"
import { mustLogin } from "../logic/mustLoginSwal"
import WithReactContent from 'sweetalert2-react-content'
const Swal2 = WithReactContent(NonReactSwal)
import {useEffect, useState} from 'react'
//redux
import {logger} from '../redux/actions'
import { useSelector, useDispatch } from "react-redux"

export default function Directions() {
	
	const log = useSelector(s=>s.log)
	const dispatch = useDispatch()
	const [directions, setDirections] = useState(undefined)
	
	useEffect(() => {
		setDirections(log ? log.user.directions : [])
	}, [log]);

	const addDirectionsSwal = () => {
		if(log) {
			Swal2.fire({
				title: "Add New Direction",
				color:"var(--brown_1)",
				background: "var(--brown_3)",
				confirmButtonColor: "var(--brown_3)",
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
					UserObj.user.directions.push([obj.value])
					dispatch(logger('PATCH', UserObj))
					let directions = UserObj.user.directions
					fetch(`http://localhost:4000/v1/user/update/${UserObj.user.id}`, {
						method: "PATCH",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify({directions})
					}).then(r=>r.json()).catch(console.log)			}
			})
		}
		else mustLogin()
	}
	if(directions === undefined) return null
	return (
		<div className='page'>
			<Layout singlePage={false} needsSearcher={false}>
				<main className="main-directions">
					<div className="main-directions-title">
						<h2>Directions</h2>
					</div>
					<div className="main-directions-content">
						<div className="add-direction" onClick={addDirectionsSwal}>+<br/>Add Direction</div>
						{
							directions.map((direction, index)=>{
								return (
									<div className="direction" key={index}>
										<div className="direction-data">
											<div className="direction-data-element"><b>{direction[0].fullName}</b></div><br/>
											<div className="direction-data-element">{direction[0].direction}</div><br/>
											<div className="direction-data-element">{direction[0].specific}</div><br/>
											<div className="direction-data-element">{direction[0].country}</div><br/>
											<div className="direction-data-element">{direction[0].phone}</div><br/>
										</div>
										<div className="direction-actions">
											<div 
												className="direction-action-delete"
												onClick={()=>{
													let UserObj = JSON.parse(localStorage.getItem("User"))
													UserObj.user.directions.splice(index, 1)
													dispatch(logger('PATCH',UserObj))
													let directions = UserObj.user.directions
													fetch(`http://localhost:4000/v1/user/update/${UserObj.user.id}`, {
														method: "PATCH",
														headers: {
															"content-type": "application/json",
														},
														body: JSON.stringify({directions})
													}).then(r=>r.json()).catch(console.log)
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