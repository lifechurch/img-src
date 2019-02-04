import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import PulseLoader from 'react-spinners/PulseLoader'
import ApprovalItem from '../components/approval-item'
import Image from './../../../tupos/models/image/index'

class AdminPending extends Component {
	constructor(props) {
		super(props)
		this.state = {
			images: [],
			loading: false
		}
	}

	componentDidMount() {
		this.loadData()
	}

	loadData = () => {
		this.setState({ loading: true }, async () => {
			const images = await Image.getMany('pending')
			this.setState({ images, loading: false })
		})
	}

	handleImageAction = (status, image) => {
		const { images } = this.state
		Image.setStatus(image.id, { status })
		const filteredImages = images.filter((comparedImage) => { return image.id !== comparedImage.id })
		this.setState({ images: filteredImages })
	}

	render() {
		const { images, loading } = this.state
		return (
			<div className="pa4 bg-light-gray h-100">
				<h1><FormattedMessage id="pending" />{loading && <PulseLoader />}</h1>
				{images.map((image) => { return <ApprovalItem onImageAction={this.handleImageAction} key={image.id} image={image} /> })}
			</div>
		)
	}
}

export default AdminPending
