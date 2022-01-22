import Header from "./Header/Header"
import Head from 'next/head'
import Footer from "./Footer"
import Nav from "./Nav/Nav"

export default function Layout({children, singlePage, ds}) {
	const isSinglePage = singlePage ? "singlePage" : "";
	const isDs = ds ? "content-ds": ""
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
			<Header/>
			<Nav/>
			<div className={`content ${isDs} ${isSinglePage}`}>
				{children}
			</div>
			<Footer />
		</div>
	)
}