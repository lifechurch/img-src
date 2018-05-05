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
	className: PropTypes.string,
	defaultValue: PropTypes.string
}

TextInput.defaultProps = {
	// Clear inset shadow
	className: 'b--transparent',
	defaultValue: ''
}

export default TextInput
