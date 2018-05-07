import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Button({ to, onClick, ...props }) {
	const classes = ['pointer', 'link', 'h2', 'br-pill', 'ph3', 'pv1']

	classes.push(
		props.render === 'solid' ? 'bg-mid-gray white' : 'ba mid-gray',
		props.disabled ? 'o-50' : 'dim'
	)

	if (props.disabled) {
		return (
			<a {...props} className={classes.join(' ')}>{props.children}</a>
		)
	}

	return to ? (
		<Link
			{...props}
			to={to}
			onClick={onClick}
			className={classes.join(' ')}
		>
			{props.children}
		</Link>
	) : (
		<a
			{...props}
			onClick={onClick}
			role='button'
			tabIndex={0}
			onKeyDown={onClick}
			className={classes.join(' ')}
		>
			{props.children}
		</a>
	)
}

Button.propTypes = {
	children: PropTypes.node,
	to: PropTypes.node,
	disabled: PropTypes.bool,
	render: PropTypes.oneOf(['solid', 'outline-only']),
	onClick: PropTypes.func
}

Button.defaultProps = {
	children: null,
	to: null,
	disabled: false,
	render: 'solid',
	onClick: null
}

export default Button
