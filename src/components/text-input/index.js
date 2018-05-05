import React from 'react'
import PropTypes from 'prop-types'

const addDefaultBorderClass = (classNames) => {
	const hasBorderClass = classNames.includes('b--')
	if (hasBorderClass) return classNames
	// There's no border class, so add one
	return `${classNames} b--transparent`
}

function TextInput(props) {

	let classNames = `input-reset br3 bg-white pa3 outline-0 ${props.className}`
	// Make sure there is a border class so we don't get inset border
	classNames = addDefaultBorderClass(classNames)

	return (
		<input
			type='text'
			{...props}
			name={props.name}
			defaultValue={props.defaultValue}
			className={classNames}
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
	className: ''
}

export default TextInput
