import React from 'react'
import PropTypes from 'prop-types'
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

				<div className="w-100 flex justify-center ma3">
					<ToggleBar links={[
						{
							text: 'Submissions',
							address: `/user-profile/${userId}/submissions`
						},
						{
							text: 'Approved',
							address: `/user-profile/${userId}/approved`
						},
						{
							text: 'Declined',
							address: `/user-profile/${userId}/declined`
						},
						{
							text: 'Pending',
							address: `/user-profile/${userId}/pending`
						}
					]}
					/>
				</div>
				PAGE CONTENT
				PAGE CONTENT
				PAGE CONTENT
				PAGE CONTENT
				PAGE CONTENT
				PAGE CONTENT
				PAGE CONTENT
				PAGE CONTENT
				PAGE CONTENT
				PAGE CONTENT
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
