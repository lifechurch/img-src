import React from 'react'
import PropTypes from 'prop-types'

function PrimaryHeading({ children, ...props }) {

	return (
		<h1 className="f2 f2-ns mid-gray ma0" {...props}>
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
