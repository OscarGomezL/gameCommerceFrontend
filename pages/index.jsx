import Layout from "../components/layout"
import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'

import Xbox360 from "../public/home/xbox.png"
import Wii from "../public/home/wii.png"
import Ds from "../public/home/ds.png"

export default function Home() {
	return (
		<div className='page'>
			<Head>
				<meta name="description" content="gameCommerce" />
			</Head>
			<Layout singlePage={false} needsSearcher={false}>
				<main className="main-home">
					<Link 
						href='/wii'
						className="main_home_link"
					>
						<div className="home-link_content">
							<Image 
								className="home-link_content-image"
								src={Wii}
								alt="wii"
								priority={true}
							/>
							<div className="home-link_content-container_1">
								<div className="home-link_content-container_1-text">
									Wii
								</div>
							</div>
						</div>
					</Link>
					<Link
						href='/xbox360'
						className="main_home_link"
					>
						<div className="home-link_content">
							<Image 
								className="home-link_content-image"
								src={Xbox360}
								alt="xbox360"
								priority={true}
							/>
							<div className="home-link_content-container_1">
								<div className="home-link_content-container_1-text">
									Xbox
								</div>
							</div>
						</div>
					</Link>
					<Link 
						href='/ds'
						className="main_home_link"
					>
						<div className="home-link_content">
							<Image 
								className="home-link_content-image"
								src={Ds}
								alt="Ds"
								priority={true}
							/>
							<div className="home-link_content-container_1">
								<div className="home-link_content-container_1-text">
									Ds
								</div>
							</div>
						</div>
					</Link>
				</main>
			</Layout>
		</div>
	)
}