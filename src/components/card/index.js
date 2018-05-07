import React from 'react'
import PropTypes from 'prop-types'

function Card({ children, heightClass }) {
	return (
		<div className={`w-100 ${heightClass} bg-white pa4 br2 shadow-2 relative`}>
			{children}
		</div>
	)
}

Card.propTypes = {
	children: PropTypes.node,
	heightClass: PropTypes.string
}

Card.defaultProps = {
	children: null,
	heightClass: ''
}

export default Card
