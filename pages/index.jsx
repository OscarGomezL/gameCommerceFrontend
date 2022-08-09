import Layout from "../components/layout"
import Link from "next/link"

export default function Home() {
	return (
		<div className='page'>
			<Layout singlePage={false} needsSearcher={false}>
				<main className="main-home">
					<Link href='/wii'>
						<div className="home-link_content">
							<img className="home-link_content-image" src="https://upload.wikimedia.org/wikipedia/commons/8/83/Wii_console.png" alt="" />
							<div className="home-link_content-container_1">
								<div className="home-link_content-container_1-text">
									Wii
								</div>
							</div>
						</div>
					</Link>
					<Link href='/xbox360'>
						<div className="home-link_content">
							<img className="home-link_content-image" src="https://upload.wikimedia.org/wikipedia/commons/0/03/Xbox-360-Consoles-Infobox.png" alt="" />
							<div className="home-link_content-container_1">
								<div className="home-link_content-container_1-text">
									Xbox
								</div>
							</div>
						</div>
					</Link>
					<Link href='/ds'>
						<div className="home-link_content">
							<img className="home-link_content-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Nintendo-DS-Lite-w-stylus.png/1200px-Nintendo-DS-Lite-w-stylus.png" alt="" />
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