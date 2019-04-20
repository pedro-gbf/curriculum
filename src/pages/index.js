import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { FormattedMessage } from "react-intl"

const IndexPage = ({ pathContext: { locale } }) => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<h1>Hi people</h1>
		<FormattedMessage id="hello" />
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>
	</Layout>
)

export default IndexPage
