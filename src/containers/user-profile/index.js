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
import ImageCounts from '../../tupos/models/image-counts'
import BodyText from '../../components/typography/body-text'
import PrimaryHeading from '../../components/typography/primary-heading'
import MinorHeading from '../../components/typography/minor-heading'


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
				pending: 0,
				all: 0
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
			user,
			match: {
				params: {
					imageStatus
				},
			},
		} = this.props

		if (imageStatus) {
			const stat = imageStatus !== 'submissions' ? imageStatus : ''

			this.setState({ loadingData: true })

			Image.getMany(stat, user.id)
				.then((images) => {
					this.setState({ images, loadingData: false })
				})
				.catch(() => {
					this.setState({ loadingData: false })
				})

			const imageCounts = await ImageCounts.get()

			this.setState({
				counts: {
					pending: imageCounts.Pending,
					approved: imageCounts.Approved,
					denied: imageCounts.Denied,
					moderated: imageCounts.Moderated,
					all: (
						imageCounts.Pending +
						imageCounts.Approved +
						imageCounts.Denied +
						imageCounts.Moderated
					)
				}
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
				<div className="w-50 w-third-m w-25-l pa2-ns pa1" key={image.id}>
					<img src={image.url} className="" alt="" />
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
						<PrimaryHeading>
							{user.firstName} {user.lastName}
						</PrimaryHeading>
						<div className="mt1">
							<MinorHeading>
								<FormattedMessage id="userBio" />
							</MinorHeading>
						</div>

						<div className={`light-silver ${!user.location ? 'mb4' : ''}`}>
							<BodyText>
								<FormattedMessage id="designerSince" values={{ date: moment().format('LL') }} />
							</BodyText>
						</div>

						{ user.location &&
							<div className="flex">
								<img src={pin} alt="" className="mr2 w1 h1 mt2" />
								<BodyText>
									<span className="gray mt1">{user.location}</span>
								</BodyText>
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
										text: <FormattedMessage id="pendingLabel" />,
										address: `/user-profile/${userId}/pending`,
										total: counts.pending
									},
									{
										text: <FormattedMessage id="approvedLabel" />,
										address: `/user-profile/${userId}/approved`,
										total: counts.approved
									},
									{
										text: <FormattedMessage id="deniedLabel" />,
										address: `/user-profile/${userId}/denied`,
										total: counts.denied
									},
									{
										text: <FormattedMessage id="allLabel" />,
										address: `/user-profile/${userId}/submissions`,
										total: counts.all
									}
								]}
							/>
						</div>
					</h1>

					<div className="flex flex-wrap mw9 center ph3-ns">
						{ loadingData ?
							<PulseLoader
								className="flex center mt5 tc"
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
