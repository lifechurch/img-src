import React from 'react'
import ReactDOM from 'react-dom'
import Toast from '../toast'

const DEFAULT_TIMEOUT = 3000

const display = (text, timeout, autoHide, ...rest) => {
	if (!document.getElementById('notifications').hasChildNodes()) {
		ReactDOM.render(<Toast text={text} delay={timeout} {...rest} />, document.getElementById('notifications'))

		if (autoHide) {
			return false
		}

		setTimeout(() => {
			ReactDOM.unmountComponentAtNode(document.getElementById('notifications'))
		}, timeout)

		return true
	}

	return false
}

const notify = (initRecall = 500, recallIncrement = 500) => {
	this.queued = []
	this.currentlyNotifying = false

	this.displayNext = () => {
		if (this.queued.length === 0) {
			this.currentlyNotifying = false
			return
		}

		this.currentlyNotifying = true
		this.currentRecall = initRecall

		const currentMessage = this.queued.pop()
		const { text, timeout, autoHide } = currentMessage

		if (display(text, timeout, autoHide)) {

			if (currentMessage.timeout > 0) {
				this.currentRecall = initRecall
				setTimeout(() => {
					this.displayNext()
				}, currentMessage.timeout)
			}

		} else {

			this.queued.unshift(currentMessage)
			setTimeout(() => {
				this.displayNext()
			}, this.currentRecall)
			this.currentRecall += recallIncrement

		}
	}

	return (text, timeout = DEFAULT_TIMEOUT, autoHide = true, ...rest) => {
		this.queued.push({ text, timeout, autoHide, ...rest })
		if (!this.currentlyNotifying) {
			this.displayNext()
		}
	}
}

function ToastHandler() {
	return (
		<div id="notifications" />
	)
}

export default ToastHandler
export const notifier = {
	notify
}
