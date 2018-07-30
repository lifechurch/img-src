import React from 'react'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import YVLogo from '../../assets/youversion.png'
import YVBible from '../../assets/YV_bible.png'
import FacebookLogo from '../../assets/facebook-app-logo.svg'
import GoogleLogo from '../../assets/google-icon.svg'
import Button from '../../components/button'
import IconButton from '../../components/icon-button'
import TextInput from '../../components/text-input'
import PrimaryHeading from '../../components/typography/primary-heading'
import SecondaryHeading from '../../components/typography/secondary-heading'
import MinorHeading from '../../components/typography/minor-heading'
import BodyText from '../../components/typography/body-text'
import images from './assets/images'
import './index.css'

function SplashPage(props) {
	const {
		intl
	} = props

	const email = intl.formatMessage({ id: 'email' }).toUpperCase()
	const password = intl.formatMessage({ id: 'password' }).toUpperCase()

	return (
		<div className="h-100">
			<div className="w-100 ph3 mt2 mb2 flex items-center justify-between">
				<img src={YVLogo} alt="YouVersion" width={150} />
				<div className="fr">
					<Button to="/sign-in" buttontype="outline-only">
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

					<div className="splashSubText absolute z-1">
						<MinorHeading>
							<FormattedMessage id="joinTheCommunity" />
						</MinorHeading>
					</div>
				</div>
			</div>

			<div className="flex flex-column w-100 items-center pa4 bg-light-gray">
				<img src={YVBible} alt="" className="w3" />

				<div className="tc">
					<SecondaryHeading>
						<FormattedMessage id="toGetStarted" />
					</SecondaryHeading>
				</div>

				<div className="w-100 mw6 mb2">
					<IconButton to="/" icon={FacebookLogo} alt="Facebook"><FormattedMessage id="continueFacebook" /></IconButton>
				</div>
				<div className="w-100 mw6 mb2">
					<IconButton to="/" icon={GoogleLogo} alt="Google"><FormattedMessage id="continueGoogle" /></IconButton>
				</div>

				<div className="w5 bg-light-silver self-center mv4" style={{ height: 1 }} />

				<form className="w-100">
					<div className="w-100 flex items-center flex-column">
						<div className="w-100 mw6 mb3">
							<TextInput required name="email" placeholder={email} type="text" />
						</div>
						<div className="w-100 mw6 mb3">
							<TextInput required name="password" placeholder={password} type="password" />
						</div>
						<Button submit buttontype="outline-only">
							<FormattedMessage id="signIn" />
						</Button>
					</div>
				</form>

				<div className="mt2 tc">
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

SplashPage.propTypes = {
	intl: intlShape.isRequired
}

export default injectIntl(SplashPage)
