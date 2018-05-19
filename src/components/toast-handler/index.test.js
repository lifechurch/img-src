import React from 'react'
import ReactDOM from 'react-dom'
import ToastHandler from './index'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<ToastHandler />, div)
})
