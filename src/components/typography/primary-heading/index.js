import React from 'react'
import PropTypes from 'prop-types'

function PrimaryHeading({ children, ...props }) {

	return (
		<h1 className="f3 f1-ns mid-gray" {...props}>
			{children}
		</h1>
	)
}

PrimaryHeading.propTypes = {
	children: PropTypes.node
}

PrimaryHeading.defaultProps = {
	children: null
}

export default PrimaryHeading
