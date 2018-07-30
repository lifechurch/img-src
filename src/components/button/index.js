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
	const buttontypeClasses = props.buttontype === 'solid' ? 'bg-mid-gray white bn' : 'ba bw1 b--mid-gray mid-gray bg-transparent'

	const classes = `pointer link br-pill ph4 pv2 f4 dib ${disabledClasses} ${buttontypeClasses}`

	if (props.disabled) {
		return (
			<a {...props} className={classes}>{children}</a>
		)
	} else if (props.submit) {
		return (
			<button {...props} onClick={onClick} type="submit" className={classes}>{children}</button>
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
	submit: PropTypes.bool
}

Button.defaultProps = {
	children: null,
	to: null,
	disabled: false,
	buttontype: 'solid',
	onClick: null,
	submit: false
}

export default Button
