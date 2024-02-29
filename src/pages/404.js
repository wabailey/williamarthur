import React from 'react';
import Layout from "../components/Layout";
import * as styles from "../styles/page-not-found.module.css";

export const Head = () => <title>WA - Page Not Found</title>

export default function NotFound() {
	return (
		<Layout>
			<section className={`container ${styles.notfound}`}>
				<h1>404</h1>
				<p>Sorry that page does not exist.</p>
			</section>
		</Layout>
	)
}
