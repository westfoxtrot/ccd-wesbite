import React from "react"
import Layout from "../../components/layout"
import img1url from "../../images/angel/1.jpg"
import { Helmet } from "react-helmet"
export default () => (
	<Layout>
		<div className="container">
			<Helmet>
				<title>Angel - Cable Car Designs</title>
			</Helmet>
			<section class="hero is-primary">
				<div class="hero-body">
					<div class="container">
						<h1 class="title is-1">
							Angel
						</h1>
						<h2 class="subtitle is-6">
							Pin mount 65% 
						</h2>
					</div>
				</div>
			</section>
			<section class="container" style={{ marginTop: '24px'}}>
				<div className="columns">
					<div className="column design-left">
						<div className="content image-wrapper">
							<img className="image-obj" src={img1url} alt=""/>
						</div>
						<div className="notification is-primary"  style={{marginTop: 'auto'}}><strong>Status:</strong> Public GB running 2021</div>
					</div>
					<div className="column">
						<div className="content">
							<h3 className="title">About this board:</h3>
							<p>Angel is a pin mount seamless 65% keyboard. Building on the success of Prophet I was enthused to create this when a friends really wanted to try Prophet but really dislikes using a 60% board. I was interested in trying out pin mount in larger form factors to see what could be possible with the mounting style as it quickly became a personal favourite for type feel</p>
							<p>An inital run of 5 units was purchased to experiment with plate materials/styles and get some in the hands of people to gather some feedback.</p>
							<p></p>
							<p></p>
							<p><a href="https://geekhack.org/index.php?topic=110729">geekhack IC thread</a></p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</Layout>
)
