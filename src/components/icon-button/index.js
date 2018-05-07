import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function IconButton(props) {
	const {
		to,
		onClick,
		children
	} = props

	const classes = 'pointer link ba b--white br3 bg-white pv1 ph2 gray dib dt'

	return to ? (
		<Link
			{...props}
			to={to}
			onClick={onClick}
			className={classes}
		>
			<img className="dtc v-mid" width='40px' height='40px' src={props.icon} alt={props.alt} />
			<span className="ml4 dtc v-mid">{children}</span>
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
			<img className="dtc v-mid" width='40px' height='40px' src={props.icon} alt={props.alt} />
			<span className="ml4 dtc v-mid">{children}</span>
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
