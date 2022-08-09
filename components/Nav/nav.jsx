import Link from 'next/link'
import MyAccount from './MyAccount'

export default function Nav() {
	return (
		<nav>
			<div className='nav-platforms-container nav-container'>
				<Link href='/'>
					<a>
						Home
					</a>
				</Link>
				<Link href='/about'>
					<a>
						About
					</a>
				</Link>
			</div>
			<MyAccount/>
		</nav>
	)
}
