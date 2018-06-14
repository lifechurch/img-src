import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function IconButton({
	to, children, icon, disabled, ...props
}) {
	const disabledClasses = disabled ? 'o-50' : 'dim'
	const classes = `flex relative pointer link w-100 b--white br3 bg-white pv1 ph2 h2 gray ${disabledClasses}`
	const buttonContent = (
		<div className="flex w-100">
			<img className='v-mid ml1 absolute-ns left-1 self-center' width={40} height={40} src={icon} alt={props.alt} />
			<span className="center self-center">{children}</span>
		</div>
	)
	const buttonStyle = {
		height: 51
	}

	if (disabled) {
		return (
			<a {...props} className={classes} style={buttonStyle}>
				{buttonContent}
			</a>
		)
	}

	return to ? (
		<Link
			{...props}
			to={to}
			className={classes}
			style={buttonStyle}
		>
			{buttonContent}
		</Link>
	) : (
		<a
			{...props}
			className={classes}
			style={buttonStyle}
		>
			{buttonContent}
		</a>
	)
}

IconButton.propTypes = {
	children: PropTypes.node,
	to: PropTypes.node,
	disabled: PropTypes.bool,
	icon: PropTypes.node.isRequired,
	alt: PropTypes.string,
	onClick: PropTypes.func,
}

IconButton.defaultProps = {
	children: null,
	to: null,
	disabled: false,
	alt: '',
	onClick: null
}

export default IconButton
