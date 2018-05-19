import React from 'react'
import PropTypes from 'prop-types'
import { notifier } from '../toast-handler'
import CloseIcon from '../../assets/close-icon.svg'

const styles = {
	show: {
		transform: 'translateY(100%)',
		msTransform: 'translateY(100%)',
		WebkitTransform: 'translateY(100%)',
		OTransform: 'translateY(100%)',
		MozTransform: 'translateY(100%)'
	},
	hide: {
		transform: 'translateY(-100%)',
		msTransform: 'translateY(-100%)',
		WebkitTransform: 'translateY(-100%)',
		OTransform: 'translateY(-100%)',
		MozTransform: 'translateY(-100%)'
	},
	container: {
		transition: 'all .5ms ease',
		msTransition: 'all .5ms ease',
		WebkitTransition: 'all .5ms ease',
		OTransition: 'all .5ms ease',
		MozTransition: 'all .5ms ease',
		transform: 'translateY(0px)',
	}
}

class Toast extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: true,
			style: styles.container
		}

		this.handleClose = this.handleClose.bind(this)
	}

	componentDidMount() {
		this.animate()
	}

	animate() {
		setTimeout(() => {
			this.updateStyle(styles.show)
		}, 100)

		setTimeout(() => {
			this.updateStyle(styles.hide)
		}, this.props.delay)
	}

	updateStyle(stateStyle) {
		this.setState({ style: Object.assign({}, styles.container, stateStyle) })
	}

	handleClose() {
		this.setState({ isOpen: false })
		notifier.clear()
	}

	render() {
		const toast = () => {
			const {
				text
			} = this.props

			// const closeMessage = intl.formatMessage({ id: 'close' })

			return (
				<div style={this.state.style} className="fixed top-0 left-0 w-100 h3 bg-white shadow-2 ph2 flex justify-center items-center f3">
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

		return this.state.isOpen ? toast() : null
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
