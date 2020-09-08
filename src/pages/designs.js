import React from "react"
import Layout from "../components/layout"
import { Link as GatsbyLink } from "gatsby"
import aanzeeurl from "../images/aanzee/1.jpg"
import cypherurl from "../images/cypher/1.jpg"
import propheturl from "../images/prophet/1.png"
import angelurl from "../images/angel/1.jpg"
import lockheedurl from "../images/lockheed/1.png"
import umizoiurl from "../images/umizoi/1.jpg"
export default () => (
	<Layout>
		<div className="pt-4">
			<div className="columns">
				<div className="container" style={{marginTop: '24px'}}>
					<div className="columns">
						<article className="column is-vcentered">
							<GatsbyLink to="/designs/aanzee" >
								<div className="card design-nav-item" style={{paddingTop: '24px', paddingBottom: '24px'}}>
									<div className="card-image">
										<figure className="image">
											<img src={aanzeeurl} alt="aanzee" style={{marginBottom: '0'}}/>
										</figure>
									</div>
									<div className="content has-text-centered">
										<h2 className="title is-3">aanzee</h2>
									</div>
								</div>
							</GatsbyLink>
						</article>
						<article className="column is-vcentered">
							<GatsbyLink to="/designs/cypher" >
								<div className="card design-nav-item" style={{paddingTop: '24px', paddingBottom: '24px'}}>
									<div className="card-image">
										<figure className="image">
											<img src={cypherurl} alt="cypher" style={{marginBottom: '0'}}/>
										</figure>
									</div>
									<div className="content has-text-centered">
										<h2 className="title is-3">cypher</h2>
									</div>
								</div>
							</GatsbyLink>
						</article>
						<article className="column is-vcentered">
							<GatsbyLink to="/designs/prophet" >
								<div className="card design-nav-item" style={{paddingTop: '24px', paddingBottom: '24px'}}>
									<div className="card-image">
										<figure className="image">
											<img src={propheturl} alt="prophet" style={{marginBottom: '0'}}/>
										</figure>
									</div>
									<div className="content has-text-centered">
										<h2 className="title is-3">Prophet</h2>
									</div>
								</div>
							</GatsbyLink>
						</article>
						<article className="column is-vcentered">
							<GatsbyLink to="/designs/angel" >
								<div className="card design-nav-item" style={{paddingTop: '24px', paddingBottom: '24px'}}>
									<div className="card-image">
										<figure className="image">
											<img src={angelurl} alt="angel" style={{marginBottom: '0'}}/>
										</figure>
									</div>
									<div className="content has-text-centered">
										<h2 className="title is-3">Angel</h2>
									</div>
								</div>
							</GatsbyLink>
						</article>
					</div>
					<div className="columns">
					<article className="column is-vcentered">
							<GatsbyLink to="/designs/umizoi" >
								<div className="card design-nav-item" style={{paddingTop: '24px', paddingBottom: '24px'}}>
									<div className="card-image">
										<figure className="image">
											<img src={umizoiurl} alt="umizoi" style={{marginBottom: '0'}}/>
										</figure>
									</div>
									<div className="content has-text-centered">
										<h2 className="title is-3">umizoi</h2>
									</div>
								</div>
							</GatsbyLink>
						</article>
						<article className="column is-vcentered">
							<GatsbyLink to="/designs/lockheed" >
								<div className="card design-nav-item" style={{paddingTop: '24px', paddingBottom: '24px'}}>
									<div className="card-image">
										<figure className="image">
											<img src={lockheedurl} alt="lockheed" style={{marginBottom: '0'}}/>
										</figure>
									</div>
									<div className="content has-text-centered">
										<h2 className="title is-3">lockheed</h2>
									</div>
								</div>
							</GatsbyLink>
						</article>
						<article className="column is-vcentered">
						</article>
						<article className="column is-vcentered">
						</article>
					</div>
				</div>
			</div>
		</div>
	</Layout>
)
