import React from 'react'
import ReactDOM from 'react-dom'
import SidebarNav from './index'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<SidebarNav />, div)
})
