import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "../styles/projectcard.module.css";

export default function ProjectCard({ className, link, title, work, stack, img }) {

	return (
		<div className={className}>
			<div className={styles.project_card}>

				<Link to={link} >

					<GatsbyImage image={img} alt="project screenshot" />

					<div className={styles.card_overlay}></div>

					<div className={styles.card_container__text}>

						<div className={styles.text_wrapper}>
							<h3>{title}</h3>
							<small>{stack}</small>
						</div>

					</div>

				</Link>

			</div>
		</div>
	)
}
