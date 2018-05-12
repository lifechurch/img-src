import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import Modal from '../../components/modal'
import MinorHeading from './../../components/typography/minor-heading'
import BodyText from './../../components/typography/body-text'
import ImageDrop from './../../components/image-drop'

class UserVerseAssignment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalIsOpen: false
		}
	}

	render() {
		const { modalIsOpen } = this.state
		return (
			<div className="pa4">
				<h1 className="ma0 pa0">
					<FormattedMessage id="userVerseAssignment" />
				</h1>
				<button onClick={() => { this.setState({ modalIsOpen: true }) }}>
          Open Modal
				</button>
				<Modal
					isOpen={modalIsOpen}
					widthClass="w-30"
					heightClass="h-50"
				>
					<h1 className="tc">Hello Modal</h1>
				</Modal>
				<ImageDrop>
					<MinorHeading>2 Corinthians 3:17</MinorHeading>
					<BodyText>
						Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom.
					</BodyText>
				</ImageDrop>
			</div>
		)
	}
}

export default UserVerseAssignment
