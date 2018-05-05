import React from 'react'
import PropTypes from 'prop-types'

function Card({ children }) {
	return (
		<div className="mw7 center bg-white pa4 br2 shadow-2 ma4">{children}</div>
	)
}

Card.propTypes = {
	children: PropTypes.node
}

Card.defaultProps = {
	children: null
}

export default Card
