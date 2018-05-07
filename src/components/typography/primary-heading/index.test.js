import React from 'react'
import ReactDOM from 'react-dom'
import PrimaryHeading from './index'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<PrimaryHeading />, div)
})
