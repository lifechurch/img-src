import React from 'react'
import ReactDOM from 'react-dom'
import SecureRoute from './index'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<SecureRoute />, div)
})
