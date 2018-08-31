import React from 'react'
import { FormattedMessage } from 'react-intl'
import shortid from 'shortid'

import PrimaryHeading from './../../components/typography/primary-heading'
import Verse from '../../tupos/models/verse'
import Language from '../../tupos/models/language'
import Version from '../../tupos/models/version'
import MinorHeading from './../../components/typography/minor-heading'
import BodyText from './../../components/typography/body-text'
import ImageDrop from './../../components/image-drop'
import Card from './../../components/card'

class UserVerseAssignment extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}

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
		const verse = await Verse.getOne('EPH.3.20', 116)
		const languages = await Language.getMany()
		const versions = await Version.getMany()
		this.setState({ verse, languages, versions })
	}

	render() {
		const {
			width,
			verse,
			languages,
			versions
		} = this.state

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
						<div className={width > 700 ? 'mv4' : 'mv3'}>
							{/* TODO: Replace with <ComboBox> when ready */}
							<select className="mw4">
								{
									languages && languages.map((lang) => {
										return <option value={lang.language_tag} key={shortid.generate()}>{lang.name}</option>
									})
								}
							</select>
							<select className="mw4 mh4">
								{
									versions && versions.map((version) => {
										return <option value={version.abbreviation} key={shortid.generate()}>{version.abbreviation}</option>
									})
								}
							</select>
						</div>

						<span className="fr green b">
							<FormattedMessage id="pendingImages" />: 2
						</span>
					</div>
				</div>

				<div className="flex-auto pa4 bg-light-gray">
					<div className="b">
						<BodyText>
							<FormattedMessage id="verseGuidelines" />
						</BodyText>
					</div>
					{ verse && (
						<div className={width > 700 ? 'mv4' : 'mv2'}>
							<Card>
								<ImageDrop
									minWidth={960}
									maxWidth={4000}
									minHeight={960}
									maxHeight={4000}
									onDrop={(rejected, accepted) => { return (rejected, accepted) }}
								>
									<div className="b mb2">
										<BodyText>{verse.reference.human}</BodyText>
									</div>
									<BodyText>{verse.content}</BodyText>
								</ImageDrop>
							</Card>
						</div>
					)}
				</div>
			</div>
		)
	}
}

export default UserVerseAssignment
