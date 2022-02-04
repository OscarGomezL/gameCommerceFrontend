import { useContext} from 'react'
import {revertModals} from './../../logic/generalLogic'
import {reportBugsSwal, sendSuggestionsSwal} from './../../logic/swalLogic'
import AuthContext from '../../context/AuthContext'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressBook, faBars, faBug, faHome, faIdCard, faCode,  faLightbulb, faRoute, faShoppingCart, faGamepad} from '@fortawesome/free-solid-svg-icons'

export default function MenuContent() {
	const {auth} = useContext(AuthContext)
	return (
  		<div className='menu-content'>
			<div className='ico-container'>
				<FontAwesomeIcon 
					icon={faBars}
					className={`.menu-button`}
					onClick={revertModals}
				/>
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
							Contact The Developer
						</div>
					</a>
				</Link>
				<Link href="/about-developer">
					<a>
						<div>
							<FontAwesomeIcon icon={faCode}/>
							About The Developer
						</div>
					</a>
				</Link>
				<Link href="/about-gameCommerce">
					<a>
						<div>
							<FontAwesomeIcon icon={faGamepad}/>
							About GameCommerce
						</div>
					</a>
				</Link>
				<Link href="/user">
					<a>
						<div>
							<FontAwesomeIcon icon={faIdCard}/>
							Your Account Information
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
				<Link href="/directions">
					<a>
						<div>
							<FontAwesomeIcon icon={faRoute}/>
							Directions
						</div>
					</a>
				</Link>
					<a onClick={sendSuggestionsSwal}>
						<div>
							<FontAwesomeIcon icon={faLightbulb}/>
							Send Suggestions
						</div>
					</a>
					<a onClick={reportBugsSwal}>
						<div>
							<FontAwesomeIcon icon={faBug}/>
							Report Bugs
						</div>
					</a>
			</div>
  		</div>
	);
}