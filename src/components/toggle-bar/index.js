import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import shortid from 'shortid'
import './index.css'
import UpArrow from '../../assets/up-arrow.svg'
import DownArrow from '../../assets/down-arrow.svg'

const getCurrent = (links) => {
	const url = window.location.pathname
	let match = null
	for (let i = 0; i < links.length; i++) {
		if (links[i].address === url) {
			match = links[i].text
			break
		}
	}

	return match || 'Select'
}

class ToggleBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false,
			current: getCurrent(props.links)
		}

		this.onResize = this.onResize.bind(this)
		this.handleDropdown = this.handleDropdown.bind(this)
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
			this.setState({ width: document.documentElement.clientWidth })
		})
	}

	handleChange(text) {
		this.setState({	current: text, isOpen: false })
	}

	handleDropdown() {
		this.setState({ isOpen: !this.state.isOpen })
	}

	render() {
		const { links } = this.props
		const { width, isOpen, current } = this.state

		if (width > 1100) {
			// Normal toggle display
			return (
				<div className="togglebar">
					{links.map((link) => {
						const { text, address, total } = link

						return (
							<NavLink
								key={shortid.generate()}
								to={address}
								onClick={() => { this.handleChange(text) }}
								className="mid-gray no-underline ph4 pv2 b--mid-gray ba f4"
								activeClassName="bg-mid-gray white"
							>
								{text} <span className="f7 fw1">({ total })</span>
							</NavLink>
						)
					})}
				</div>
			)
		} else {
			// Dropdown
			return (
				<div className="w-100 mw6 relative">
					<div
						className="relative w-100 mw6 ph3 pv1 f4 br-pill tl mid-gray ba pointer outline-0"
						onClick={this.handleDropdown}
						onKeyDown={this.handleDropdown}
						role="menu"
						tabIndex={0}
					>
						{current}
						<img src={isOpen ? UpArrow : DownArrow} alt="" className="absolute right-1" />
					</div>

					{isOpen &&
						<div className="absolute center left-0 right-0 w-90 f4 flex flex-column bg-white">
							{links.map((link) => {
								const { text, address, total } = link

								return (
									<NavLink
										key={shortid.generate()}
										to={address}
										onClick={() => { this.handleChange(text) }}
										className="w-100 ph3 pv1 mid-gray no-underline bb"
										activeClassName="bg-mid-gray white bb"
									>
										{text} <span className="f7 fw1">({ total })</span>
									</NavLink>
								)
							})}
						</div>
					}
				</div>
			)
		}
	}
}

ToggleBar.propTypes = {
	links: PropTypes.array.isRequired,
}

export default ToggleBar
