import React, { useState } from "react";
import { Link as GatsbyLink } from "gatsby";
import logourl from "../images/ccd-logo.png";
const Header = () => {
	
	const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
	};

	let navClasses = "navbar-menu";

	if (isActive) {
		navClasses += ' is-active'
	}

	return (
		<nav className="navbar is-black" role="navigation" aria-label="main navigation">
			<div className="container">
				<div className="navbar-brand">
					<a href="/" className="is-spaced">
						<img src={logourl} alt="Cable Car Designs Logo" width="150" style={{margin: '5px 5px 0px'}}></img>
					</a>

					<a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMain" href="#mobilemenu" onClick={() => handleClick()}>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div id="nav" className={navClasses} >
					<div className="navbar-start">
						<GatsbyLink className="navbar-item" activeClassName="is-active" to="/">
							Home
						</GatsbyLink>

						<div className="navbar-item has-dropdown is-hoverable">
							<GatsbyLink className="navbar-link" activeClassName="is-active" to="/designs" partiallyActive={true}>
								Designs
							</GatsbyLink>

							<div className="navbar-dropdown">
								<GatsbyLink className="navbar-item" to="/designs/aanzee" activeClassName="is-active">
									aanzee
								</GatsbyLink>
								<GatsbyLink className="navbar-item" to="/designs/cypher" activeClassName="is-active">
									cypher
								</GatsbyLink>
								<GatsbyLink className="navbar-item" to="/designs/prophet" activeClassName="is-active">
									Prophet
								</GatsbyLink>
								<GatsbyLink className="navbar-item" to="/designs/angel" activeClassName="is-active">
									Angel
								</GatsbyLink>
								<GatsbyLink className="navbar-item" to="/designs/phoenix" activeClassName="is-active">
									Phoenix
								</GatsbyLink>
							</div>
						</div>

						<div className="navbar-item has-dropdown is-hoverable">
							<GatsbyLink className="navbar-link" activeClassName="is-active" to="/resources" partiallyActive={true}>
								Resources
							</GatsbyLink>

							<div className="navbar-dropdown">
								<GatsbyLink className="navbar-item" to="/resources/aanzee" activeClassName="is-active">
									aanzee
								</GatsbyLink>
								<GatsbyLink className="navbar-item" to="/resources/cypher" activeClassName="is-active">
									cypher
								</GatsbyLink>
								<GatsbyLink className="navbar-item" to="/resources/prophet" activeClassName="is-active">
									Prophet
								</GatsbyLink>
								<GatsbyLink className="navbar-item" to="/resources/angel" activeClassName="is-active">
									Angel
								</GatsbyLink>
								<GatsbyLink className="navbar-item" to="/resources/phoenix" activeClassName="is-active">
									Phoenix
								</GatsbyLink>
							</div>
						</div>

						<GatsbyLink className="navbar-item" activeClassName="is-active" to="/contact">
							Contact
						</GatsbyLink>

					</div>

					<div className="navbar-end">
						<a href="https://github.com/westfoxtrot/" className="navbar-item is-size-3" target="_blank" rel="noreferrer">
							<box-icon type='logo' name='github' color='white'></box-icon>
						</a>
						<a href="https://www.instagram.com/cablecardesigns/" className="navbar-item is-size-4" target="_blank" rel="noreferrer">
							<box-icon name='instagram' type='logo' color='white'></box-icon>
						</a>
						<a href="https://discord.gg/5GHFAtb" className="navbar-item is-size-4" target="_blank" rel="noreferrer">
							<box-icon name='discord' type='logo' color='white'></box-icon>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);	
}

export default Header;
