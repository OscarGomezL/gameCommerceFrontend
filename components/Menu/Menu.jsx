import MenuContent from './menuContent'

export default function Menu() {
	const revertModals = () => {
		document.querySelector('.menu').classList.toggle('active')
		document.querySelector('.menu-screen').classList.toggle('active')
	}
	return (
		<div className="menu-container">
			<div className='menu active'>
				<MenuContent/>
			</div>
			<div className="menu-screen active" onClick={revertModals}/>
		</div>
	)
}
