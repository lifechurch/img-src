import React from 'react'
import ReactDOM from 'react-dom'
import ComboBox from './index'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<ComboBox />, div)
})
