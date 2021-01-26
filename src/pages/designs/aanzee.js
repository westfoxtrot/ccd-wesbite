import React from "react"
import Layout from "../../components/layout"
import img1url from "../../images/aanzee/1.jpg"
import { Helmet } from "react-helmet"
export default () => (
	<Layout>
		<div className="container">
			<Helmet>
				<title>aanzee - Cable Car Designs</title>
			</Helmet>
			<section class="hero is-primary">
				<div class="hero-body">
					<div class="container">
						<h1 class="title is-1">
							aanzee
						</h1>
						<h2 class="subtitle is-6">
							Sandwich mount 65% in aluminium and polycarbonate
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
						<div className="notification is-primary"  style={{marginTop: 'auto'}}><strong>Status:</strong> GB Concluded</div>
					</div>
					<div className="column">
						<div className="content">
							<h3 className="title">About this board:</h3>
							<p>The ‘aanzee’ is a custom 65% keyboard I designed in the first half of 2018. The design went through several iterations before holding a group buy in November of 2018 which shipped in 2019.</p>
							<p>With this board I aimed to create a board with a subtle signature that was easily recognisable. To this aim I’ve got a few unique features. First off I have a straight line at the front and back of the board accented by the plate itself stepping through the sides of the case.</p>
							<p>In the original design this was designed to be Blue with a brass plate to accent, hence the name which is Dutch for “on sea”</p>
							<p>I’ve also included a slight slope raise of height between the front and the back of the board to surround the caps a little more, higher at the back than at the front. It’s 7mm at the front and 9mm at the back. It’s a small difference but, for me, it creates a unique structure to the board.</p>
							<p>I worked closely with a designer to come up with a slightly fresher feel for the board, changing the font used from the prototype and changing the logo to a completely new design, I’m really happy with the work she did and have to give her a huge shout out here: <a href="https://twitter.com/morganadalmeida">Morgana on Twitter</a></p>
							<p>This has been a very well received board which makes me very happy. One purchaser wants it noted that this board is used to write advanced code for ARM</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</Layout>
)
