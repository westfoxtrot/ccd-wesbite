import React from 'react'
import './layout.scss'
export default ({ children }) => (
	<div>
		<div class="header">
			<h1>Header placeholder</h1>
		</div>

		<div class="body main">
			{children}
		</div>
	</div>
)
