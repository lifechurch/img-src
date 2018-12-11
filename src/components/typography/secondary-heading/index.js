import React from 'react'
import PropTypes from 'prop-types'

function SecondaryHeading({ children, ...props }) {

	return (
		<h2 className="f4 f2-ns mid-gray ma0" {...props}>
			{children}
		</h2>
	)
}

SecondaryHeading.propTypes = {
	children: PropTypes.node
}

SecondaryHeading.defaultProps = {
	children: null
}

export default SecondaryHeading
