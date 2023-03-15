import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from 'react'
import Layout from "../components/Layout"

export const Head = ({ data }) => <title>Will - {data.markdownRemark.frontmatter.title}</title>

export default function ProjectDetails({ data }) {

	const { html } = data.markdownRemark
	const { stack, title, work, bannerImg } = data.markdownRemark.frontmatter

	return (
		<Layout>

			<section className={`slide`}>

				<div>
					<GatsbyImage image={getImage(bannerImg)} alt="project banner" />
				</div>

				<div>
					<h1>{title}</h1>
					<p>{stack}</p>
					<p>{work}</p>
				</div>

				<div dangerouslySetInnerHTML={{ __html: html }}></div>

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
      bannerImg {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}`
