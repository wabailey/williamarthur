import React from 'react';
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import * as styles from "../styles/contact.module.css";

export const Head = () => <title>Will - Contact</title>

export default function Contact() {
	return (
		<Layout>

			<section className={`slide ${styles.contact}`}>

				<h1>Contact Me</h1>

				<ContactForm
					contactWrapper={{
						marginLeft: "4rem",
						marginRight: "auto",
					}}
					align={{
						display: "flex",
						justifyContent: "flex-start",
					}}
				/>


			</section>

		</Layout>
	)
}
