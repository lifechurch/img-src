import React from 'react'
import shortid from 'shortid'
import { FormattedMessage } from 'react-intl'
import PrimaryHeading from './../../components/typography/primary-heading'
import MinorHeading from './../../components/typography/minor-heading'
import BodyText from './../../components/typography/body-text'
import ImageDrop from './../../components/image-drop'
import Card from './../../components/card'

const tempData = {
	verses: [
		{
			name: '2 Corinthians 3:17',
			text: 'Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom.'
		},
		{
			name: '2 Corinthians 3:18',
			text: 'And we all, who with unveiled faces contemplate the Lord\'s glory, are being transformed into his image with ever-increasing glory, which comes from the Lord, who is the Spirit.'
		}
	]
}

class UserVerseAssignment extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}

		this.onResize = this.onResize.bind(this)
	}

	componentDidMount() {
		window.addEventListener('resize', this.onResize)
		this.onResize()
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

	render() {
		const { width } = this.state

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
							<select className="">
								<option value="en">English</option>
								<option value="de">German</option>
								<option value="es">Spanish</option>
							</select>
							<select className="mh4">
								<option value="nlt">NLT</option>
								<option value="niv">NIV</option>
								<option value="kjv">KJV</option>
							</select>
						</div>

						<span className="fr green b">
							<FormattedMessage id="pendingImages" />: {tempData.verses.length}
						</span>
					</div>
				</div>

				<div className="flex-auto pa4 bg-light-gray">
					<div className="b">
						<BodyText>
							<FormattedMessage id="verseGuidelines" />
						</BodyText>
					</div>
					{tempData.verses.map(verse => {
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
											<BodyText>{verse.name}</BodyText>
										</div>
										<BodyText>{verse.text}</BodyText>
									</ImageDrop>
								</Card>
							</div>
						)
					})}
				</div>

			</div>
		)
	}
}

export default UserVerseAssignment
