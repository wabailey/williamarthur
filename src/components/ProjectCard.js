import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "../styles/projectcard.module.css";

export default function ProjectCard({ className, link, title, work, stack, img, sideText }) {

	return (
		<div className={className}>
			<div className={styles.project_card}>

				<Link to={link} className={styles.card_container}>

					<div className={styles.card_text}>

						<div>
							<h2>{title}</h2>
						</div>

						<div>
							<div className={styles.card_stroke}></div>
							<div>
								<small>
									{work}
									<br />
									<br />
									{stack}
								</small>
							</div>
						</div>

					</div>

					<div className={styles.card_overlay}></div>

					<div className={styles.card_img}>
						<GatsbyImage image={img} alt="project screenshot" />
					</div>

					<div style={sideText} className={styles.card_sidetext}>
						<h3>Recent Work</h3>
					</div>

				</Link>

			</div>
		</div>
	)
}
