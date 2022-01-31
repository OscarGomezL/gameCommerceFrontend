import { useEffect, useState, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressBook, faBars, faHome, faIdCard, faShoppingCart} from '@fortawesome/free-solid-svg-icons'

export default function MenuContent() {
	const revertModals = () => {
		document.querySelector('.menu').classList.toggle('active')
		document.querySelector('.menu-screen').classList.toggle('active')
	}
	const [data, setData] = useState()
	const getData = async() => {
		const res = await fetch("http://localhost:4000/v1/link/readAll")
		const data = await res.json()
		setData(data)
	}
	const {auth, dataPatch} = useContext(AuthContext)
	useEffect(() => {
		getData()
		console.log(auth)
	}, []);
	
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
				Your Account:<br/>
				{auth ? "Username: " + auth.user.username : "You have not logged in yet"}<br/>
				{auth ? "Email: " + auth.user.email : ""}
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
				<a href={data ? data[0].link : ""} target="_blank">
					<div>
						<img src={data ? data[0].logo : ""}/>
						{data ? data[0].name : ""}
					</div>
				</a>
				<a href={data ? data[1].link : ""} target="_blank">
					<div>
						<img src={data ? data[1].logo : ""} />
						{data ? data[1].name : ""}
					</div>	
				</a>
			</div>
  		</div>
	);
}