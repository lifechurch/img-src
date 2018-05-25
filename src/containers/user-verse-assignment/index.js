import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import Modal from '../../components/modal'
import { notifier } from '../../components/toast-handler'
import Button from '../../components/button'
import MinorHeading from './../../components/typography/minor-heading'
import BodyText from './../../components/typography/body-text'
import ImageDrop from './../../components/image-drop'
import Card from './../../components/card'

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
				<Button onClick={() => { this.notify('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.') }}>
					Big Notify
				</Button>
				<Modal
					isOpen={modalIsOpen}
					widthClass="w-30"
					heightClass="h-50"
				>
					<h1 className="tc">Hello Modal</h1>
				</Modal>
				<Card>
					<ImageDrop
						minWidth={960}
						maxWidth={4000}
						minHeight={960}
						maxHeight={4000}
						onDrop={(rejected, accepted) => { return (rejected, accepted) }}
					>
						<MinorHeading>2 Corinthians 3:17</MinorHeading>
						<BodyText>
							Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom.
						</BodyText>
					</ImageDrop>
				</Card>
			</div>
		)
	}
}

export default UserVerseAssignment
