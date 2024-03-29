import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "../styles/global.css";
import * as styles from "../styles/layout.module.css";

export default function Layout({ children }) {

	const data = useStaticQuery(graphql`
		query SiteInfo {
			site {
				siteMetadata {
					description
					linkedin
					github
				}
			}
		}	
	`)

	const { linkedin, github } = data.site.siteMetadata

	return (
		<div>
			<div className={styles.columns}>
				<div className={styles.col_1}></div>
				<div className={styles.col_2}></div>
				<div className={styles.col_3}></div>
				<div className={styles.col_4}></div>
				<div className={styles.col_5}></div>
				<div className={styles.col_6}></div>
				<div className={styles.col_7}></div>
			</div>

			<div className={styles.bg_container}>

				<div className={styles.bg_w}>
					<div className={styles.w_container}>
						<div className={styles.w1}></div>
					</div>
					<div className={styles.w_container}>
						<div className={styles.w2}></div>
					</div>
					<div className={styles.w_container}>
						<div className={styles.w3}></div>
					</div>
					<div className={styles.w_container}>
						<div className={styles.w4}></div>
					</div>

				</div>

			</div>

			<div className={styles.header_container}>
				<nav className={styles.header_nav}>
					<div className={styles.nav_siteTitle}>
						<Link to="/">
							<h3>william arthur.</h3>
						</Link>
					</div>
					<div className={styles.nav_links}>
						<ul>
							<li>
								<Link to="/" activeStyle={{ color: "white" }}>
									Home
								</Link>
							</li>
							<li>
								<Link to="/">
									<StaticImage src="../images/WA-Logo-White.svg" alt="William Arthur Logo" height={48} />
								</Link>
							</li>
							<li>
								<Link to="/projects" activeStyle={{ color: "white" }}>
									Projects
								</Link>
							</li>
						</ul>
					</div>
					<div className={styles.nav_socials}>
						<IconContext.Provider value={{ size: "1.5em", className: "icon", title: "LinkedIn Icon Link" }}>
							<a href={linkedin} target="_blank" rel="noreferrer" aria-label="Linked In"><BsLinkedin /></a>
						</IconContext.Provider>
						<IconContext.Provider value={{ size: "1.5em", className: "icon", title: "Github Icon Link" }}>
							<a href={github} target="_blank" rel="noreferrer" aria-label="Github"><BsGithub /></a>
						</IconContext.Provider>
					</div>
				</nav>
			</div>

			<div className={styles.body_container}>

				<div className={styles.wrapper}>
					{children}
				</div>

			</div >

		</div >
	)
}