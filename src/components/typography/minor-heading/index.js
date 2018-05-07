import React from 'react'
import PropTypes from 'prop-types'

function MinorHeading({ children, ...props }) {

	return (
		<h3 className="f5 f3-ns mid-gray" {...props}>
			{children}
		</h3>
	)
}

MinorHeading.propTypes = {
	children: PropTypes.node
}

MinorHeading.defaultProps = {
	children: null
}

export default MinorHeading
