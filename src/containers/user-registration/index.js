import React from 'react'
import { FormattedMessage } from 'react-intl'
import TextInput from '../../components/text-input'
import Card from '../../components/card'

function UserRegistration() {
	return (
		<div className="pa4">
			<h1 className="ma0 pa0">
				<FormattedMessage id="userRegistration" />
			</h1>
			<Card>
				<TextInput type="text" placeholder="FIRST NAME" />
				<TextInput type="text" placeholder="LAST NAME" /><br />
				Why do you want to be on the volunteering team for YouVersion?<br />
				<textarea />
			</Card>
			<Card>
				Another card
			</Card>
		</div>
	)
}

export default UserRegistration
