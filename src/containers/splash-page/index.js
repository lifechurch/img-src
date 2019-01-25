import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl } from 'react-intl'
import { Redirect } from 'react-router-dom'
import withYVAuth from '@youversion/tupos-auth/dist/withYVAuth'
import withPartner from '../../context/withPartner'
import YVLogo from '../../assets/youversion.png'
import YVBible from '../../assets/YV_bible.png'
import Button from '../../components/button'
import LoginForm from '../../components/login-form'
import PrimaryHeading from '../../components/typography/primary-heading'
import SecondaryHeading from '../../components/typography/secondary-heading'
import MinorHeading from '../../components/typography/minor-heading'
import BodyText from '../../components/typography/body-text'
import images from './assets/images'
import './index.css'

class SplashPage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const {
			isSignedIn,
			isPartner
		} = this.props

		if (isSignedIn === true && isPartner === false) return (<Redirect to="/user-registration" />)
		if (isSignedIn === true && isPartner === true) return (<Redirect to="/user-verse-assignment" />)

		return (
			<div className="h-100">
				<div className="w-100 ph3 mt2 mb2 flex items-center justify-between">
					<img src={YVLogo} alt="YouVersion" width={150} />
					<div className="fr">
						<Button href="#sign-in" buttontype="outline-only">
							<FormattedMessage id="signIn" />
						</Button>
					</div>
				</div>

				<div className="mb4-ns">
					<div className="splashBackground w-100 bg-light-gray absolute" />
					<div className="splashDisplayUnit relative">
						<img src={images[0]} alt="" className="image1" />
						<img src={images[1]} alt="" className="image2" />
						<img src={images[2]} alt="" className="image3" />
						<img src={images[3]} alt="" className="image4" />
						<img src={images[4]} alt="" className="image5" />
						<img src={images[5]} alt="" className="image6" />

						<div className="splashHeading absolute z-1">
							<PrimaryHeading>
								<FormattedMessage id="designVerseImages" />
							</PrimaryHeading>
						</div>

						<div className="splashSubtitle absolute z-1">
							<MinorHeading>
								<FormattedMessage id="joinTheCommunity" />
							</MinorHeading>
						</div>
					</div>
				</div>

				<div id="sign-in" className="flex flex-column w-100 items-center pa4 bg-light-gray">
					<img src={YVBible} alt="" className="w3" />

					<div className="tc mv4">
						<SecondaryHeading>
							<FormattedMessage id="toGetStarted" />
						</SecondaryHeading>
					</div>

					<div className="w5 bg-light-silver self-center mb4" style={{ height: 1 }} />

					<LoginForm />

					<div className="mt4 tc">
						<BodyText>
							<FormattedMessage id="dontHaveAccount" />
						</BodyText>
						<BodyText>
							<a className="color-inherit" href="https://www.bible.com/sign-up"><FormattedMessage id="createOneHere" /></a>
						</BodyText>
					</div>
				</div>
			</div>
		)
	}
}

SplashPage.propTypes = {
	isSignedIn: PropTypes.bool,
	isPartner: PropTypes.bool
}

SplashPage.defaultProps = {
	isSignedIn: false,
	isPartner: false
}

export default withYVAuth(withPartner(injectIntl(SplashPage)))