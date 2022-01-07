import Link from 'next/link'
export default function Nav() {
	return (
		<nav>
			<div className='nav-platforms-container nav-container'>
				<Link href='/pc'>
					<a>
						Pc
					</a>
				</Link>
				<Link href='/play-station'>
					<a>
						PlayStation
					</a>
				</Link>
				<Link href='/switch'>
					<a>
						Switch
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
		</nav>
	)
}