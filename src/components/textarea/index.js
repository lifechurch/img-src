import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const styles = {
	resize: 'none'
}

function TextArea(props) {
	return (
		<textarea {...props} style={styles} className="bg-animate br2 pa2 w-100 h-100 input-reset b--moon-gray outline-0" />
	)
}

TextArea.propTypes = {
	className: PropTypes.string
}

TextArea.defaultProps = {
	className: ''
}

export default TextArea
