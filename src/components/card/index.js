import React from 'react'
import PropTypes from 'prop-types'

function Card({ children }) {
	return (
		<div className="w-100 bg-white pa4 br2 shadow-2">
			{children}
		</div>
	)
}

Card.propTypes = {
	children: PropTypes.node
}

Card.defaultProps = {
	children: null
}

export default Card
