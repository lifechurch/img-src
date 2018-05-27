import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './index.css'

class ToggleBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}

		this.onResize = this.onResize.bind(this)
	}

	componentWillMount() {
		this.setState({ width: document.documentElement.clientWidth })
	}

	componentDidMount() {
		window.addEventListener('resize', this.onResize)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onResize)
	}

	onResize() {
		window.requestAnimationFrame(() => {
			this.setState({ width: document.documentElement.clientWidth })
		})
	}

	render() {
		const {
			children
		} = this.props

		const { width } = this.state
		console.log(width)
		if (width > 1100) {
			return (
				<div className="togglebar">
					{children.map((link) => {
						const {
							to,
							...rest
						} = link.props

						return (
							<NavLink
								key={to}
								to={to}
								className="mid-gray no-underline ph4 pv2 b--mid-gray ba f4"
								activeClassName="bg-mid-gray white"
								{...rest}
							>
								{link.props.children}
							</NavLink>
						)
					})}
				</div>
			)
		} else {
			return (
				<select>
					{children.map((link) => {
						return <option>{link.props.children}</option>
					})}
				</select>
			)
		}
	}
}

ToggleBar.propTypes = {
	children: PropTypes.node.isRequired
}

export default ToggleBar
