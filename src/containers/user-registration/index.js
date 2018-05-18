import React from 'react'
import { FormattedMessage } from 'react-intl'
import Card from '../../components/card'
import TextInput from '../../components/text-input'
import TextArea from '../../components/textarea'
import Button from '../../components/button'
import Checkbox from '../../components/checkbox'
import IconButton from '../../components/icon-button'

class UserRegistration extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			checked: false
		}
	}

	handleClick() {
		if (this.state.checked) {
			// This is just a placeholder
		}
	}

	render() {
		return (
			<div className="pa4">
				<h1 className="ma0 pa0">
					<FormattedMessage id="userRegistration" />
				</h1>
				<Card>
					<div className='pa3 bg-black-10'>
						<h3>Email/Password Style</h3>
						<IconButton icon="http://icons.iconarchive.com/icons/yootheme/social-bookmark/48/social-facebook-box-blue-icon.png" alt="Facebook">Continue with Facebook</IconButton>
						<TextInput type="text" placeholder="EMAIL" className='ma3' name="email" />
						<TextInput type="password" placeholder="PASSWORD" className='ma3' name="password" />
					</div>
					<div className='pa3'>
						<h3>First Name/Last Name Style</h3>
						<TextInput type="text" placeholder="FIRST NAME" className='b--moon-gray ma3' name="first_name" />
						<TextInput type="text" placeholder="LAST NAME" className='b--moon-gray ma3' name="last_name" /><br />
					</div>

                    Why do you want to be on the volunteering team for YouVersion?<br />
					<TextArea />
					<Button to='/' buttontype='solid'>Submit</Button>
				</Card>
				<Card heightClass='mv4'>
					<div className='flex flex-column items-end-l items-center'>
						<TextArea
							rows={ 10 }
							disabled={true}
							value="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							It has survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
							sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
							like Aldus PageMaker including versions of Lorem Ipsum."
						/>
						<Checkbox
							labelName='I agree to those terms and conditions'
							id='agree-checkbox'
							onChange={ (event) => { this.setState({ checked: event.target.checked }) } }
							checked={this.state.checked}
						/>
						<Button onClick={() => { this.handleClick() }} buttontype='solid' disabled={!this.state.checked}>
                            Continue
						</Button>
					</div>
				</Card>
			</div>
		)
	}
}

export default UserRegistration
