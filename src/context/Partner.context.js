import React, { Component } from 'react'
import withYVAuth from '@youversion/tupos-auth/dist/withYVAuth'
import PropTypes from 'prop-types'
import Partner from '../tupos/models/partner'

const DEFAULT_STATE = {
	isPartner: undefined,
	isEditor: undefined
}

export const PartnerContext = React.createContext(DEFAULT_STATE)

export const PartnerConsumer = PartnerContext.Consumer

class PartnerProvider extends Component {
	constructor(props) {
		super(props)
		this.state = DEFAULT_STATE
		this.partnerCheck = this.partnerCheck.bind(this)
	}

	componentDidUpdate(prevProps) {
		if (prevProps.isSignedIn !== this.props.isSignedIn) {
			this.partnerCheck()
		}
	}

	async partnerCheck() {
		const { isSignedIn } = this.props
		if (isSignedIn) {
			let isPartner = false
			let isEditor = false
			let partner = null
			try {
				partner = await Partner.me()
				isPartner = !Number.isNaN(partner.id)
				isEditor = !Number.isNaN(partner.permission) && partner.permission === 2
			} catch (error) { console.error(error) }
			this.setState({ isPartner, isEditor, partner })
		} else {
			this.setState({ isPartner: undefined, isEditor: undefined, partner: undefined })
		}
	}

	render() {
		const { children, isSignedIn } = this.props
		const { isPartner, isEditor, partner } = this.state
		return (
			<PartnerContext.Provider value={{
				isPartner,
				isEditor,
				isSignedIn,
				partnerCheck: this.partnerCheck,
				partner
			}}
			>
				{ children }
			</PartnerContext.Provider>
		)
	}
}

PartnerProvider.propTypes = {
	children: PropTypes.node
}

PartnerProvider.defaultProps = {
	children: null
}

export default withYVAuth(PartnerProvider)
