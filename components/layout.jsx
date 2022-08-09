import Header from "./Header/header"
import Head from 'next/head'
import Footer from "./Footer/footer"
import Nav from "./Nav/Nav"

export default function Layout({children, needsSearcher=false, platform = ""}) {
	const isDs = platform.toLowerCase() == "ds" ? "content-ds" : ""
	return (
		<div className="layout">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
				<link 
					href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Roboto:ital,wght@1,500&display=swap"
					rel="stylesheet"
				/>
				<title>GameCommerce</title>
			</Head>
			<Header needsSearcher={needsSearcher} platform={platform}/>
			<Nav/>
			<div className={`content ${isDs}`}>
				{children}
			</div>
			<Footer />
		</div>
	)
}
