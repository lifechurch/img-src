import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import shortid from 'shortid'
import { notifier } from '../../components/toast-handler'
import PrimaryHeading from './../../components/typography/primary-heading'
import Verses from '../../tupos/models/verses'
import Language from '../../tupos/models/language'
import Version from '../../tupos/models/version'
import Image from '../../tupos/models/image'
import ImageConfig from '../../tupos/models/image-config'
import MinorHeading from './../../components/typography/minor-heading'
import BodyText from './../../components/typography/body-text'
import ImageDrop from './../../components/image-drop'
import ComboBox from './../../components/combo-box'
import Card from './../../components/card'

class UserVerseAssignment extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
		this.notify = notifier.notify()
		this.onResize = this.onResize.bind(this)
		this.loadData = this.loadData.bind(this)
		this.handleDrop = this.handleDrop.bind(this)
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

  async handleDrop(accepted, rejected) {
    if (!Array.isArray(accepted) || accepted.length === 0) return

    /* NOTE: Only accepts single file uploads for now */

    const { intl } = this.props
    const imageConfig = await ImageConfig.get()
    const formData = new FormData()
    const reader = new FileReader()
    const fileToUpload = accepted[0]

    formData.append('AWSAccessKeyId', imageConfig.awsResponse.fields.AWSAccessKeyId)
    formData.append('key', imageConfig.awsResponse.fields.key)
    formData.append('policy', imageConfig.awsResponse.fields.policy)
    formData.append('acl', imageConfig.awsResponse.fields.acl)
    // formData.append('x-amz-storage-class', response_init.params['x-amz-storage-class'])
    formData.append('signature', imageConfig.awsResponse.fields.signature)
    formData.append('file', fileToUpload)

    reader.onload = (loadEvent) => {
      const image = new Image()
      const handleLoad = () => {
        const xhr = new XMLHttpRequest()
        xhr.open('POST', imageConfig.awsResponse.url)
        xhr.send(formData)

        xhr.onload = () => {
          if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
              this.notify(intl.formatMessage({ id: 'imageUploadComplete' }))
              // TO-DO: notify API that image upload is Complete
              // SEE: https://in.thewardro.be/snippets/58#images-info-and-uploads
            } else {
              this.notify(intl.formatMessage({ id: 'imageUploadError' }), 0, false)
            }
          }
        }
        xhr.onerror = (e) => {
          this.notify(intl.formatMessage({ id: 'imageUploadError' }), 0, false)
        }
      }

      image.src = loadEvent.target.result
      if (image.width === 0) {
        image.onload = handleLoad
      } else {
        handleLoad()
      }
    }
    reader.readAsDataURL(fileToUpload)
  }

	async loadData() {
		const [
			verses,
			images,
			langs,
			vers,
		] = await Promise.all([
			Verses.getMany(),
			Image.getMany('pending'),
			Language.getMany(),
			Version.getMany()
		])

		const languages = langs.map((l) => {
			return { name: l.name, value: l.languageTag }
		})

		const versions = vers.map((v) => {
			return { name: v.name, value: v.abbreviation }
		})

		this.setState({ verses, languages, versions, images })
	}

	render() {
		const {
			width,
			verses,
			languages,
			versions,
			images
		} = this.state

		const {
			intl
		} = this.props

		const languageString = intl.formatMessage({ id: 'language' })
		const versionString = intl.formatMessage({ id: 'version' })

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
									name={languageString}
									options={languages}
									onSelect={(val) => { return (val) }}
								/>
							}
							{versions &&
								<ComboBox
									name={versionString}
									options={versions}
									onSelect={(val) => { return (val) }}
								/>
							}
						</div>

						{ images &&
							<span className="fr green b">
								<FormattedMessage id="pendingImages" />: {images.length}
							</span>
						}
					</div>
				</div>

				<div className="flex-auto pa4 bg-light-gray">
					<div className="b">
						<BodyText>
							<FormattedMessage id="verseGuidelines" />
						</BodyText>
					</div>
					{ verses && verses.map((verse) => {
						return <div className={width > 700 ? 'mv4' : 'mv2'} key={shortid.generate()}>
							<Card>
								<ImageDrop
									minWidth={1080}
									maxWidth={1920}
									minHeight={1080}
									maxHeight={1920}
									onDrop={this.handleDrop}
								>
									<div className="b mb2">
										<BodyText>{verse.humanReference}</BodyText>
									</div>
									<BodyText>{verse.text}</BodyText>
								</ImageDrop>
							</Card>
						</div>
					})}
				</div>
			</div>
		)
	}
}

export default injectIntl(UserVerseAssignment)
