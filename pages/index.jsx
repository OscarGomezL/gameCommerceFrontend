import Layout from "../components/Layout"
import Link from "next/link"

export default function Home() {
	return (
		<div className='page'>
			<Layout singlePage={false} needsSearcher={false}>
				<main className="main-home">
					<Link href='/wii'>
						<a>
							<div className="home-link_content">
								<img className="home-link_content-image" src="https://upload.wikimedia.org/wikipedia/commons/8/83/Wii_console.png" alt="" />
								<div className="home-link_content-text">Wii</div>
							</div>
						</a>
					</Link>
					<Link href='/xbox360'>
						<a>
							<div className="home-link_content">
								<img className="home-link_content-image" src="http://assets.stickpng.com/thumbs/585ea2a8cb11b227491c350d.png" alt="" />
								<div className="home-link_content-text">Xbox 360</div>
							</div>
						</a>
					</Link>
					<Link href='/ds'>
						<a>
							<div className="home-link_content">
								<img className="home-link_content-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Nintendo-DS-Lite-w-stylus.png/1200px-Nintendo-DS-Lite-w-stylus.png" alt="" />
								<div className="home-link_content-text">Ds</div>
							</div>
						</a>
					</Link>
				</main>
			</Layout>
		</div>
	)
}