import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import Layout from "../components/Layout";
import * as styles from "../styles/project-details.module.css";

export const Head = ({ data }) => <title>Will - {data.markdownRemark.frontmatter.title}</title>

export default function ProjectDetails({ data }) {

	const { html } = data.markdownRemark
	const { stack, title, work, siteLink, siteCode, bannerImg } = data.markdownRemark.frontmatter

	return (
		<Layout>

			<section className={`slide ${styles.details_image}`}>

				<div className={styles.image_overlay}></div>

				<div className={styles.image_container}>
					<GatsbyImage image={getImage(bannerImg)} alt="project banner" />
				</div>

			</section>

			<section className={`slide ${styles.details_text}`}>

				<div>

					<div className={styles.details_title}>
						<h1>{title}</h1>
					</div>

					<div className={styles.details_body}>

						<div className={styles.details_subtitle}>

							<div className={styles.subtitle_role}>
								<small>Role</small>
								<p>{work}</p>
							</div>

							<div>
								<small>Technologies</small>
								<p>{stack}</p>
							</div>

						</div>

						<div className={styles.details_description}>
							<small>Description</small>
							<div dangerouslySetInnerHTML={{ __html: html }}></div>
						</div>

						<div className={styles.details_btns}>

							<div>
								<a href={siteLink} target="_blank" rel="noreferrer">
									<button type="button">Visit The Site</button>
								</a>
							</div>

							<div>
								<a href={siteCode} target="_blank" rel="noreferrer">
									<button type="button">See The Code</button>
								</a>
							</div>

						</div>



					</div>







				</div>





			</section>

		</Layout>
	)
}

export const query = graphql`
	query ProjectDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      work
			siteLink
			siteCode
      bannerImg {
        childImageSharp {
          gatsbyImageData(
              placeholder: BLURRED
							width: 720
              layout: CONSTRAINED
              transformOptions: {fit: COVER}
            )
        }
      }
    }
  }
}`
