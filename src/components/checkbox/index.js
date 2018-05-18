import React, { Component } from 'react'
import PropTypes from 'prop-types'


function CheckBox({
	id, labelName, onChange, checked
}) {
	return (
		<label htmlFor={id} className='pv3'>
			<input type="checkbox" id={id} className='mr2' onChange={(event) => { onChange(event) }} checked={checked} />
			{labelName}
		</label>
	)
}

CheckBox.propTypes = {
	onChange: PropTypes.func.isRequired,
	checked: PropTypes.bool.isRequired,
	labelName: PropTypes.string,
	id: PropTypes.string
}

CheckBox.defaultProps = { labelName: 'Agree to something?', id: 'checkbox' }

export default CheckBox
