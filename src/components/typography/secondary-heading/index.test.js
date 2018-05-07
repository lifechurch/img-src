import React from 'react'
import ReactDOM from 'react-dom'
import SecondaryHeading from './index'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<SecondaryHeading />, div)
})
