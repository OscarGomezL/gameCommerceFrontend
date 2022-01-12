import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import src from '../../public/headerIcon.png'
import Searcher from './Searcher'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
	const addClass = (divClass, newClass) => {
		document.querySelector(`.${divClass}`).classList.add(`${newClass}`)
		}
	const checkDevice = () => {
		if(screen.width<1299) {
			addClass('gameSearcher','input-portrait-gameSearcher')
			addClass('gameSearcher','active')
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
			<Searcher/>
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