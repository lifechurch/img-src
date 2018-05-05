import React from 'react'
import PropTypes from 'prop-types'

function TextInput(props) {
	return (
		<div className="pa4">
			<input type='text' {...props} />
		</div>
	)
}

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string
}

TextInput.defaultProps = {
	placeholder: null,
	value: null
}

export default TextInput
