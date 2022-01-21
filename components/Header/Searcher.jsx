import React, {useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import NonReactSwal from 'sweetalert2'
import WithReactContent from 'sweetalert2-react-content'

export default function Searcher() {
	const Swal2 = WithReactContent(NonReactSwal)
	const [search, setSearch] = useState('')
	useEffect(() => {console.log(search)}, [search]);
	
	return (
		<>
			<FontAwesomeIcon 
				icon={faSearch}
				className='searchIcon'
				onClick={()=>{
					if(screen.width<1299) {
						Swal2.fire({
							title: "Search a Game",
							color:"#432",
							background: "rgb(230,178,77)",
							showConfirmButton: false,
							html: <input type="text" value={search} onInput={e=>setSearch(e.target.value)} placeholder="Name" className="swal2-input"/>,
						})
					}
					}
				}
			/>
			<input 
				type="text"
				placeholder='Search a Game'
				className='gameSearcher'
				value={search}
				onInput={e=>setSearch(e.target.value)}
			/>
		</>
	)
}
