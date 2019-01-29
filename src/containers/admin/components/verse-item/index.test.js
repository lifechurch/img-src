import React from 'react'
import ReactDOM from 'react-dom'
import VerseItem from './index'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<VerseItem />, div)
})
