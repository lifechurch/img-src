import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function IconButton(props) {
	const {
		to,
		onClick,
		children,
		icon
	} = props

	const disabledClasses = props.disabled ? 'o-50' : 'dim'

	const classes = `flex pointer link b--white br3 bg-white pv1 ph2 gray w-20 ${disabledClasses}`

	return to ? (
		<Link
			{...props}
			to={to}
			onClick={onClick}
			className={classes}
		>
			<img className='v-mid' width={43} height={43} src={icon} alt={props.alt} />
			<span className="center self-center">{children}</span>
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
			<img className='v-mid' width={43} height={43} src={icon} alt={props.alt} />
			<span className="center self-center">{children}</span>
		</a>
	)
}

IconButton.propTypes = {
	children: PropTypes.node,
	to: PropTypes.node,
	disabled: PropTypes.bool,
	icon: PropTypes.node.isRequired,
	alt: PropTypes.node,
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
