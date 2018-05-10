import React from 'react'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import Card from '../../components/card'
import TextInput from '../../components/text-input'
import TextArea from '../../components/textarea'
import Button from '../../components/button'
import PrimaryHeading from '../../components/typography/primary-heading'
import BodyText from '../../components/typography/body-text'

function UserRegistration({ intl }) {
	const termsConditions = intl.formatMessage({ id: 'termsConditions' })

	return (
		<div className="h-100">
			<div className="w-100 tc">
				<PrimaryHeading>
					<FormattedMessage id="welcomeHeader" />
				</PrimaryHeading>
			</div>

			<div className="flex flex-column items-center pa4 w-100 h-100 bg-light-gray tl">
				<div className="mw8 w-100">
					<Card>
						<div className="flex flex-column flex-row-ns">
							<TextInput name="firstname" type="text" placeholder="FIRST NAME" className='b--moon-gray flex-auto mb2 mb0-ns mr3-ns' />
							<TextInput name="lastname" type="text" placeholder="LAST NAME" className='b--moon-gray flex-auto ml3-ns' />
						</div>

						<BodyText>
							<FormattedMessage id="userRegistrationWhyJoin" />
						</BodyText>
						<TextArea />

						<div className="flex justify-center justify-end-ns">
							<Button className="mt2">Submit</Button>
						</div>
					</Card>
				</div>

				<div className="mw8 w-100 mt4 mb5">
					<Card>
						<TextArea disabled value={termsConditions} />
						<div className="flex justify-center justify-end-ns">
							<Button className="mt2">Continue</Button>
						</div>
					</Card>
				</div>
			</div>
		</div>
	)
}

UserRegistration.propTypes = {
	intl: intlShape.isRequired
}

export default injectIntl(UserRegistration)
