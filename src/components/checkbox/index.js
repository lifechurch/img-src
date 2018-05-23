import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

function CheckBox({
	id, onChange, checked, formattedMsgId
}) {
	return (
		<label htmlFor={id} className='pv3'>
			<input
				type="checkbox"
				id={id}
				className='mr2'
				onChange={(event) => { onChange(event) }}
				checked={checked}
			/>
			<FormattedMessage id={formattedMsgId} />
		</label>
	)
}

CheckBox.propTypes = {
	onChange: PropTypes.func.isRequired,
	checked: PropTypes.bool.isRequired,
	formattedMsgId: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired
}

export default CheckBox
