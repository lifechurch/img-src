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
				children
			} = this.props

			const closeMessage = intl.formatMessage({ id: 'close' })

			return (
				<div className="fixed top-0 left-0 w-100 h3 bg-white shadow-2 ph2 flex justify-center items-center f3">
					{children}

					<button
						className="absolute right-1 dim outline-0 pointer bn bg-transparent"
						title={closeMessage}
						onClick={() => { this.setState({ isOpen: false }) }}
					>
						<img src={CloseIcon} alt={closeMessage} />
					</button>
				</div>
			)
		}

		return this.state.isOpen ? toast() : null
	}
}

Toast.propTypes = {
	children: PropTypes.node,
	intl: intlShape.isRequired,
	delay: PropTypes.number,
	autoHide: PropTypes.bool
}

Toast.defaultProps = {
	children: null,
	delay: 3,
	autoHide: true
}

export default injectIntl(Toast)
