import React from 'react'
import ReactDOM from 'react-dom'
import ApprovalItem from './index'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<ApprovalItem />, div)
})
