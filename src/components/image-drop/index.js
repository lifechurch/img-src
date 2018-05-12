import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import Card from './../card'
import './index.css'

class ImageDrop extends Component {
	constructor(props) {
		super(props)
		this.state = {
			rejected: [],
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


	onDrop(files) {

		const MIN_IMAGE_WIDTH = 960
		const MAX_IMAGE_WIDTH = 4000
		const MIN_IMAGE_HEIGHT = 960
		const MAX_IMAGE_HEIGHT = 4000

		const rejected = []
		const accepted = []
		files.map((file) => {
			const reader = new FileReader()
			reader.onload = (loadEvent) => {
				const image = new Image()
				const handleLoad = () => {
					if ((image.width < MIN_IMAGE_WIDTH) || (image.width > MAX_IMAGE_WIDTH) || (image.height < MIN_IMAGE_HEIGHT) || (image.width > MAX_IMAGE_HEIGHT)) {
						rejected.push(file)
					} else {
						accepted.push(file)
					}
					this.setState({ rejected, accepted })
				}

				image.src = loadEvent.target.result
				if (image.width === 0) {
					image.onload = handleLoad
				} else {
					handleLoad()
				}
			}
			reader.readAsDataURL(file)
			return (rejected, accepted)
		})

		this.setState({
			dropzoneActive: false
		})
	}

	render() {
		const styles = {
			height: 'auto',
			position: 'relative'
		}

		let dropzoneRef

		const {
			rejected,
			accepted,
			dropzoneActive
		} = this.state

		return (
			<Dropzone
				onDrop={this.onDrop.bind(this)}
				onDragEnter={this.onDragEnter.bind(this)}
				onDragLeave={this.onDragLeave.bind(this)}
				disableClick={true}
				style={styles}
				className="dropzone"
				ref={(node) => { dropzoneRef = node }}
				accept="image/jpg, image/jpeg"
			>
				<Card >
					{dropzoneActive && <div className="dropzone-overlay">Drop Files</div>}
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
							rejected.map((f) => {
								return (
									<span key={f.name} className="f6 red w-100 db pv3">{f.name} exceeds the maximum image size of 4000px by 4000px</span>
								)
							})
						}
					</div>
					<button className="upload-image fr f5-ns f6" onClick={() => { dropzoneRef.open() }}>Upload Image</button>
				</Card>
			</Dropzone>
		)
	}
}

ImageDrop.propTypes = {
	children: PropTypes.node
}

ImageDrop.defaultProps = {
	children: null
}

export default ImageDrop
