import React from 'react';
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import * as styles from "../../styles/projects.module.css";
import "../../styles/global.css";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";

export const Head = () => <title>Will - Projects</title>

export default function Projects({ data }) {

	// console.log(data)

	const projects = data.allMarkdownRemark.nodes

	return (
		<Layout>

			<h1 className={styles.project_title}>Projects</h1>

			{projects.map(project => (
				<section className={`slide ${styles.project}`} key={project.id}>
					<ProjectCard className={styles.card_animation}

						link={"/projects/" + project.frontmatter.slug}
						title={project.frontmatter.title}
						work={project.frontmatter.work}
						stack={project.frontmatter.stack}
						img={getImage(project.frontmatter.cardImg)}
						sideText={{ display: "none" }}
					/>
				</section>
			))}



			{/* <section className={`slide ${styles.project}`}>

				<ProjectCard className={styles.card_animation}
					link={"./2"}
					title={"Ellwood Estates"}
					work={"Web Dev & Design"}
					stack={"HTML, Astro, Tailwind"}
					img={"https://plus.unsplash.com/premium_photo-1661397154439-699c8045631a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
					sideText={{ display: "none" }}
				/>

			</section>

			<section className={`slide ${styles.project}`}>

				<ProjectCard className={styles.card_animation}
					link={"./3"}
					title={"Banking App"}
					work={"Web Dev"}
					stack={"React, Tailwind"}
					img={"https://plus.unsplash.com/premium_photo-1661397154439-699c8045631a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
					sideText={{ display: "none" }}
				/>

			</section>

			<section className={`slide ${styles.project}`}>

				<ProjectCard className={styles.card_animation}
					link={"./4"}
					title={"Recipe App"}
					work={"Web Dev"}
					stack={"Gatsby, CSS, Contentful"}
					img={"https://plus.unsplash.com/premium_photo-1661397154439-699c8045631a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
					sideText={{ display: "none" }}
				/>

			</section> */}

		</Layout >
	)
}

export const query = graphql`
	query ProjectsPage {
  allMarkdownRemark(sort: {frontmatter: {date: ASC}}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        work
        cardImg {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              transformOptions: {fit: COVER}
            )
          }
        }
      }
      id
    }
  }
}`