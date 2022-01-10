import Logged from './Logged'
import Unlogged from './Unlogged'

export default function Menu() {
	let content;
	let logged = false
	logged ? content = <Logged/> : content = <Unlogged/>
	return (
		<div className="menu-container">
			<div className='menu active'>
				{content}
			</div>
			<div 
				className="menu-screen active"
				onClick={()=>{
					document.querySelector('.menu').classList.add('active')
					document.querySelector('.menu-screen').classList.add('active')
				}}
			/>
		</div>
	)
}
