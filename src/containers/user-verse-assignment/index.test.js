import React from 'react'
import ReactDOM from 'react-dom'
import UserVerseAssignment from './index'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<UserVerseAssignment />, div)
})
