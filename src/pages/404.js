import React from 'react'
import Layout from '../components/layout'
import {Link as GatsbyLink} from 'gatsby'
export default () => (
	<Layout>
		<div className="container" style={{width: '100%'}}>
			<section className="hero is-primary">
				<div className="hero-body">
					<div className="container">
						<h1 className="title is-1">
							Page not found
						</h1>
						<h2 className="subtitle is-6">
							Site is still under development
						</h2>
					</div>
				</div>
			</section>
			<section className="container" style={{ marginTop: '24px'}}>
				<div className="columns">
					<div className="column">
						<div className="content">
							<span>
								You discovered a page I didn't finish yet! Sorry about that - for info about any of my designs please visit the contact page and get in touch: <GatsbyLink to="/contact">here</GatsbyLink>
							</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	</Layout>
)
