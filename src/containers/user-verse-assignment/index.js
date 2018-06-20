import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import SecondaryHeading from './../../components/typography/secondary-heading'
import MinorHeading from './../../components/typography/minor-heading'
import BodyText from './../../components/typography/body-text'
import ImageDrop from './../../components/image-drop'
import Card from './../../components/card'

const UserVerseAssignment = (props) => {
	return (
		<div className="pv2 ph4">
			<SecondaryHeading>
				<FormattedMessage id="userVerseAssignment" />
			</SecondaryHeading>
			<Card>
				<ImageDrop
					minWidth={960}
					maxWidth={4000}
					minHeight={960}
					maxHeight={4000}
					onDrop={(rejected, accepted) => { return (rejected, accepted) }}
				>
					<MinorHeading>2 Corinthians 3:17</MinorHeading>
					<BodyText>
						Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom.
					</BodyText>
				</ImageDrop>
			</Card>
		</div>
	)
}

export default UserVerseAssignment
