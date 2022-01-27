import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressBook, faBars, faHome, faIdCard, faShoppingCart} from '@fortawesome/free-solid-svg-icons'

export default function MenuContent() {
	const revertModals = () => {
		document.querySelector('.menu').classList.toggle('active')
		document.querySelector('.menu-screen').classList.toggle('active')
	}
	return (
  		<div className='menu-content'>
			<div className='ico-container'>
				<FontAwesomeIcon 
					icon={faBars}
					className={`.menu-button`}
					onClick={revertModals}
				/>
			</div>
			<div className='account-container'>
				Account
			</div>
			<div className='link-container'>
				<Link href="/">
					<a>
						<div>
							<FontAwesomeIcon icon={faHome}/>
							Home
						</div>
					</a>
				</Link>
				<Link href="/contact">
					<a>
						<div>
							<FontAwesomeIcon icon={faAddressBook}/>
							Contact Me
						</div>
					</a>
				</Link>
				<Link href="/about">
					<a>
						<div>
							<FontAwesomeIcon icon={faIdCard}/>
							About Me
						</div>
					</a>
				</Link>
				<Link href="/cart">
					<a>
						<div>
							<FontAwesomeIcon icon={faShoppingCart}/>
							Cart
						</div>
					</a>
				</Link>
			</div>
			<div className='more-container'>
				<a href="https://betterambience-1.web.app/" target="_blank">
					<div>
						<img src="https://i.imgur.com/CiSmn0s.png"/>
						betterAmbience
					</div>
				</a>
				<a href="https://daysbetween-2.web.app/" target="_blank">
					<div>
						<img src="https://daysbetween-2.web.app/static/media/theIcon.5363db2f.png" />
						daysBetween
					</div>	
				</a>
			</div>
  		</div>
	);
}