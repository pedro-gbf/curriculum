import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const MainCard = ({ siteTitle }) => (
	<div
		style={{
			background: `rebeccapurple`,
			marginBottom: `1.45rem`,
		}}
	>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.45rem 1.0875rem`,
			}}
		>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`,
					}}
				>
					{siteTitle}
				</Link>
			</h1>
		</div>
	</div>
)

MainCard.propTypes = {
	siteTitle: PropTypes.string,
}

MainCard.defaultProps = {
	siteTitle: ``,
}

export default MainCard
