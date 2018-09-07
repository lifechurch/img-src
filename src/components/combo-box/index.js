import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class ComboBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
			showList: false,
			highlighted: 0,
			selected: 0,
			options: this.props.options
		}

	}

	handleSearch(e) {
		if (e.target.value.length > 0) {
			const isMatch = (obj) => {
				return obj.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 || obj.value.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
			}

			const options = this.props.options.filter(isMatch)

			this.setState({
				options: (options.length > 0) ? options : this.props.options,
				showList: true,
				value: e.target.value
			})
		} else {
			this.setState({
				options: this.props.options,
				showList: true,
				value: e.target.value
			})
		}
	}

	handleChange(e, i) {
		this.setState({
			value: e.value,
			showList: false,
			highlighted: i,
			selected: i,
			options: this.props.options
		})

		this.props.onSelect(e.value)
	}

	handleKeyPress(e) {
		switch (e.keyCode) {
			case 40:
				e.preventDefault()
				this.setState({ showList: true })
				if (this.state.highlighted + 1 < this.state.options.length) {
					this.setState({ highlighted: this.state.highlighted + 1 })
				}
				break
			case 38:
				e.preventDefault()
				this.setState({ showList: true })
				if (this.state.highlighted + 1 > 1) {
					this.setState({ highlighted: this.state.highlighted - 1 })
				}
				break
			case 13:
				if (this.state.showList) {
					this.setState({ showList: false, selected: this.state.highlighted, value: this.state.options[this.state.highlighted].value })
					this.props.onSelect(this.state.options[this.state.highlighted].value)
				}
				break
			default:
		}
	}

	showList() {
		this.setState({ showList: !this.state.showList })
		if (this.state.showList === false) {
			this.setState({ highlighted: this.state.selected })
		}
	}

	render() {
		const {
			value,
			showList,
			options,
			highlighted,
		} = this.state

		const {
			name
		} = this.props

		const handleChange = this.handleChange.bind(this)
		const handleSearch = this.handleSearch.bind(this)
		const handleKeyPress = this.handleKeyPress.bind(this)

		return (
			<div className="mw5 w-50 dib relative z-2">
				<div className="flex h-100 bb b--green">
					<div className="w-80 black">
						<input
							placeholder={name}
							className="bn pa3 w-100 f5-ns f6" type="text"
							onChange={handleSearch}
							onKeyDown={handleKeyPress}
							value={value}
						/>
					</div>
					<button className={`clear-btn w-20 pv3 flex items-center justify-center pointer ${showList ? 'b--moon-gray bb-0 ba bg-near-white' : 'bn bg-white'}`} onClick={this.showList.bind(this)} >
						<svg className={`dropdown-arrow ${showList ? 'rotate-180' : ''}`} width="6" height="6" viewBox="189 13 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd">
							<polygon stroke="none" fill="#444444" fillRule="evenodd" transform="translate(195.000000, 17.000000) rotate(0) translate(-195.000000, -17.000000)" points="189 14 195 20 201 14" />
						</svg>
					</button>
				</div>
				<div className={ `combo-box-list w-100 absolute bg-near-white b--moon-gray ba ${showList ? 'db' : 'dn'}`}>
					{
						options.map((o, i) => {
							return (
								<button onClick={() => { handleChange(o, i) }} value={o.value} key={o.name} className={`bn db w-100 tl bg-near-white pa3 clear-btn bg-animate f5-ns f6 ${(i === highlighted) ? 'highlighted' : ''}`}>{o.name}</button>
							)
						})
					}
				</div>
			</div>
		)
	}
}

ComboBox.propTypes = {
	options: PropTypes.array,
	name: PropTypes.string,
	onSelect: PropTypes.func
}

ComboBox.defaultProps = {
	options: null,
	name: null,
	onSelect: null
}

export default ComboBox
