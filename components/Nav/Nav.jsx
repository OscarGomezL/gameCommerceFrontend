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
			<div className='nav-link-container nav-container'>
				<Link href="/">
					<a className='link-home'>
						Home
					</a>
				</Link>
				<Link href="/about">
					<a className='link-about'>
						About
					</a>
				</Link>
				<Link href="/contact-us">
					<a className='link-contact'>
						Contact
					</a>
				</Link>
			</div>
			<MyAccount/>
		</nav>
	)
}