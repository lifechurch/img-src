import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import ToggleBar from '../../components/toggle-bar'
import tempIcon from '../../assets/me.svg'
import images from '../splash-page/assets/images'
import Image from '../../tupos/models/image'

class UserProfile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
		this.loadData = this.loadData.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}


	componentDidMount() {
		this.loadData()
	}

	handleChange(status) {
		this.setState({ imgStatus: status })
	}


	async loadData() {
		// TODO: Add reference to url (item.url) when null is not being returned back
		const approvedImg = await Image.getMany('approved').then((img) => {
			return img.map((item, index) => {
				return (
					<div className="fl w-50 w-third-ns pa2-ns pa1" key={item.id}>
						<img src={images[0]} alt="" className="pv2" />
					</div>
				)
			})
		})


		const pendingImg = await Image.getMany('pending').then((img) => {
			return img.map((item, index) => {
				return (
					<div className="fl w-50 w-third-ns pa2-ns pa1" key={item.id}>
						<img src={images[3]} alt="" className="pv2" />
					</div>
				)
			})
		})

		const declinedImg = await Image.getMany('denied').then((img) => {
			return img.map((item, index) => {
				return (
					<div className="fl w-50 w-third-ns pa2-ns pa1" key={item.id}>
						<img src={images[1]} alt="" className="pv2" />
					</div>
				)
			})
		})

		const submissionsImg = await Image.getMany('moderated').then((img) => {
			return img.map((item, index) => {
				return (
					<div className="fl w-50 w-third-ns pa2-ns pa1" key={item.id}>
						<img src={images[2]} alt="" className="pv2" />
					</div>
				)
			})

		})

		this.setState({
			submissionsImg,
			approvedImg,
			declinedImg,
			pendingImg
		})

	}

	render() {
		const {
			submissionsImg,
			approvedImg,
			declinedImg,
			pendingImg,
			imgStatus
		} = this.state

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
							<FormattedMessage id="userProfile" values={{ user: this.props.match.params.userId }} />
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
										address: `/user-profile/${this.props.match.params.userId}/submissions`,
										total: submissionsImg ? submissionsImg.length : 0
									},
									{
										text: 'Approved',
										address: `/user-profile/${this.props.match.params.userId}/approved`,
										total: approvedImg ? approvedImg.length : 0
									},
									{
										text: 'Declined',
										address: `/user-profile/${this.props.match.params.userId}/declined`,
										total: declinedImg ? declinedImg.length : 0
									},
									{
										text: 'Pending',
										address: `/user-profile/${this.props.match.params.userId}/pending`,
										total: pendingImg ? pendingImg.length : 0
									}
								]}

								changeStatus={this.handleChange}
							/>
						</div>
					</h1>

					<div className="mw9 center ph3-ns">
						<div className="cf ph2-ns">
							{ imgStatus === 'Submissions' && submissionsImg }
							{ imgStatus === 'Approved' && approvedImg }
							{ imgStatus === 'Declined' && declinedImg }
							{ imgStatus === 'Pending' && pendingImg }
							{ imgStatus === 'Select' && submissionsImg }
							{ imgStatus === 'Select' && approvedImg }
							{ imgStatus === 'Select' && declinedImg }
							{ imgStatus === 'Select' && pendingImg }
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
export default UserProfile
