import React from 'react'
import { FormattedMessage } from 'react-intl'
import Card from '../../components/card'
import TextArea from '../../components/textarea'

function UserRegistration() {
	return (
		<div className="pa4">
			<h1 className="ma0 pa0">
				<FormattedMessage id="userRegistration" />
			</h1>
			<Card>
				<input type="text" placeholder="FIRST NAME" />
				<input type="text" placeholder="LAST NAME" /><br />
				Why do you want to be on the volunteering team for YouVersion?<br />
				<TextArea />
			</Card>
			<Card>
				Another card
			</Card>
		</div>
	)
}

export default UserRegistration
