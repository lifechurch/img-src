import React from 'react'
import ReactDOM from 'react-dom'
import UserRegistration from './index'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<UserRegistration />, div)
})
