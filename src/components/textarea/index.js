import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const styles = {
	resize: 'none'
}

function TextArea(props) {
	const classes = `bg-animate br2 pa2 w-100 h3 input-reset b--moon-gray outline-0 ${props.className}`

	return (
		<textarea {...props} style={styles} className={classes} />
	)
}

TextArea.propTypes = {
	className: PropTypes.string
}

TextArea.defaultProps = {
	className: ''
}

export default TextArea
