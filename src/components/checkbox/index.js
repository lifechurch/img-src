import React from 'react'
import PropTypes from 'prop-types'


function CheckBox({
	id, caption, onChange, checked
}) {
	return (
		<label htmlFor={id} className='pv3'>
			<input
				type="checkbox"
				id={id} className='mr2'
				onChange={(event) => { onChange(event) }}
				checked={checked}
			/>
			{caption}
		</label>
	)
}

CheckBox.propTypes = {
	onChange: PropTypes.func.isRequired,
	checked: PropTypes.bool.isRequired,
	caption: PropTypes.string,
	id: PropTypes.string
}

CheckBox.defaultProps = {
	caption: 'Agree to something?',
	id: 'checkbox'
}

export default CheckBox
