import React, {useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import NonReactSwal from 'sweetalert2'
import WithReactContent from 'sweetalert2-react-content'
//redux
import { useDispatch } from 'react-redux'
import { searcher } from '../../redux/actions'

export default function Searcher({needsSearcher, platform}) {
	const Swal2 = WithReactContent(NonReactSwal)
	//redux
	const dispatch = useDispatch()
	
	let input = <input 
					type="text" 
					placeholder='Search a Game' 
					className='gameSearcher'
					onChange={e=> {dispatch(searcher(platform.toUpperCase(), e.target.value));} }
				/>
	let ico = <FontAwesomeIcon 
				icon={faSearch}
				className='searchIcon'
				onClick={()=>{
					if(screen.width<1299) {
						Swal2.fire({
							title: "Search a Game",
							color:"#432",
							background: "rgb(230,178,77)",
							showConfirmButton: false,
							html: <input type="text" onInput={e=>setSearch(e.target.value)} placeholder="Name" className="swal2-input"/>,
						})
					}
				}}
/>
	needsSearcher ? "" : input = ""
	needsSearcher ? "" : ico = "" 
	return (
		<>
			{ico}
			{input}
		</>
	)
}
