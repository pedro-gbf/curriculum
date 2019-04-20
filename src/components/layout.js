/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider, addLocaleData } from "react-intl"
import "./layout.css"

import en from "../i18n/en.json"
import pt from "../i18n/pt.json"

const messages = { en, pt }

const Layout = ({ children }) => (
	<IntlProvider locale={locale} messages={messages[locale]}>
		<StaticQuery
			query={graphql`
				query SiteTitleQuery {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={data => (
				<>
					{/*<Header siteTitle={data.site.siteMetadata.title} /> */}
					<div
						style={{
							margin: `0 auto`,
							maxWidth: 960,
							padding: `0px 1.0875rem 1.45rem`,
							paddingTop: 0,
						}}
					>
						<main>{children}</main>
						<footer>
							Pedro Fernandes© {new Date().getFullYear()}, Built with
							{` `}
							<a href="https://www.gatsbyjs.org">Gatsby</a>
						</footer>
					</div>
				</>
			)}
		/>
	</IntlProvider>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
