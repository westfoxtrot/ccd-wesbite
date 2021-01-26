import React from "react"
import Layout from "../../components/layout"
import img1url from "../../images/prophet/1.png"
import { Helmet } from "react-helmet"
export default () => (
	<Layout>
		<div className="container">
			<Helmet>
				<title>Prophet - Cable Car Designs</title>
			</Helmet>
			<section class="hero is-primary">
				<div class="hero-body">
					<div class="container">
						<h1 class="title is-1">
							Prophet
						</h1>
						<h2 class="subtitle is-6">
							Pin mount 60% 
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
							<p>Prophet is a pin mount seamless 60% keyboard. The first of its kind, pin mount works by resting the keyboard assembly on a ledge around the interior of the board whilst ensuring there is no downward pressure from the top half of the case. There are 4 pins in the corners of the base that hold the plate in place and it rests on the lip of the base. The theory is that the lack of downward pressure allows the plate more freedom of movement towards the center whilst still retaining an even pressure around the edge of the board</p>
							<p>Originally my intention with the design was to create something simple that had a consistent sound profile and type feel and I am more than pleased with the results. The design has been through several small iterations but for the most part is largely unchanged from the initial drawings.</p>
							<p></p>
							<p></p>
							<p>There have been 2 runs of the board to date. One private 10 unit run and an unlimited public buy. Sales on this buy far exceeded my expectations and the reception to the board has been truly humbling</p>
							<p><a href="https://geekhack.org/index.php?topic=105670">geekhack GB thread</a></p>
							<p><a href="https://geekhack.org/index.php?topic=104294">geekhack IC thread</a></p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</Layout>
)
