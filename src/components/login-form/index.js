import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import withYVAuth from '@youversion/tupos-auth/dist/withYVAuth'
import Button from '../../components/button'
import TextInput from '../../components/text-input'
import './index.css'

class LoginForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			errors: { username: '', password: '' }
		}
	}
	messages = {
		clearMsg: '',
		enterEmail: 'Please enter an email address.',
		fixEmail: 'Please enter correctly enter the email address.',
		enterPassword: 'Please enter a password.',
		fixLogin: 'Your username or password was incorrect.'
	}

	validateForm = () => {
		const { username, password } = this.state
		let formIsValid = true
		const errors = {
			username: this.messages.clearMsg,
			password: this.messages.clearMsg,
			login: this.messages.clearMsg
		}

		if (!username) {
			formIsValid = false
			errors.username = this.messages.enterEmail
		}
		if (typeof username !== 'undefined') {
			const pattern = new RegExp(/^(([\w-\s]+)|([\w-]+(?:\.[\w-]+)*)|([\w-\s]+)([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
			if (!pattern.test(username)) {
				formIsValid = false
				errors.username = this.messages.fixEmail
			}
		}

		if (!password) {
			formIsValid = false
			errors.password = this.messages.enterPassword
		}

		this.setState({ errors })
		return formIsValid
	}

	handleKeyPress = event => {
		if (event.key === 'Enter') {
			this.handleSubmit(event)
		}
	}

	handleChange = event => {
		const { name, value } = event.target
		this.setState({
			[name]: value
		})
	}

	handleSubmit = () => {
		if (this.validateForm()) {
			const { login } = this.props
			const { username, password } = this.state
			if (login({ username, password })) {
				const { errors } = this.state
				errors.username = this.messages.clearMsg
				errors.password = this.messages.clearMsg
				errors.login = this.messages.fixLogin
				this.setState({ errors })
			}
		}
	}

	render() {
		const {
			intl,
		} = this.props

		const email = intl.formatMessage({ id: 'email' }).toUpperCase()
		const password = intl.formatMessage({ id: 'password' }).toUpperCase()

		return (
			<form className="w-100" onSubmit={ this.handleSubmit } >
				<div className="w-100 flex items-center flex-column">
					<div className="w-100 mw6 mb3">
						<div className="dark-red pa2 error-message">{this.state.errors.login}</div>
						<TextInput required name="username" placeholder={email} type="text" onChange={this.handleChange} onKeyPress={ this.handleKeyPress } />
						<div className="dark-red pa2 error-message">{this.state.errors.username}</div>
					</div>
					<div className="w-100 mw6 mb3">
						<TextInput required name="password" placeholder={password} type="password" onChange={this.handleChange} onKeyPress={ this.handleKeyPress } />
						<div className="dark-red pa2 error-message">{this.state.errors.password}</div>
					</div>
					<Button buttontype="outline-only" onClick={this.handleSubmit} onKeyPress={ this.handleKeyPress }>
						<FormattedMessage id="signIn" />
					</Button>
				</div>
			</form>
		)
	}
}

LoginForm.propTypes = {
	intl: intlShape.isRequired,
	login: PropTypes.func
}

LoginForm.defaultProps = {
	login: null
}

export default withYVAuth(injectIntl(LoginForm))