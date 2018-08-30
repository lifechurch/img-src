import React from 'react'
import PropTypes from 'prop-types'

function TextInput(props) {
	const {
		border,
		disabled,
		name,
		defaultValue,
		...remainingProps
	} = props

	const borderClasses = border ? 'b--moon-gray' : 'b--transparent'
	const disabledClasses = disabled ? 'b--transparent bg-light-gray black' : 'b--moon-gray'

	const classNames = `bg-animate input-reset ba br2 pv3 ph4 outline-0 w-100 ${borderClasses} ${disabledClasses}`

	return (
		<input
			type='text'
			{...remainingProps}
			name={name}
			defaultValue={defaultValue}
			className={classNames}
		/>
	)
}

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	defaultValue: PropTypes.string,
	border: PropTypes.bool,
	disabled: PropTypes.bool
}

TextInput.defaultProps = {
	defaultValue: '',
	border: false,
	disabled: false
}

export default TextInput
