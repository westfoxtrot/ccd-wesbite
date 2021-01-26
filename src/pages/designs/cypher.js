import React from "react"
import Layout from "../../components/layout"
import img1url from "../../images/cypher/1.jpg"
import { Helmet } from "react-helmet"
export default () => (
	<Layout>
		<div className="container">
			<Helmet>
				<title>cypher - Cable Car Designs</title>
			</Helmet>
			<section class="hero is-primary">
				<div class="hero-body">
					<div class="container">
						<h1 class="title is-1">
							cypher
						</h1>
						<h2 class="subtitle is-6">
							Top mount f-row less 1800 compact 1800
						</h2>
					</div>
				</div>
			</section>
			<section class="container" style={{ marginTop: '24px'}}>
				<div className="columns">
					<div className="column">
						<div className="content">
							<img src={img1url} alt=""/>
						</div>
						<div className="notification is-primary"  style={{marginTop: 'auto'}}><strong>Status:</strong> Round 2 GB Concluded</div>
					</div>
					<div className="column">
						<div className="content">
							<h3 className="title">About this board:</h3>
							<p>The 'cypher' is a custom f-row less keyboard I designed based on a layout that my partner wanted a board in to use for work. The design went through several iterations before holding a small in stock sale of 20 units followed by a full group buy hosted with <a href="https://mykeyboard.eu/">mykeyboard.eu</a> in July 2019.</p>
							<p>With this board I wanted to hit a few feature requests whilst still being able to maintain a clean look. It was important that it could be carried around easily as it was primarily intended to be taken to and from an office so it is designed to be a light and compact board as much as possible whilst maintaining the form factor</p>
							<p>Another feature was to try and keep the board as low as possible with a shallow angle to ensure it was comfortable for extended use.</p>
							<p></p>
							<p>The overall reception to this board has been overwhelmingly positive and I'm always working to make sure as many get into people's hands as possible.</p>
							<p><a href="https://geekhack.org/index.php?topic=101491">geekhack GB thread</a></p>
							<p><a href="https://geekhack.org/index.php?topic=100943">geekhack IC thread</a></p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</Layout>
)
