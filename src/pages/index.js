import React from "react";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import "../styles/global.css";
import * as styles from "../styles/home.module.css";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";

export const Head = () => <title>WA | Web Development</title>

export default function Home({ data }) {

  // console.log(data);

  const project = data.allMarkdownRemark.nodes[0];

  return (
    <Layout>

      <section className={`container ${styles.intro}`}>
        <div className={styles.intro__wrapper}>
          <h1>My name <br /> is Will. <br /> I can develop <br /> your website.</h1>
          <p>
            I am a web developer from the UK, based near Wrexham and Chester. I have experience in all stages of web development, from wireframing to deployment, building dynamic and engaging sites with scalability. The tools that I currently work with are <Link to="/projects/banking-app/">React</Link>, <Link to="/projects/ellwood-estates/">Astro</Link>, Next.js, and <Link to="/projects/recipe-app/">Sanity</Link>. The tools I am currently learning about are Framer Motion and Shopify.
          </p>
          <Link to="/projects/">
            <button type="button">My Work</button>
          </Link>
        </div>
      </section>

      <section className={`container ${styles.project}`}>

        <div className={styles.project__wrapper}>
          <h1>Recent Work</h1>

          <ProjectCard className={styles.card_container}
            key={project.id}
            link={"/projects/" + project.frontmatter.slug}
            title={project.frontmatter.title}
            work={project.frontmatter.work}
            stack={project.frontmatter.stack}
            img={getImage(project.frontmatter.cardImg)}
          />

        </div>

      </section>

      <section className={`container ${styles.contact}`}>
        <div className={styles.contact__wrapper}>
          <h1>Contact Me</h1>

          <ContactForm
            contactWrapper={styles.form__wrapper}
            btnAlign={styles.contact__btn}
          />
        </div>
      </section>

    </Layout >
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