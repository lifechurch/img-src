import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './index'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<Modal />, div)
})

it('renders without crashing when open', () => {
	const div = document.createElement('div')
	ReactDOM.render(<Modal isOpen={true} />, div)
})

it('renders without crashing with props', () => {
	const div = document.createElement('div')
	ReactDOM.render(<Modal isOpen={true} heightClass="w-50" widthClass="w-50" />, div)
})
