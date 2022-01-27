import Link from 'next/link'
import MyAccount from './MyAccount'

export default function Nav() {
	return (
		<nav>
			<div className='nav-platforms-container nav-container'>
				<Link href='/xbox360'>
					<a>
						Xbox360
					</a>
				</Link>
				<Link href='/wii'>
					<a>
						Wii
					</a>
				</Link>
				<Link href='/ds'>
					<a>
						DS
					</a>
				</Link>
			</div>
			<MyAccount/>
		</nav>
	)
}