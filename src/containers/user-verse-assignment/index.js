/* eslint-disable linebreak-style */
import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import shortid from 'shortid'
import PrimaryHeading from './../../components/typography/primary-heading'
import Verses from '../../tupos/models/verses'
import Language from '../../tupos/models/language'
import Version from '../../tupos/models/version'
import MinorHeading from './../../components/typography/minor-heading'
import BodyText from './../../components/typography/body-text'
import ImageDrop from './../../components/image-drop'
import ComboBox from './../../components/combo-box'
import Card from './../../components/card'
import { notifier } from './../../components/toast-handler'

class UserVerseAssignment extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.notify = notifier.notify()
		this.onResize = this.onResize.bind(this)
		this.loadData = this.loadData.bind(this)
	}

	componentDidMount() {
		window.addEventListener('resize', this.onResize)
		this.onResize()
		this.loadData()
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onResize)
	}

	onResize() {
		window.requestAnimationFrame(() => {
			const width = document.documentElement.clientWidth
			this.setState({ width })
		})
	}

	async loadData() {
		const verses = await Verses.getMany()
		const languages = await Language.getMany().then((langs) => {
		// format in way readable by combo-box
			return langs.map((l) => {
			// value: This is what is displayed when selected, not what is passed to a API or method.
				return { name: l._name, value: l._name }
			})
		})
		const versions = await Version.getMany().then((vers) => {
		// format in way readable by combo-box
			return vers.map((v) => {
				return { name: v._name, value: v._abbreviation }
			})
		})

		this.setState({ verses, languages, versions })
	}

	render() {
		const {
			width,
			verses,
			languages,
			versions
		} = this.state
		// const { intl } = this.props
		// const languageString = intl.formatMessage({)
		// const versionString = intl.formatMessage({ id: 'version' })

		return (
			<div className="flex flex-column w-100 min-h-100">
				<div className={width > 700 ? 'pt4 ph4' : 'pa4'}>
					<PrimaryHeading>
						<FormattedMessage id={width > 700 ? 'versesNeedImages' : 'verses'} />
					</PrimaryHeading>
					{width > 700 &&
						<div className="mt2">
							<MinorHeading>
								<FormattedMessage id="chooseAVerse" />
							</MinorHeading>
						</div>
					}

					<div className="w-100 flex items-center justify-between flex-wrap">
						<div className={`flex ${width > 700 ? 'mv4' : 'mv3'}`}>
							{languages &&
								<ComboBox
									name='Languages'
									options={languages}
									onSelect={(val) => { return (val) }}
								/>
							}
							{versions &&
								<ComboBox
									name='Version'
									options={versions}
									onSelect={(val) => { return (val) }}
								/>
							}
						</div>

						<span className="fr green b">
							<FormattedMessage id="pendingImages" />: {verses && verses.length}
						</span>
					</div>
				</div>

				<div className="flex-auto pa4 bg-light-gray">
					<div className="b">
						<BodyText>
							<FormattedMessage id="verseGuidelines" />
						</BodyText>
					</div>
					{ verses && verses.map((verse) => {
						return (
							<div className={width > 700 ? 'mv4' : 'mv2'} key={shortid.generate()}>
								<Card>
									<ImageDrop
										minWidth={960}
										maxWidth={4000}
										minHeight={960}
										maxHeight={4000}
										onDrop={(rejected, accepted) => { return (rejected, accepted) }}
									>
										<div className="b mb2">
											<BodyText>{verse.humanReference}</BodyText>
										</div>
										<BodyText>{verse.text}</BodyText>
									</ImageDrop>
								</Card>
							</div>)
					})}
				</div>
			</div>
		)
	}
}

export default injectIntl(UserVerseAssignment)
