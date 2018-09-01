import React from 'react'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import Card from '../../components/card'
import TextInput from '../../components/text-input'
import TextArea from '../../components/textarea'
import Button from '../../components/button'
import Checkbox from '../../components/checkbox'
import PrimaryHeading from '../../components/typography/primary-heading'
import BodyText from '../../components/typography/body-text'

class UserRegistration extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			submitted: false,
			tcAccepted: false
		}

		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e) {
		this.setState({ submitted: true })

		e.preventDefault()
	}

	render() {
		const {
			intl
		} = this.props

		const termsConditions = intl.formatMessage({ id: 'termsConditions' })
		const firstName = intl.formatMessage({ id: 'firstName' }).toUpperCase()
		const lastName = intl.formatMessage({ id: 'lastName' }).toUpperCase()

		return (
			<div>
				<div className="w-100 tc mv4">
					<PrimaryHeading>
						<FormattedMessage className="mw1" id="welcomeHeader" />
					</PrimaryHeading>
				</div>

				<div className="flex flex-column items-center pa3 pa4-ns w-100 h-100 bg-light-gray tl">
					<div className="f3 measure-wide w-100">
						<Card>
							<form onSubmit={this.handleSubmit} className="f5">
								<div className="flex flex-column flex-row-ns mb4">
									<div className="flex-auto mb2 mb0-ns mr3-ns">
										<TextInput required border disabled={this.state.submitted} name="firstname" type="text" placeholder={firstName} />
									</div>
									<div className='flex-auto ml3-ns'>
										<TextInput required border disabled={this.state.submitted} name="lastname" type="text" placeholder={lastName} />
									</div>
								</div>

								<div className="mb3">
									<BodyText>
										<FormattedMessage id="userRegistrationWhyJoin" />
									</BodyText>
								</div>

								<div className="h4 black">
									<TextArea required disabled={this.state.submitted} className="h4" />
								</div>

								{
									!this.state.submitted ? (
										<div className="flex justify-center justify-end-ns mt3">
											<Button isSubmit={true}>
												<FormattedMessage id="submit" />
											</Button>
										</div>
									) : null
								}
							</form>
						</Card>
					</div>

					<div className="f3 measure-wide w-100 mt4 mb6">
						<Card>
							<div className="h4 f5 black">
								<TextArea disabled value={termsConditions} />
							</div>

							<div className="flex justify-center justify-end-ns mt3 f5">
								<Checkbox
									onChange={() => { this.setState({ tcAccepted: !this.state.tcAccepted }) }}
									checked={this.state.tcAccepted}
									formattedMsgId='agreeTermsConditions'
									id='tcCheck'
								/>
							</div>

							<div className="flex justify-center justify-end-ns mt3 f5">
								<Button isSubmit={true} disabled={!this.state.tcAccepted}>
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
