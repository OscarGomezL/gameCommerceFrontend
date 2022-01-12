import Logged from './Logged'
import Unlogged from './Unlogged'

export default function Menu() {
	let content;
	let logged = false
	logged ? content = <Logged/> : content = <Unlogged/>
	const revertModals = () => {
		document.querySelector('.menu').classList.add('active')
		document.querySelector('.menu-screen').classList.add('active')
		// non-desktop modals
		if(screen.width<1299) {
			document.querySelector('.input-portrait-gameSearcher').classList.add('active')	
		}
	}
	return (
		<div className="menu-container">
			<div className='menu active'>
				{content}
				<div onClick={revertModals}>XD</div>
			</div>
			<div 
				className="menu-screen active"
				onClick={revertModals}
			/>
		</div>
	)
}
