import React from 'react'
import '../styles/layout.scss'
import Header from './header.js'
export default ({ children }) => (
	<div class="main">
		<Header/>

		<div class="content">
			{children}
		</div>
	</div>
)
