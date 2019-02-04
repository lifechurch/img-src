import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import PulseLoader from 'react-spinners/PulseLoader'
import PropTypes from 'prop-types'
import ToggleBar from '../../../components/toggle-bar'
import Image from './../../../tupos/models/image/index'

class AdminReview extends Component {
	constructor(props) {
		super(props)

		this.state = {
			images: [],
			loadingData: false
		}
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
			loadingData
		} = this.state

		const {
			match: {
				params: {
					imageStatus
				},
			}
		} = this.props


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
				<div className="pa4">
					<h1 className="ma0 pa0">
						<div className="w-100 flex justify-center ma3">
							<ToggleBar
								links={[
									{
										text: <FormattedMessage id="approvedLabel" />,
										address: '/admin/review/approved'
									},
									{
										text: <FormattedMessage id="declinedLabel" />,
										address: '/admin/review/denied'
									}
								]}
							/>
						</div>
					</h1>
				</div>
				<div className="fl flex-auto pa4 bg-light-gray">
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

AdminReview.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			imageStatus: PropTypes.string,
		}),
	})
}

AdminReview.defaultProps = {
	match: null
}

export default AdminReview
