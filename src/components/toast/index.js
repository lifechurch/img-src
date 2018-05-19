import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import CloseIcon from '../../assets/close-icon.svg'

class Toast extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: true
		}
	}

	render() {
		const toast = () => {
			const {
				intl,
				text
			} = this.props

			// const closeMessage = intl.formatMessage({ id: 'close' })

			return (
				<div className="fixed top-0 left-0 w-100 h3 bg-white shadow-2 ph2 flex justify-center items-center f3">
					{text}

					<button
						className="absolute right-1 dim outline-0 pointer bn bg-transparent"

						onClick={() => { this.setState({ isOpen: false }) }}
					>
						<img src={CloseIcon}  />
					</button>
				</div>
			)
		}

		return this.state.isOpen ? toast() : null
	}
}

Toast.propTypes = {
	intl: intlShape.isRequired,
	delay: PropTypes.number,
	autoHide: PropTypes.bool,
	text: PropTypes.string.isRequired
}

Toast.defaultProps = {
	delay: 3000,
	autoHide: true
}

export default Toast
