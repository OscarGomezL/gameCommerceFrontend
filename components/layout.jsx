import Header from "./Header/header"
import Head from 'next/head'
import Footer from "./Footer/footer"
import Nav from "./Nav/nav"

import { Roboto_Slab } from '@next/font/google'
const robotoSlab = Roboto_Slab()

export default function Layout({children, needsSearcher=false, platform = ""}) {
	const isDs = platform.toLowerCase() == "ds" ? "content-ds" : ""
	return (
		<div className="layout">
			<Head>
				<title>GameCommerce</title>
			</Head>
			<style jsx global>
				{`
					* {
						font-family: ${robotoSlab.style.fontFamily};
					}
				`}
			</style>
			<Header needsSearcher={needsSearcher} platform={platform}/>
			<Nav/>
			<div className={`content ${isDs}`}>
				{children}
			</div>
			<Footer />
		</div>
	)
}
