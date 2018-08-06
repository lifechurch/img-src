import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'


class ComboBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
			showForm: false,
			options: this.props.options
		}

	}

	handleSearch(e) {
		if (e.target.value.length > 0) {

			const isMatch = (obj) => {
				return obj.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 || obj.value.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
			}

			const options = this.state.options.filter(isMatch)

			this.setState({
				options: (options.length > 0) ? options : this.props.options,
				showForm: true,
				value: e.target.value
			})
		} else {
			this.setState({
				options: this.props.options,
				showForm: true,
				value: e.target.value
			})
		}
	}

	handleChange(e) {
		this.setState({
			options: this.props.options,
			showForm: false,
			value: e.target.value
		})

		this.props.onSelect(e.target.value)
	}


	showDropDown() {
		this.setState({ showForm: !this.state.showForm })
	}

	render() {
		const {
			options,
			value,
			showForm
		} = this.state

		const {
			name
		} = this.props

		const handleChange = this.handleChange.bind(this)
		const handleSearch = this.handleSearch.bind(this)

		return (
			<div className="mw5 w-50 dib relative z-2">
				<div className="flex h-100 bb b--green">
					<div className="w-80 black">
						<input
							placeholder={name}
							className="bn pa3 w-100 f5-ns f6" type="text"
							onChange={handleSearch}
							value={value}
						/>
					</div>
					<button className={`clear-btn w-20 pv3 flex items-center justify-center pointer ${showForm ? 'b--moon-gray ba bg-near-white' : 'bn bg-white'}`} onClick={this.showDropDown.bind(this)} >
						<svg className={`dropdown-arrow ${showForm ? 'rotate-180' : ''}`} width="6" height="6" viewBox="189 13 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd">
							<polygon stroke="none" fill="#444444" fillRule="evenodd" transform="translate(195.000000, 17.000000) rotate(0) translate(-195.000000, -17.000000)" points="189 14 195 20 201 14" />
						</svg>
					</button>
				</div>
				<div className={ `combo-box-list w-100 absolute bg-near-white b--moon-gray ba ${showForm ? 'db' : 'dn'}`}>
					{
						options.map((o) => {
							return (
								<button onClick={handleChange} value={o.value} key={o.name} className="bn db w-100 tl bg-near-white pa3 clear-btn bg-animate f5-ns f6">{o.name}</button>
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
