import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function ToggleBar(props) {
	return (
		<div className="togglebar">
			{props.children}
		</div>
	)
}

ToggleBar.propTypes = {
	children: PropTypes.node.isRequired
}

export default ToggleBar
