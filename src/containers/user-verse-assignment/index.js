import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import Modal from '../../components/modal'
import { notifier } from '../../components/toast-handler'
import Button from '../../components/button'

class UserVerseAssignment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalIsOpen: false
		}
		this.notify = notifier.notify()
	}

	render() {
		const { modalIsOpen } = this.state
		return (
			<div className="pa4">
				<h1 className="ma0 pa0">
					<FormattedMessage id="userVerseAssignment" />
				</h1>
				<Button onClick={() => { this.setState({ modalIsOpen: true }) }}>
          Open Modal
				</Button>
				<Button onClick={() => { this.notify('hey') }}>
					Notify
				</Button>
				<Button onClick={() => { this.notify('hey2', 3000, false) }}>
					Notify
				</Button>
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
