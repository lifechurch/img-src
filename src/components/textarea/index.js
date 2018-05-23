import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const styles = {
	resize: 'none'
}

function TextArea(props) {
	const disabledClasses = props.disabled ? 'b--transparent bg-light-gray black' : 'b--moon-gray'

	const classes = `bg-animate br2 pa2 w-100 h-100 input-reset outline-0 ${disabledClasses}`

	return (
		<textarea {...props} style={styles} className={classes} />
	)
}

TextArea.propTypes = {
	disabled: PropTypes.bool
}

TextArea.defaultProps = {
	disabled: false
}

export default TextArea
