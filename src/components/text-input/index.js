import React from 'react'
import PropTypes from 'prop-types'

function TextInput(props) {
	return (
		<input
			type='text'
			{...props}
			name={props.name}
			defaultValue={props.defaultValue}
			className={`input-reset br3 bg-white pa3 outline-0 ${props.className}`}
		/>
	)
}

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	defaultValue: PropTypes.string,
	className: PropTypes.string
}

TextInput.defaultProps = {
	defaultValue: '',
	// Clear inset shadow by default
	className: 'b--transparent'
}

export default TextInput
