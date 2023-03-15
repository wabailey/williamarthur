import React from 'react';
import Layout from "../components/Layout";

export default function NotFound() {
	return (
		<Layout>
			<section className={`slide`}
				style={{
					display: "flex",
					alignItems: "flex-start",
					width: "50vw",
					flexDirection: "column",
					marginTop: "20vh",
					paddingTop: "4rem",
					paddingLeft: "15rem"
				}}
			>
				<h1>404</h1>
				<p>Sorry that page does not exist.</p>
			</section>
		</Layout>
	)
}
