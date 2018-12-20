import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import PulseLoader from 'react-spinners/PulseLoader'
import withYVAuth from '@youversion/tupos-auth/dist/withYVAuth'
import ToggleBar from '../../components/toggle-bar'
import tempIcon from '../../assets/me.svg'
import Image from '../../tupos/models/image'

class UserProfile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			imageData: [],
			loadingData: false,
			counts: {
				approved: 0,
				denied: 0,
				moderated: 0,
				pending: 0
			}
		}

		this.loadData = this.loadData.bind(this)
	}

	componentDidMount() {
		this.loadData()
	}

	componentDidUpdate(prevProps) {
		const {
			match: {
				params: {
					imageStatus
				},
			},
		} = this.props

		const {
			match: {
				params: {
					imageStatus: prevImageStatus,
				},
			},
		} = prevProps

		if (imageStatus !== prevImageStatus) {
			this.loadData()
		}
	}

	async loadData() {
		const {
			match: {
				params: {
					imageStatus
				},
			},
		} = this.props

		if (imageStatus) {
			let imageData = []

			this.setState({ loadingData: true })
			imageData = Image.getMany(imageStatus)
				.then((data) => {
					imageData = data
					this.setState({ imageData, loadingData: false })
				})
				.catch(() => {})
		}
	}

	render() {
		const {
			imageData,
			loadingData,
			counts
		} = this.state

		const {
			user,
			match: {
				params: {
					userId,
					imageStatus
				},
			}
		} = this.props

		if (!userId) return (<Redirect to={`/user-profile/${user.id}/pending`} />)
		if (!imageStatus) return (<Redirect to={`/user-profile/${userId}/pending`} />)

		const imageList = imageData.map((image) => {
			if (!image.url || !image.url.length) return null
			return (
				<div className="fl w-50 w-third-ns pa2-ns pa1" key={image.id}>
					<img src={image.url} className="pv2" alt="" />
				</div>
			)
		})

		return (
			<div className="flex flex-column w-100 min-h-100 pt4">

				<div className="pb2 flex flex-column-ns items-center-ns justify-center-ns">
					{user.avatarImageId ? (
						<div className="ma3">
							<div>
								<img src={user.avatarUrl} alt={user.firstName} className="w4-ns w3 br-100" />
							</div>
						</div>
					) : null}
					<div className="flex flex-column items-center-ns justify-center-ns mt3">
						<h2 className="ma0 pa0">
							{ `${user.firstName} ${user.lastName}` }
						</h2>
						<p className="ma0 pa0 light-silver">
							<FormattedMessage id="userBio" />
						</p>
						<p className="ma0 pa0 light-silver">
							<FormattedMessage id="designerSince" values={{ date: moment().format('LL') }} />
						</p>
						<div className="flex">
							<img src={tempIcon} alt="" className="mr2" />
							<p className="gray">
								{user.location}
							</p>
						</div>
					</div>
				</div>

				<div className="flex-auto pa4 bg-light-gray">
					<h1 className="ma0 pa0">

						<div className="w-100 flex justify-center ma3">
							<ToggleBar
								links={[
									{
										text: <FormattedMessage id="submissionsLabel" />,
										address: `/user-profile/${userId}/submissions`,
										total: counts.moderated
									},
									{
										text: <FormattedMessage id="approvedLabel" />,
										address: `/user-profile/${userId}/approved`,
										total: counts.approved
									},
									{
										text: <FormattedMessage id="declinedLabel" />,
										address: `/user-profile/${userId}/declined`,
										total: counts.denied
									},
									{
										text: <FormattedMessage id="pendingLabel" />,
										address: `/user-profile/${userId}/pending`,
										total: counts.pending
									}
								]}
							/>
						</div>
					</h1>

					<div className="mw9 center ph3-ns">
						<div className="cf ph2-ns">
							{imageList}
							{ loadingData &&
								<PulseLoader
									className="flex justify-center mt5"
									color="#555"
								/>
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
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
export default withYVAuth(UserProfile)
