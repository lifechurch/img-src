import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import Card from '../card'
import CloseIcon from '../../assets/close-icon.svg'


class Modal extends Component {
	static getDerivedStateFromProps(nextProps) {
		if (typeof nextProps === 'object' && 'isOpen' in nextProps) {
			return {
				isOpen: nextProps.isOpen
			}
		} else {
			return null
		}
	}

	constructor(props) {
		super(props)
		this.state = {
			isOpen: props.isOpen
		}
	}

	render() {
		const modal = () => {
			const {
				children,
				overlayColor,
				heightClass,
				widthClass,
				intl
			} = this.props

			const closeMessage = intl.formatMessage({ id: 'close' })

			return (
				<div className="fixed w-100 h-100 left-0 top-0 flex items-center justify-center" style={{ backgroundColor: overlayColor }}>
					<div className={`${heightClass} ${widthClass}`}>
						<Card heightClass="h-100">
							<button
								className="absolute top-1 right-1 dim outline-0 pointer bn bg-transparent"
								title={closeMessage}
								onClick={() => { this.setState({ isOpen: false }) }}
       >
								<img src={CloseIcon} alt={closeMessage} />
							</button>
							{children}
						</Card>
					</div>
				</div>
			)
		}

		return this.state.isOpen ? modal() : null
	}
}

Modal.propTypes = {
	isOpen: PropTypes.bool,
	children: PropTypes.node,
	overlayColor: PropTypes.string,
	intl: intlShape.isRequired,
	heightClass: PropTypes.string,
	widthClass: PropTypes.string
}

Modal.defaultProps = {
	isOpen: false,
	children: null,
	overlayColor: 'rgba(150,150,150,0.5)',
	heightClass: 'h-75',
	widthClass: 'w-50'
}

export default injectIntl(Modal)
