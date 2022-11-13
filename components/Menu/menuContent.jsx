import {revertModals} from '../../logic/generalLogic'
import {reportBugsSwal, sendSuggestionsSwal} from '../../logic/menuContentSwal'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faBug, faIdCard, faCode,  faLightbulb, faRoute, faShoppingCart} from '@fortawesome/free-solid-svg-icons'

export default function MenuContent() {
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
				<Link href="/user">
						<div>
							<FontAwesomeIcon icon={faIdCard}/>
							Your Account Information
						</div>
				</Link>
				<Link href="/cart">
						<div>
							<FontAwesomeIcon icon={faShoppingCart}/>
							Cart
						</div>
				</Link>
				<Link href="/directions">
						<div>
							<FontAwesomeIcon icon={faRoute}/>
							Directions
						</div>
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
