import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import src from '../public/headerIcon.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faBars} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
	const [mobile, setMobile] = useState(false)
	const addClass = (divClass, newClass) => {
		document.querySelector(`.${divClass}`).classList.add(`${newClass}`)
		}
	const checkDevice = () => {
		if(screen.width<1299) {
			addClass('gameSearcher','input-portrait-gameSearcher')
			setMobile(true)
		}
	}
	useEffect(() => {
		checkDevice()
	}, [])
	return (
		<header>
			<div className='imageContainer'>
				<Image
					src={src}
					width={80}
					height={80}
					className='headerIcon'
				/>
			</div>
			<div className='titleContainer'>
				<div className='title'>GameCommerce</div>
			</div>
			<FontAwesomeIcon 
				icon={faSearch}
				className='searchIcon'
				onClick={()=>{console.log(mobile);}}
			/>
			<input 
				type="text"
				placeholder='Search a game'
				className='gameSearcher'
			/>
			<FontAwesomeIcon 
				icon={faBars}
				className='menuIcon'
				onClick={() => {
					let menu = document.querySelector('.menu') 
					let screen = document.querySelector('.menu-screen')	
					menu.classList.toggle('active')
					screen.classList.toggle('active')
				}}
			/>
		</header>
	)
}