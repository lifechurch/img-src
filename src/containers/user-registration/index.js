import React from 'react'
import { FormattedMessage } from 'react-intl'
import Card from '../../components/card'
import TextInput from '../../components/text-input'
import TextArea from '../../components/textarea'

function UserRegistration() {
	return (
		<div className="pa4">
			<h1 className="ma0 pa0">
				<FormattedMessage id="userRegistration" />
			</h1>
			<Card>
				<div className='pa3 bg-black-10'>
					<h3>Email/Password Style</h3>
					<TextInput type="text" placeholder="EMAIL" className='ma3' />
					<TextInput type="password" placeholder="PASSWORD" className='ma3' />
				</div>
				<div className='pa3'>
					<h3>First Name/Last Name Style</h3>
					<TextInput type="text" placeholder="FIRST NAME" className='b--moon-gray ma3' />
					<TextInput type="text" placeholder="LAST NAME" className='b--moon-gray ma3' /><br />
				</div>

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
