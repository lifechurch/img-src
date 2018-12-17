import React from 'react'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { Redirect } from 'react-router-dom'
import withYVAuth from '@youversion/tupos-auth/dist/withYVAuth'
import withPartner from '../../context/withPartner'
import Card from '../../components/card'
import TextInput from '../../components/text-input'
import TextArea from '../../components/textarea'
import Button from '../../components/button'
import Checkbox from '../../components/checkbox'
import PrimaryHeading from '../../components/typography/primary-heading'
import BodyText from '../../components/typography/body-text'
import Partner from '../../tupos/models/partner'
import { notifier } from './../../components/toast-handler'

class UserRegistration extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: '',
			lastName: '',
			signUpEssay: '',
			submitted: false,
			tcAccepted: false,
		}
		this.notify = notifier.notify()

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleContinue = this.handleContinue.bind(this)
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit(e) {
		this.setState({ submitted: true })
		e.preventDefault()
	}

	async handleContinue() {
		const {
			firstName, lastName, signUpEssay, tcAccepted
		} = this.state
		const {
			partnerCheck, intl
		} = this.props
		try {
			const partner = await Partner.signUp({
				first_name: firstName,
				last_name: lastName,
				signup_essay: signUpEssay,
				agrees_to_terms: tcAccepted
			})
			if (Number.isNaN(partner.id)) {
				this.notify(intl.formatMessage({ id: 'registrationError' }), 0, false)
			}
		} catch (error) { this.notify(intl.formatMessage({ id: 'registrationError' }), 0, false) }
		partnerCheck()
	}

	render() {
		const {
			intl,
			isSignedIn,
			isPartner
		} = this.props

		const termsConditions = intl.formatMessage({ id: 'termsConditions' })
		const firstName = intl.formatMessage({ id: 'firstName' }).toUpperCase()
		const lastName = intl.formatMessage({ id: 'lastName' }).toUpperCase()

		if (isSignedIn === true && isPartner === true) return (<Redirect to="/user-verse-assignment" />)

		return (
			<div>
				<div className="w-100 tc">
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
										<TextInput required border disabled={this.state.submitted} name="firstName" type="text" placeholder={firstName} value={this.state.firstName} onChange={this.handleChange} />
									</div>
									<div className='flex-auto ml3-ns'>
										<TextInput required border disabled={this.state.submitted} name="lastName" type="text" placeholder={lastName} value={this.state.lastName} onChange={this.handleChange} />
									</div>
								</div>

								<BodyText>
									<FormattedMessage id="userRegistrationWhyJoin" />
								</BodyText>

								<div className="h4 black">
									<TextArea required disabled={this.state.submitted} className="h4" name="signUpEssay" value={this.state.signUpEssay} onChange={this.handleChange} />
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
								<Button isSubmit={true} disabled={!this.state.tcAccepted} onClick={this.handleContinue}>
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

export default withYVAuth(withPartner(injectIntl(UserRegistration)))
