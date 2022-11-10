import Link from 'next/link'
import MyAccount from './myAccount'

export default function Nav() {
	return (
		<nav>
			<div className='nav-platforms-container nav-container'>
				<Link href='/'>
					Home
				</Link>
				<Link href='/about'>
					About
				</Link>
			</div>
			<MyAccount/>
		</nav>
	)
}
