import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

export default function Searcher() {
	return (
		<>
			<FontAwesomeIcon 
				icon={faSearch}
				className='searchIcon'
				onClick={()=>{
					if(screen.width<1299) {
						let searcher = document.querySelector('.gameSearcher') 
						let screen = document.querySelector('.menu-screen')	
						searcher.classList.toggle('active')
						screen.classList.toggle('active')}
					}
				}
			/>
			<input 
				type="text"
				placeholder='Search a Game'
				className='gameSearcher'
			/>
		</>
	)
}
