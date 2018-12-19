import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import ToggleBar from '../../../components/toggle-bar'
import main from './../../../try-models'
import Image from './../../../tupos/models/image/index'

class AdminReview extends Component {
	constructor(props) {
		super(props)
		this.declinedImages = [
			{
				url: '//d33q4ye4b26s92.cloudfront.net/videos/thumbnails/472/720x480.jpg'
			},
			{
				url: '//d33q4ye4b26s92.cloudfront.net/videos/thumbnails/2005/720x480.jpg'
			},
			{
				url: '//d33q4ye4b26s92.cloudfront.net/videos/thumbnails/186/360x240.jpg'
			}
		]

		this.approvedImages = [
			{
				url: '//d33q4ye4b26s92.cloudfront.net/videos/thumbnails/266/360x240.jpg'
			},
			{
				url: '//d33q4ye4b26s92.cloudfront.net/videos/thumbnails/1102/720x480.jpg'
			},
			{
				url: '//d33q4ye4b26s92.cloudfront.net/videos/thumbnails/1/720x480.jpg'
			},
			{
				url: '//d33q4ye4b26s92.cloudfront.net/videos/thumbnails/472/720x480.jpg'
			},
			{
				url: '//d33q4ye4b26s92.cloudfront.net/videos/thumbnails/2005/720x480.jpg'
			},
			{
				url: '//d33q4ye4b26s92.cloudfront.net/videos/thumbnails/186/360x240.jpg'
			}
		]
	}


	render() {

		const renderImage = (img, i) => {
			return (
				<div className="h5 w5 ma3" key={ i }>
					<div className="w-100 h-100 pv4 cover bg-center" style={{ backgroundImage: `url(${ img.url })`}}  />
				</div>
			)
		}

		const renderByType = (type) => {
			if (type === 'approved') {
				return this.approvedImages.map(renderImage)
			} else if (type === 'declined') {
				return this.declinedImages.map(renderImage)
			} else {
				return this.approvedImages.map(renderImage)
			}
		}

		const {
			show
		} = this.props

		return (
			<div className="pa4">
				<h1 className="ma0 pa0">
					<div className="w-100 flex justify-center ma3">
						<ToggleBar
							links={[
								{
									text: 'Approved',
									address: '/admin/review/approved'
								},
								{
									text: 'Declined',
									address: '/admin/review/declined'
								}
							]}
						/>
					</div>
					<div className="cf w-100 flex items-center justify-center flex-wrap mw8 mr-auto ml-auto">
						{ renderByType(show) }
					</div>
				</h1>
			</div>
		)
	}
}

export default AdminReview
