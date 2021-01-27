import React from "react"
import Layout from "../components/layout"
import { Link as GatsbyLink } from "gatsby";
import aanzeeurl from "../images/aanzee/1.jpg"
import cypherurl from "../images/cypher/1.jpg"
import cypher2url from "../images/cypher/2.jpg"
import propheturl from "../images/prophet/1.png"
import prophet2url from "../images/prophet/2.jpg"
import angelurl from "../images/angel/1.jpg"
import lockheedurl from "../images/lockheed/1.png"
import umizoiurl from "../images/umizoi/1.jpg"
export default () => (
	<Layout>
		<div className="container homepage">
			<section className="hero is-primary">
				<div className="hero-body">
					<div className="container">
						<h1 className="title is-1">
							Cable Car Designs
						</h1>
						<h2 className="subtitle is-6">
							End to End Custom Mechanical Keyboard designs
						</h2>
					</div>
				</div>
			</section>
			<section className="container" style={{ marginTop: '24px'}}>
				<div className="columns">
					<div className="column">
						<GatsbyLink to="/designs/aanzee" className="content image-wrapper">
							<img className="image-obj"  src={aanzeeurl} alt="" style={{marginBottom: '0'}}/>
						</GatsbyLink>
					</div>
					<div className="column">
						<GatsbyLink to="/designs/cypher" className="content image-wrapper">
							<img className="image-obj"  src={cypherurl} alt="" style={{marginBottom: '0'}}/>
						</GatsbyLink>
					</div>
					<div className="column">
						<GatsbyLink to="/designs/prophet" className="content image-wrapper">
							<img className="image-obj"  src={propheturl} alt="" style={{marginBottom: '0'}}/>
						</GatsbyLink>
					</div>
					<div className="column">
						<GatsbyLink to="/designs/angel" className="content image-wrapper">
							<img className="image-obj"  src={angelurl} alt="" style={{marginBottom: '0'}}/>
						</GatsbyLink>
					</div>
				</div>
				<div className="columns">
					<div className="column">
						<GatsbyLink to="/designs/lockheed" className="content image-wrapper">
							<img className="image-obj"  src={lockheedurl} alt="" style={{marginBottom: '0'}}/>
						</GatsbyLink>
					</div>
					<div className="column">
						<GatsbyLink to="/designs/umizoi" className="content image-wrapper">
							<img className="image-obj"  src={umizoiurl} alt="umizoi v1 prototype with GMK Dualshot" style={{marginBottom: '0'}}/>
						</GatsbyLink>
					</div>
					<div className="column">
						<GatsbyLink to="/designs/prophet" className="content image-wrapper">
							<img className="image-obj"  src={prophet2url} alt="" style={{marginBottom: '0'}}/>
						</GatsbyLink>
					</div>
					<div className="column">
						<GatsbyLink to="/designs/cypher" className="content image-wrapper">
							<img className="image-obj"  src={cypher2url} alt="" style={{marginBottom: '0'}}/>
						</GatsbyLink>
					</div>
				</div>
			</section>
			<section className="container d-flex">
				<div className="notification is-danger" style={{ marginTop: '24px'}}>
					The site is currently a work in progress. Please bear with me while I try to improve it
				</div>
			</section>
		</div>
	</Layout>
)
