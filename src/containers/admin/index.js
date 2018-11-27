import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import ToggleBar from '../../components/toggle-bar'

class Admin extends Component {
	constructor(props) {
		super(props)
		this.images = [
			{
				url: '//d33q4ye4b26s92.cloudfront.net/videos/thumbnails/266/360x240.jpg',
			},
			{
				url: '//d33q4ye4b26s92.cloudfront.net/videos/thumbnails/1102/720x480.jpg',
			},
			{
				url: '//d33q4ye4b26s92.cloudfront.net/videos/thumbnails/1/720x480.jpg',
			},
			{
				url: '//d33q4ye4b26s92.cloudfront.net/videos/thumbnails/472/720x480.jpg',
			},
			{
				url: '//d33q4ye4b26s92.cloudfront.net/videos/thumbnails/2005/720x480.jpg',
			},
			{
				url: '//d33q4ye4b26s92.cloudfront.net/videos/thumbnails/186/360x240.jpg',
			}
		]
	}

	render() {

		const renderImage = (img, i) => {
			return (
				<div className="fl w-100 w-third-ns pa2" key={ i }>
					<div className="outline bg-white pv4" >
						<img alt={ img.url } src={ img.url } />
					</div>
				</div>
			)
		}

		return (
			<div className="pa4">
				<h1 className="ma0 pa0">
					<FormattedMessage id="admin" />
					<div className="pa4 fl">
						<div className="cf ph2-ns">
							{ this.images.map(renderImage) }
						</div>
					</div>
				</h1>
			</div>
		)
	}
}

export default Admin
