import React from 'react';
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import * as styles from "../styles/contact.module.css";

export const Head = () => <title>Will - Contact</title>

export default function Contact() {
	return (
		<Layout>

			<section className={`slide ${styles.container} ${styles.contact}`}>
				<div className={styles.contact__wrapper}>
					<h1>Contact Me</h1>

					<ContactForm
						contactWrapper={styles.form__wrapper}
						btnAlign={styles.contact__btn}
					/>
				</div>
			</section>

		</Layout>
	)
}
