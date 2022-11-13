import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import src from '../../public/headerIcon.png'
import Searcher from './searcher'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Menu from '../Menu/menu'

export default function Header({needsSearcher, platform}) {
	return (
		<header>
			<Menu/>
			<Image
				alt='gameCommerce'
				src={src}
				priority={true}
				className='headerIcon'
			/>
			<div className='titleContainer'>
				<h1 className='title'>GameCommerce</h1>
			</div>
			<Searcher needsSearcher={needsSearcher} platform={platform}/>
			<FontAwesomeIcon 
				icon={faBars}
				className={`menuIcon ${needsSearcher}`}
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
