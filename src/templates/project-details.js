import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import Layout from "../components/Layout";
import * as styles from "../styles/project-details.module.css";

export const Head = ({ data }) => <title>Will - {data.markdownRemark.frontmatter.title}</title>

export default function ProjectDetails({ data }) {

	const { html } = data.markdownRemark
	const { stack, title, work, siteLink, siteCode, siteDesign, bannerImg } = data.markdownRemark.frontmatter

	return (
		<Layout>

			<section className={styles.bg_img}>

				<GatsbyImage style={{ height: "100%" }}
					image={getImage(bannerImg)} alt="screenshot of project homepage"
				/>

				<div className={styles.img_overlay}></div>

			</section>

			<section className={`container ${styles.details_text}`}>

				<div className={styles.details_title}>
					<h1>{title}</h1>
				</div>

				<div className={styles.details_body}>

					<div className={styles.details_subtitle}>

						<div className={styles.subtitle_role}>
							<small>Role</small>
							<p>{work}</p>
						</div>

						<div className={styles.subtitle_stack}>
							<small>Technologies</small>
							<p>{stack}</p>
						</div>

					</div>

					<div className={styles.details_description}>
						<small>Description</small>
						<div dangerouslySetInnerHTML={{ __html: html }}></div>
					</div>

					<div className={styles.details_btns}>

						{siteLink &&
							<div>
								<a href={siteLink} target="_blank" rel="noreferrer">
									<button type="button">Visit The Site</button>
								</a>
							</div>
						}

						{siteCode &&
							<div>
								<a href={siteCode} target="_blank" rel="noreferrer">
									<button className="btn_secondary" type="button">View The Code</button>
								</a>
							</div>
						}

						{siteDesign &&
							<div>
								<a href={siteDesign} target="_blank" rel="noreferrer">
									<button className="btn_secondary" type="button">View The Design</button>
								</a>
							</div>
						}

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
			siteDesign
      bannerImg {
        childImageSharp {
          gatsbyImageData(
              placeholder: BLURRED
            )
        }
      }
    }
  }
}`
