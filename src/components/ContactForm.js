import React from "react";
import * as styles from "../styles/contactform.module.css";

export default function ContactForm({ contactWrapper, btnAlign }) {
	return (
		<div className={contactWrapper}>
			<div className={styles.contact_textContainer}>
				<p>
					Feel free to get in touch if you have a project or work opportunity you would like to discuss with me.
					<br />
					<br />
					<a href="mailto:willarthbailey@gmail.com">[Email is the best way to reach me].</a>
					<br />
					<br />
					Or use the form below, which also goes to my email.
				</p>
			</div>

			<form
				name="PortfolioMail"
				method="POST"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				onSubmit="submit"
			>
				<input type="hidden" name="bot-field" />
				<input type="hidden" name="form-name" value="PortfolioMail" />

				<div className={styles.form_inputs}>

					<div className={styles.floating}>
						<input className={styles.floating__input} id="input_name" name="name" type="text" placeholder="Name" required />
						<label className={styles.floating__label} htmlFor="input_name" data-content="Name">
							<span className={styles.hidden_visually}>Name</span>
						</label>
					</div>

					<div className={styles.floating}>
						<input className={styles.floating__input} id="input_email" name="email" type="email" placeholder="Email" required />
						<label className={styles.floating__label} htmlFor="input_email" data-content="Email">
							<span className={styles.hidden_visually}>Email</span>
						</label>
					</div>

				</div>

				<div className={styles.form_inputs}>

					<div className={styles.floating}>
						<textarea className={styles.floating__input} id="input_message" name="message" type="text" placeholder="Message" required />
						<label className={styles.floating__label} htmlFor="input_message" id={styles.floating__label} data-content="Message">
							<span className={styles.hidden_visually}>Message</span>
						</label>
					</div >

				</div>

				<div className={btnAlign}>
					<button type="submit">Submit</button>
				</div>

			</form>

		</div>

	)
}
