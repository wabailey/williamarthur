import React from "react";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import * as styles from "../styles/home.module.css";
import "../styles/global.css";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";


export default function Home({ data }) {

  // console.log(data)

  const project = data.allMarkdownRemark.nodes[0]

  return (
    <Layout>

      <section className={`slide ${styles.intro}`}>
        <h1>My name <br /> is Will. <br /> I can develop your website.</h1>
        <p>
          I'm a freelance web developer working just outside of Wrexham and Chester. I find fulfilment in developing <br /> <Link to="/projects">website designs</Link> to pixel perfection and accompanying them with slick functionality. The tools that I am currently working with are <Link to="/">React</Link>, <Link to="/">Astro</Link>, and <Link to="/">Gatsby</Link>. The tools I am currently learning about are Next.js and Contentful.
        </p>
        <button>My Work</button>
      </section>

      <section className={`slide ${styles.project}`}>

        <ProjectCard className={styles.card_animation}
          key={project.id}
          link={"/projects/" + project.frontmatter.slug}
          title={project.frontmatter.title}
          work={project.frontmatter.work}
          stack={project.frontmatter.stack}
          img={getImage(project.frontmatter.cardImg)}
        />

      </section>

      <section className={`slide ${styles.contact}`}>

        <h1>Contact Me</h1>

        <ContactForm
          contactWrapper={{
            marginLeft: "auto",
            marginRight: "4rem",
          }}
          align={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        />



      </section>

    </Layout>
  )
}

export const query = graphql`
	query HomePage {
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