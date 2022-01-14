import Logged from './Logged'
import Unlogged from './Unlogged'

export default function Menu() {
	let accountContent;
	let logged = false
	logged ? accountContent = <Logged/> : accountContent = <Unlogged/>
	const revertModals = () => {
		document.querySelector('.menu').classList.add('active')
		document.querySelector('.menu-screen').classList.add('active')
		// non-desktop modals
		if(screen.width<1299) {
			document.querySelector('.input-portrait-gameSearcher').classList.add('active')	
		}
	}
	// <div onClick={revertModals}>XD</div>
	return (
		<div className="menu-container">
			<div className='menu active'>
				{accountContent}
			</div>
			<div className="menu-screen active" onClick={revertModals}/>
		</div>
	)
}
