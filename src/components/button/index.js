import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Button(props) {
	const classes = 'pointer h2 br-pill bg-mid-gray white ph3 pv1 no-underline'

	return props.to ? (
		<Link {...props} className={classes}>{props.children}</Link>
	) : (
		<a {...props} className={classes}>{props.children}</a>
	)
}

Button.propTypes = {
	children: PropTypes.node,
	to: PropTypes.node,
	disabled: PropTypes.bool,
	render: PropTypes.oneOf(['solid', 'outline-only'])
}

Button.defaultProps = {
	children: null,
	to: null,
	disabled: false,
	render: 'solid'
}

export default Button
