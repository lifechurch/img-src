import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Button(props) {
	const {
		to,
		onClick,
		children
	} = props

	const disabledClasses = props.disabled ? 'o-50' : 'dim'
	const buttontypeClasses = props.buttontype === 'solid' ? 'bg-mid-gray white' : 'ba mid-gray'

	const classes = `pointer link br-pill ph4 pv2 f4 dib ${disabledClasses} ${buttontypeClasses} ${props.className}`

	if (props.disabled) {
		return (
			<a {...props} className={classes}>{children}</a>
		)
	}

	return to ? (
		<Link
			{...props}
			to={to}
			onClick={onClick}
			className={classes}
		>
			{children}
		</Link>
	) : (
		<a
			{...props}
			onClick={onClick}
			role='button'
			tabIndex={0}
			onKeyDown={onClick}
			className={classes}
		>
			{children}
		</a>
	)
}

Button.propTypes = {
	children: PropTypes.node,
	to: PropTypes.node,
	disabled: PropTypes.bool,
	buttontype: PropTypes.oneOf(['solid', 'outline-only']),
	onClick: PropTypes.func,
	className: PropTypes.string
}

Button.defaultProps = {
	children: null,
	to: null,
	disabled: false,
	buttontype: 'solid',
	onClick: null,
	className: ''
}

export default Button
