import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import CloseIcon from '../../assets/close-icon.svg'
import HamburgerIcon from '../../assets/hamburger.svg'
import './index.css'

const MOBILE_WIDTH = 1100

class SidebarNav extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			sidebarHidden: true
		}

		this.onResize = this.onResize.bind(this)
		this.handleToggle = this.handleToggle.bind(this)
		this.handleOpen = this.handleOpen.bind(this)
		this.handleClose = this.handleClose.bind(this)
	}

	componentDidMount() {
		window.addEventListener('resize', this.onResize)
		this.onResize()
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

	handleClose() {
		document.removeEventListener('click', this.handleClose)
		this.setState({ sidebarHidden: true })
	}

	handleOpen() {
		this.setState({ sidebarHidden: false })
		document.addEventListener('click', this.handleClose)
	}

	handleToggle() {
		if (this.state.sidebarHidden) {
			this.handleOpen()
		} else {
			this.handleClose()
		}
	}

	render() {
		const {
			intl
		} = this.props

		const hiddenClasses = this.state.sidebarHidden && this.state.width < MOBILE_WIDTH ? 'hidden' : ''
		const mobileClasses = this.state.width < MOBILE_WIDTH ? 'fixed' : ''

		const sidebarClasses = `sidebar w-100 min-h-100 mw5 z-999 fl br br bg-white b--moon-gray ${hiddenClasses} ${mobileClasses}`

		const closeMessage = intl.formatMessage({ id: 'close' })

		return (
			<div className="cf min-h-100 relative flex">
				<div className={sidebarClasses}>
					{this.props.menu}
					{this.state.width < MOBILE_WIDTH &&
						<button
							className="absolute top-2 right-1 dim outline-0 pointer bn bg-transparent"
							title={closeMessage}
							onClick={this.handleClose}
						>
							<img src={CloseIcon} alt={closeMessage} />
						</button>
					}
				</div>
				{this.state.width < MOBILE_WIDTH &&
					<div
						className="absolute right-1 top-2"
						onClick={this.handleToggle}
						onKeyDown={this.handleToggle}
						role="button"
						tabIndex={0}
					>
						<img src={HamburgerIcon} alt="" />
					</div>
				}
				<div className="fl flex-auto">
					{this.props.children}
				</div>
			</div>
		)
	}
}

SidebarNav.propTypes = {
	menu: PropTypes.node,
	children: PropTypes.node,
	intl: intlShape.isRequired,
}

SidebarNav.defaultProps = {
	menu: null,
	children: null
}

export default injectIntl(SidebarNav)
