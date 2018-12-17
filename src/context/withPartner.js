import React from 'react'
import { PartnerConsumer } from './Partner.context'

export default function (Component) {
	function PartnerComponent(props) {
		return (
			<PartnerConsumer>
				{context => { return <Component {...props} {...context} /> }}
			</PartnerConsumer>
		)
	}
	return PartnerComponent
}