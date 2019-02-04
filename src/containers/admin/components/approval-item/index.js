import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, FormattedMessage } from 'react-intl'
import Card from '../../../../components/card'
import Verse from '../../../../tupos/models/verse'
import Partner from '../../../../tupos/models/partner'
import './index.css'

class ApprovalItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			verse: {},
			user: {}
		}
	}

	componentDidMount() {
		this.loadData()
	}

	loadData = () => {
		const { image } = this.props
		this.loadVerse(image.usfm, image.versionId || 1)
		this.loadUser(image.userId)
	}

	loadVerse = async (usfm, version) => {
		try {
			const verse = await Verse.getOne(usfm, version)
			this.setState({ verse })
		} catch (e) {
			console.error(e)
		}
	}

	loadUser = async (userId) => {
		try {
			const user = await Partner.getOne(userId)
			this.setState({ user })
		} catch (e) {
			console.error(e)
		}
	}

	handleImageAction = (action) => {
		const { image } = this.props
		this.props.onImageAction(action, image)
	}

	handleOnUserAction = (action, userInfo) => {
		this.props.onUserAction(action, userInfo)
	}

	render() {
		const { image } = this.props
		const { verse, user } = this.state
		return (
			<div className="flex flex-column mw7">
				{/* Thumbnail and Name */}
				<div className="flex mb3">
					<div className="mr3" >
						{image.url
							? <img src={image.url} alt="" className="w3 br-100" style={{ height: 64, width: 64 }} />
							: (
								<div className="w3 br-100 bg-gray tc bold f3 near-white flex items-center justify-center" style={{ height: 64, width: 64 }}>
									{(user.name && user.name.charAt(0).toUpperCase()) || '?'}
								</div>
							)
						}
					</div>
					<div className="mr3"><h2>{user.name || 'Simba Lion'}</h2></div>
				</div>

				{/* Image and Verse */}
				<div className="flex-ns mb6-ns">
					<div className='mr3-ns w-third-ns relative w-100 hide-child'>
						<div className='relative aspect-ratio aspect-ratio--1x1 w-100'>
							<img className='absolute h-100' src={image.url} alt='profile' />
							<div className='absolute db-ns dn h-100 w-100 bg-black-80 child' />
						</div>
						<div className='options-container absolute top-0 h-100 w-100 flex flex-column items-center justify-center child f3'>
							<div
								role='presentation'
								className='option flex flex-row items-center w-60 mb4 pointer white-80 hover-green'
								onClick={() => { this.handleImageAction('Approved') }}
							>
								<div className='title-circle bg-white-80 h1 w1 br-100 mr3 hover-bg-green' />
								<div ><FormattedMessage id='approveButton' /></div>
							</div>
							<div
								role='presentation'
								className='option flex flex-row items-center w-60 pointer white-80 hover-red'
								onClick={() => { this.handleImageAction('Denied') }}
							>
								<div className='title-circle bg-white-80 h1 w1 br-100 mr3 hover-bg-red' />
								<div ><FormattedMessage id='declineButton' /></div>
							</div>
						</div>
					</div>
					<div className="flex-ns flex-column justify-between w-two-thirds-ns mt0-ns mt3">
						<Card className="measure">
							<h3 className="mid-gray">{verse.reference && verse.reference.human}</h3>
							<p className="mid-gray">{verse.content}</p>
						</Card>
						<div className="mt3">
							{/* For showing thumbnails of other images related to same verse
							<img src={image.url} alt="" className="w3 mr3" />
							<img src={image.url} alt="" className="w3 mr3" />
							<img src={image.url} alt="" className="w3 mr3" />
							*/}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

ApprovalItem.propTypes = {
	onUserAction: PropTypes.func,
	onImageAction: PropTypes.func,
	image: PropTypes.shape({})
}

ApprovalItem.defaultProps = {
	onUserAction: () => { },
	onImageAction: () => { },
	image: {}
}

export default injectIntl(ApprovalItem)
