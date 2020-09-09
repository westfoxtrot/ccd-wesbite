import React from 'react'
import '../styles/layout.scss'
import Header from './header.js'
import { Helmet } from "react-helmet"
import favicon from '../images/favicon.ico'
export default ({ children }) => (
	<div class="main">
		<Header/>

		<div class="content">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Cable Car Designs</title>
				<meta name="description" content="End to end custom mechanical keyboard designs" />
				<link rel="canonical" href="http://cablecardesigns.co" />
				<link rel="icon" href={favicon} />
			</Helmet>
			{children}
		</div>
	</div>
)
