import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import ToggleBar from '../../components/toggle-bar'

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

				<div className="w-100 tc">
					<ToggleBar>
						<Link to={`/user-profile/${userId}/submissions`}>Submissions</Link>
						<Link to={`/user-profile/${userId}/approved`}>Approved</Link>
						<Link to={`/user-profile/${userId}/declined`}>Declined</Link>
						<Link to={`/user-profile/${userId}/pending`}>Pending</Link>
					</ToggleBar>
				</div>

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
