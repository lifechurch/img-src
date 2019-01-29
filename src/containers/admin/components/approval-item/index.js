import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import User from '../user'
import VerseItem from '../verse-item'
import './index.css'

class ApprovalItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	handleOnImageAction = (action, imageInfo) => {
		console.log(action, imageInfo)
		this.props.onImageAction(action, imageInfo)
	}

	handleOnUserAction = (action, userInfo) => {
		console.log(action, userInfo)
		this.props.onUserAction(action, userInfo)
	}

	handleClick = () => {
		console.log(this.props)
	}

	render() {
		const { image } = this.props
		return (
			<div className="w-100 pt4 pb4">
				<User onUserAction={this.handleOnUserAction} />
				<VerseItem onImageAction={this.handleOnUserAction} {...image} />
			</div>
		)
	}
}

ApprovalItem.propTypes = {
	// to: PropTypes.node,
	// disabled: PropTypes.bool,
	// icon: PropTypes.node.isRequired,
	// alt: PropTypes.string,
	onUserAction: PropTypes.func,
	onImageAction: PropTypes.func,
}

ApprovalItem.defaultProps = {
	onUserAction: () => { },
	onImageAction: () => { }
}

export default injectIntl(ApprovalItem)