import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import Image from '../../tupos/models/image'
import ApprovalItem from './components/approval-item'

class Admin extends Component {
	state = {
		images: []
	}
	componentDidMount = async () => {
		try {
			const images = await Image.getMany('pending')
			this.setState({ images })
		} catch (error) {
			console.error(error)
		}
	}

	handleOnUserAction = () => {

	}
	handleOnImageAction = () => {

	}
	render() {
		const { images } = this.state
		return (
			<div className="pa4 w-100" >
				<h1 className="ma0 pa0">
					<FormattedMessage id="admin" />
				</h1>
				{
					images.length && images.map((image) => {
						return (
							<ApprovalItem
								image={image}
								key={image.id}
								onImageAction={this.handleOnImageAction}
								onUserAction={this.handleOnUserAction}
							/>
						)
					})
				}
			</div>
		)
	}

}
export default Admin