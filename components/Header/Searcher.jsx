import React, {useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import NonReactSwal from 'sweetalert2'
import WithReactContent from 'sweetalert2-react-content'

export default function Searcher({needsSearcher}) {
	const Swal2 = WithReactContent(NonReactSwal)
	const [search, setSearch] = useState('')
	
	useEffect(() => {console.log(search)}, [search]);
	
	let input = <input 
					type="text" 
					placeholder='Search a Game' 
					className='gameSearcher' 
					onInput={e=>setSearch(e.target.value)}
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
