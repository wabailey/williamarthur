import React from 'react';
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import "../../styles/global.css";
import * as styles from "../../styles/projects.module.css";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";

export const Head = () => <title>Will - Projects</title>

export default function Projects({ data }) {

  // console.log(data)

  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>

      <div className={`container ${styles.project_title_container}`}>

        <div className={styles.project_title}>
          <h1>Projects</h1>
        </div>

      </div>

      {
        projects.map(project => (
          <section className={`container ${styles.project}`} key={project.id}>
            <ProjectCard className={styles.card_animation}

              link={"/projects/" + project.frontmatter.slug}
              title={project.frontmatter.title}
              work={project.frontmatter.work}
              stack={project.frontmatter.stack}
              img={getImage(project.frontmatter.cardImg)}
            />
          </section>
        ))
      }

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