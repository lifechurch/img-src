import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Button(props) {
	const {
		to,
		onClick,
		children,
		isSubmit,
		disabled,
		buttontype,
		...remainingProps
	} = props

	const disabledClasses = disabled ? 'o-50' : 'dim'
	const buttontypeClasses = buttontype === 'solid' ? 'bg-mid-gray white bn' : 'ba bw1 b--mid-gray mid-gray bg-transparent'

	const classes = `pointer link br-pill ph4 pv2 f4 dib ${disabledClasses} ${buttontypeClasses}`

	const handleKeyPress = event => {
		if (event.key === 'Enter') {
			this.refs.but.click()
		}
	}

	if (disabled) {
		return (
			<a { ...remainingProps } className={ classes }>{ children }</a>
		)
	} else if (isSubmit) {
		return (
			<button { ...remainingProps} onClick={ onClick } onKeyPress={ (e) => { return handleKeyPress(e) } } type="submit" className={classes}>{children}</button>
		)
	}

	return to ? (
		<Link
			{...remainingProps}
			to={to}
			onClick={onClick}
			className={classes}
		>
			{children}
		</Link>
	) : (
		<a
			{...remainingProps}
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
	isSubmit: PropTypes.bool
}

Button.defaultProps = {
	children: null,
	to: null,
	disabled: false,
	buttontype: 'solid',
	onClick: null,
	isSubmit: false
}

export default Button
