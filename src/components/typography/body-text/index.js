import React from 'react'
import PropTypes from 'prop-types'

function BodyText({ children, ...props }) {

	return (
		<p className="f6 f4-ns gray ma0" {...props}>
			{children}
		</p>
	)
}

BodyText.propTypes = {
	children: PropTypes.node
}

BodyText.defaultProps = {
	children: null
}

export default BodyText
