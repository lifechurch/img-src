import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import PulseLoader from 'react-spinners/PulseLoader'
import withYVAuth from '@youversion/tupos-auth/dist/withYVAuth'
import ToggleBar from '../../components/toggle-bar'
import pin from '../../assets/pin.png'
import tempIcon from '../../assets/me.svg'
import Image from '../../tupos/models/image'

class UserProfile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			images: [],
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
			this.setState({ images: [] })
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
			const stat = imageStatus !== 'submissions' ? imageStatus : ''

			this.setState({ loadingData: true })
			Image.getMany(stat)
				.then((images) => {
					this.setState({ images, loadingData: false })
				})
				.catch(() => {
					this.setState({ loadingData: false })
				})
		}
	}

	render() {
		const {
			images,
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

		const imageList = images.map((image) => {
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
					<div className="ma3">
						<div>
							{user.avatarImageId ? (
								<img src={user.avatarUrl} alt={user.firstName} className="w4-ns w3 br-100" />
							) : <img src={tempIcon} alt={user.firstName} className="w3-ns w3 br-100" /> }
						</div>
					</div>
					<div className="flex flex-column items-center-ns justify-center-ns mt3">
						<h2 className="ma0 pa0">
							{user.firstName} {user.lastName}
						</h2>
						<p className="ma0 pa0 light-silver">
							<FormattedMessage id="userBio" />
						</p>
						<p className={`ma0 pa0 light-silver ${!user.location ? 'mb4' : ''}`}>
							<FormattedMessage id="designerSince" values={{ date: moment().format('LL') }} />
						</p>

						{ user.location &&
							<div className="flex">
								<img src={pin} alt="" className="mr2 w1 h1 mt2" />
								<p className="gray mt2">
									{user.location}
								</p>
							</div>
						}
					</div>
				</div>

				<div className="flex-auto pa4 bg-light-gray">
					<h1 className="ma0 pa0">

						<div className="w-100 flex justify-center mb3">
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

					<div className="flex justify-center mw9 center ph3-ns">
						<div className="cf ph2-ns">
							{ loadingData ?
								<PulseLoader
									className="flex justify-center mt5"
									color="#555"
								/> :
								[
									imageList.length ?
										imageList :
										<p className="b f3-ns f5 mid-gray tc">{`No ${imageStatus} images found.`}</p>
								]
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

UserProfile.propTypes = {
	user: PropTypes.object,
	match: PropTypes.shape({
		params: PropTypes.shape({
			inventoryId: PropTypes.string,
		}),
	})
}

UserProfile.defaultProps = {
	user: {},
	match: null
}
export default withYVAuth(UserProfile)
