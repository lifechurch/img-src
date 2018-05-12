import React from 'react'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import Card from '../../components/card'
import TextInput from '../../components/text-input'
import TextArea from '../../components/textarea'
import Button from '../../components/button'
import PrimaryHeading from '../../components/typography/primary-heading'
import BodyText from '../../components/typography/body-text'

class UserRegistration extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			submitted: false,
			tcAccepted: false
		}
	}

	render() {
		const {
			intl
		} = this.props

		const termsConditions = intl.formatMessage({ id: 'termsConditions' })

		return (
			<div className="h-100">
				<div className="w-100 tc">
					<PrimaryHeading>
						<FormattedMessage className="mw1" id="welcomeHeader" />
					</PrimaryHeading>
				</div>

				<div className="flex flex-column items-center pa4 w-100 h-100 bg-light-gray tl">
					<div className="mw8 w-100">
						<Card>
							<div className="flex flex-column flex-row-ns">
								<TextInput disabled={this.state.submitted} name="firstname" type="text" placeholder="FIRST NAME" className='b--moon-gray flex-auto mb2 mb0-ns mr3-ns' />
								<TextInput disabled={this.state.submitted} name="lastname" type="text" placeholder="LAST NAME" className='b--moon-gray flex-auto ml3-ns' />
							</div>

							<BodyText>
								<FormattedMessage id="userRegistrationWhyJoin" />
							</BodyText>
							<TextArea disabled={this.state.submitted} className="h4" />

							{
								!this.state.submitted ? (
									<div className="flex justify-center justify-end-ns">
										<Button className="mt2" onClick={() => { this.setState({ submitted: true }) }}>
											<FormattedMessage id="submit" />
										</Button>
									</div>
								) : null
							}

						</Card>
					</div>

					<div className="mw8 w-100 mt4">
						<Card>
							<TextArea disabled value={termsConditions} className="h4 black" />

							<div className="flex justify-center justify-end-ns mv1">
								<input
									type="checkbox"
									checked={this.state.tcAccepted}
									onChange={() => { this.setState({ tcAccepted: !this.state.tcAccepted }) }}
									id="tcCheck"
									className="mr2"
								/>
								<label htmlFor="tcCheck">
									<FormattedMessage id="agreeTermsConditions" />
								</label>
							</div>

							<div className="flex justify-center justify-end-ns">
								<Button
									className="mt2"
									disabled={!this.state.tcAccepted}
								>
									<FormattedMessage id="continue" />
								</Button>
							</div>
						</Card>
					</div>
				</div>
			</div>
		)
	}
}

UserRegistration.propTypes = {
	intl: intlShape.isRequired
}

export default injectIntl(UserRegistration)
