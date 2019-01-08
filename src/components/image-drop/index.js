import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import { FormattedMessage } from 'react-intl'
import './index.css'

class ImageDrop extends Component {
	constructor(props) {
		super(props)
		this.state = {
			rejectedSmall: [],
			rejectedLarge: [],
			rejectedType: [],
			accepted: [],
			dropzoneActive: false
		}
	}

	onDragEnter() {
		this.setState({
			dropzoneActive: true
		})
	}

	onDragLeave() {
		this.setState({
			dropzoneActive: false
		})
	}


	async onDrop(accept, reject) {

		this.setState({
			rejectedSmall: [],
			rejectedLarge: [],
			rejectedType: [],
			accepted: []
		})

		const {
			minWidth,
			maxWidth,
			minHeight,
			maxHeight,
			onDrop
		} = this.props

		const rejectedSmall = []
		const rejectedLarge = []
		const rejectedType = []
		const accepted = []
		const rejectList = []


		reject.map((file) => {
			rejectList.push(file)
			rejectedType.push(file)
			this.setState({ rejectedType })
			return (rejectedType)
		})

		await Promise.all(accept.map((file) => {
			return new Promise((resolve, reject) => {
  			const reader = new FileReader()
  			reader.onload = (loadEvent) => {
  				const image = new Image()
  				const handleLoad = () => {

  					if (image.width < minWidth || image.height < minHeight) {
  						rejectedSmall.push(file)
  						rejectList.push(file)
  					} else if ((image.width > maxWidth) || (image.height > maxHeight)) {
  						rejectedLarge.push(file)
  						rejectList.push(file)
						} else if (image.width !== image.height) {
							rejectList.push(file)
						} else {
  						accepted.push(file)
  					}

  					this.setState({ rejectedSmall, rejectedLarge, accepted }, () => {
							resolve()
						})
  				}

  				image.src = loadEvent.target.result
  				if (image.width === 0) {
  					image.onload = handleLoad
  				} else {
  					handleLoad()
  				}
  			}
				reader.readAsDataURL(file)
  			// return (rejectedSmall, rejectedLarge, accepted)
			})
  	}))

		onDrop(accepted, rejectList)

		this.setState({
			dropzoneActive: false
		})
	}

	render() {

		const styles = {
			height: 'auto'
		}

		let dropzoneRef

		const {
			rejectedSmall,
			rejectedLarge,
			rejectedType,
			accepted,
			dropzoneActive
		} = this.state

		const {
			minWidth,
			maxWidth,
			minHeight,
			maxHeight,
			type
		} = this.props

		return (
			<Dropzone
				onDrop={this.onDrop.bind(this)}
				onDragEnter={this.onDragEnter.bind(this)}
				onDragLeave={this.onDragLeave.bind(this)}
				disableClick={true}
				style={styles}
				className="dropzone"
				ref={(node) => { dropzoneRef = node }}
				accept={type}
			>

				{dropzoneActive && <div className="dropzone-overlay"><FormattedMessage id="imageDropOverlay" /></div>}
				{this.props.children}

				<div className="db accepted">
					{
						accepted.map((f) => {
							return (
								<div key={f.name} className="ma2 w-100 mw3 dib">
									<img className="w-100" src={f.preview} alt={f.name} />
								</div>
							)
						})
					}
				</div>

				<div className="db rejected">
					{
						rejectedSmall.map((f) => {
							return (
								<span key={f.name} className="f6 red w-100 db pv3">
									<FormattedMessage id="rejectedSmallFile" values={{ file: f.name, minWidth, minHeight }} />
								</span>
							)
						})
					}
					{
						rejectedLarge.map((f) => {
							return (
								<span key={f.name} className="f6 red w-100 db pv3">
									<FormattedMessage id="rejectedLargeFile" values={{ file: f.name, maxWidth, maxHeight }} />
								</span>
							)
						})
					}
					{
						rejectedType.map((f) => {
							return (
								<span key={f.name} className="f6 red w-100 db pv3">
									<FormattedMessage id="rejectedType" values={{ file: f.name, type }} />
								</span>
							)
						})
					}
				</div>
				<button className="upload-image fr f5-ns f6" onClick={() => { dropzoneRef.open() }}><FormattedMessage id="imageDropButton" /></button>
			</Dropzone>
		)
	}
}

ImageDrop.propTypes = {
	children: PropTypes.node,
	minWidth: PropTypes.number,
	maxWidth: PropTypes.number,
	minHeight: PropTypes.number,
	maxHeight: PropTypes.number,
	type: PropTypes.string,
	onDrop: PropTypes.func
}

ImageDrop.defaultProps = {
	children: null,
	minWidth: 1280,
	maxWidth: 1280,
	minHeight: 1280,
	maxHeight: 1280,
	type: 'image/jpg, image/jpeg',
	onDrop: null
}

export default ImageDrop
