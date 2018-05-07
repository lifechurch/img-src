import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import Modal from '../../components/modal'

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
			</div>
		)
	}
}

export default UserVerseAssignment
