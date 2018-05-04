import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

function UserProfile(props) {
	const {
		match: {
			params: {
				userId,
			},
		}
	} = props

	return (
		<div className="pa4">
			<h1 className="ma0 pa0">
				<FormattedMessage id="userProfile" values={{ user: userId }} />
			</h1>
		</div>
	)
}

UserProfile.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			inventoryId: PropTypes.string,
		}),
	})
}

UserProfile.defaultProps = {
	match: null
}
export default UserProfile
