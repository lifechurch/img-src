import React from 'react'
import PropTypes from 'prop-types'
import { notifier } from '../toast-handler'
import CloseIcon from '../../assets/close-icon.svg'

const ANIMATION_DURATION = 300

const styles = {
	show: {
		transform: 'translateY(0%)',
		msTransform: 'translateY(0%)',
		WebkitTransform: 'translateY(0%)',
		OTransform: 'translateY(0%)',
		MozTransform: 'translateY(0%)'
	},
	hide: {
		transform: 'translateY(-100%)',
		msTransform: 'translateY(-100%)',
		WebkitTransform: 'translateY(-100%)',
		OTransform: 'translateY(-100%)',
		MozTransform: 'translateY(-100%)'
	},
	container: {
		transition: 'all 300ms ease',
		msTransition: 'all 300ms ease',
		WebkitTransition: 'all 300ms ease',
		OTransition: 'all 300ms ease',
		MozTransition: 'all 300ms ease',
		transform: 'translateY(0px)'
	}
}

class Toast extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			style: { ...styles.container, ...styles.hide }
		}

		this.handleClose = this.handleClose.bind(this)
	}

	componentDidMount() {
		this.animate()
	}

	updateStyle(stateStyle) {
		this.setState({ style: { ...styles.container, ...stateStyle } })
	}

	animate() {
		setTimeout(() => {
			this.updateStyle(styles.show)
		}, 100)

		setTimeout(() => {
			this.updateStyle(styles.hide)
		}, this.props.delay)
	}

	handleClose() {
		this.updateStyle(styles.hide)

		setTimeout(() => {
			notifier.clear()
		}, ANIMATION_DURATION)
	}

	render() {
		const {
			text
		} = this.props

		// const closeMessage = intl.formatMessage({ id: 'close' })

		return (
			<div
				style={this.state.style}
				tabIndex={0}
				onKeyDown={this.handleClose}
				role="button"
				onClick={this.handleClose}
				className="fixed top-0 left-0 w-100 bg-white shadow-2 ph4 pv3 flex justify-center items-center f3 pointer outline-0"
			>
				{text}

				<button
					className="absolute right-1 dim outline-0 pointer bn bg-transparent"
					onClick={this.handleClose}
				>
					<img src={CloseIcon} alt='' />
				</button>
			</div>
		)
	}
}

Toast.propTypes = {
	delay: PropTypes.number,
	autoHide: PropTypes.bool,
	text: PropTypes.string.isRequired
}

Toast.defaultProps = {
	delay: 3000,
	autoHide: true
}

export default Toast
