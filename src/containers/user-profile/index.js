import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import ToggleBar from '../../components/toggle-bar'
import tempIcon from '../../assets/me.svg'

// TESTING
import images from '../splash-page/assets/images'

function UserProfile(props) {
	const {
		match: {
			params: {
				userId,
			},
		}
	} = props

	return (
		<div className="pt4">

			<div className="pb2 flex flex-column-ns items-center-ns justify-center-ns">
				<div className="ma3">
					<div>
						<img src={images[3]} alt="" className="w4-ns w3 br-100" />
					</div>
				</div>
				<div className="flex flex-column items-center-ns justify-center-ns mt3">
					<h2 className="ma0 pa0">
						<FormattedMessage id="userProfile" values={{ user: userId }} />
					</h2>
					<p className="ma0 pa0 light-silver">
						<FormattedMessage id="userBio" />
					</p>
					<p className="ma0 pa0 light-silver">
						<FormattedMessage id="designerSince" />
					</p>
					<div className="flex">
						<img src={tempIcon} alt="" className="mr2" />
						<p className="gray">
							<FormattedMessage id="userLocation" />
						</p>
					</div>
				</div>
			</div>

			<div className="pt2 bg-light-gray pa4" >
				<h1 className="ma0 pa0">

					<div className="w-100 flex justify-center ma3">
						<ToggleBar
							links={[
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
				</h1>

				<div className="mw9 center ph3-ns">
					<div className="cf ph2-ns">
						<div className="fl w-50 w-third-ns pa2-ns pa1">
							<img src={images[0]} alt="" className="pv2" />
						</div>
						<div className="fl w-50 w-third-ns pa2-ns pa1">
							<img src={images[1]} alt="" className="pv2" />
						</div>
						<div className="fl w-50 w-third-ns pa2-ns pa1">
							<img src={images[2]} alt="" className="pv2" />
						</div>
						<div className="fl w-50 w-third-ns pa2-ns pa1">
							<img src={images[3]} alt="" className="pv2" />
						</div>
						<div className="fl w-50 w-third-ns pa2-ns pa1">
							<img src={images[4]} alt="" className="pv2" />
						</div>
						<div className="fl w-50 w-third-ns pa2-ns pa1">
							<img src={images[0]} alt="" className="pv2" />
						</div>
					</div>
				</div>
			</div>
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
