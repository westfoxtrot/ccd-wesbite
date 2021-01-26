import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
export default () => (
	<Layout>
		<div className="container" style={{width: '100%'}}>
			<Helmet>
				<title>Contact - Cable Car Designs</title>
			</Helmet>
			<section class="hero is-primary">
				<div class="hero-body">
					<div class="container">
						<h1 class="title is-1">
							Get in touch
						</h1>
						<h2 class="subtitle is-6">
							Use your preferred method to reach out to me
						</h2>
					</div>
				</div>
			</section>
			<section class="container" style={{ marginTop: '24px'}}>
				<div className="level">
					<div className="level-item has-text-centered">
						<a href="mailto:info@cablecardesigns.co" target="_blank" rel="noreferrer">
							<box-icon name='mail-send' color="white" size="lg"></box-icon>
							<p>email</p>
						</a>
					</div>
					<div className="level-item has-text-centered">
						<a href="https://discord.gg/5GHFAtb" target="_blank" rel="noreferrer">
							<box-icon name='discord' type='logo' color="white" size="lg"></box-icon>
							<p>Discord</p>
						</a>
					</div>
					<div className="level-item has-text-centered">
						<a href="https://www.instagram.com/cablecardesigns/" target="_blank" rel="noreferrer">
							<box-icon name='instagram' type='logo' color="white" size="lg"></box-icon>
							<p>Instagram</p>
						</a>
					</div>
					<div className="level-item has-text-centered">
						<a href="https://www.reddit.com/user/amthe" target="_blank" rel="noreferrer">
							<box-icon name='reddit' type='logo' color="white" size="lg"></box-icon>
							<p>Reddit</p>
						</a>
					</div>
				</div>
			</section>
		</div>
	</Layout>
)
