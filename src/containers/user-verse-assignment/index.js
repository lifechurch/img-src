import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import Modal from '../../components/modal'
import Card from './../../components/card'
import MinorHeading from './../../components/typography/minor-heading'
import BodyText from './../../components/typography/body-text'
import ImageDrop from './../../components/image-drop'
import ComboBox from './../../components/combo-box'

class UserVerseAssignment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalIsOpen: false
		}
	}

	render() {
		const { modalIsOpen } = this.state

		const languages = [
			{ name: 'English', value: 'EN' },
			{ name: 'Spanish', value: 'ES' }
		]

		const versions = [
			{ name: 'American Standard Version', value: 'ASV' },
			{ name: 'Reina-Valera Antigua', value: 'RVES' }
		]

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
				<div className="filters">
					<ComboBox
						name="Languages"
						options={languages}
						onSelect={(val) => { return (val) }}
					/>
					<ComboBox
						name="Versions"
						options={versions}
						onSelect={(val) => { return (val) }}
					/>
				</div>
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
