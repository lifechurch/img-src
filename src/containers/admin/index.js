import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import ToggleBar from '../../components/toggle-bar'



class Admin extends Component {
	constructor(props) {
		super(props)
		this.images =  [
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

	renderImage(img, i) {
        return (
	<div class="mw9 center ph3-ns" >
  					<div class="cf ph2-ns">
    					<div class="fl w-100 w-third-ns pa2">
      					<div class="outline bg-white pv4" key={i} >
									<img src={img.url} />
								</div>
    					</div>
    					<div class="fl w-100 w-third-ns pa2">
								<div class="outline bg-white pv4" key={i}>
									<img src={img.url} />
								</div>
    					</div>
    					<div class="fl w-100 w-third-ns pa2">
								<div class="outline bg-white pv4" key={i}>
									<img src={img.url} />
								</div>
    					</div>
  				</div>
				</div>

		)
	};

	render() {

		return (
			<div className="pa4">
				<h1 className="ma0 pa0">
					<FormattedMessage id="admin" />
					{ this.images.map(this.renderImage) }
					<div className="w-100 flex justify-center ma3" ></div>
				</h1>
			</div>
		)
	}
}

export default Admin
