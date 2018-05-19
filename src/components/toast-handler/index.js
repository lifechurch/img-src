import React from 'react'
import ReactDOM from 'react-dom'
import Toast from '../toast'

const DEFAULT_TIMEOUT = 3000

const clear = () => {
	ReactDOM.unmountComponentAtNode(document.getElementById('notifications'))
}

const display = (text, timeout, autoHide) => {
	if (!document.getElementById('notifications').hasChildNodes()) {
		ReactDOM.render(<Toast text={text} delay={timeout} autoHide={autoHide} />, document.getElementById('notifications'))

		/* if (timeout === -1) {
			return false
		} */

		setTimeout(() => {
			clear()
		}, timeout)

		return true
	}

	return false
}

const notify = (initRecall = 500, recallIncrement = 500) => {
	this.queued = []
	this.currentlyNotifying = false
	this.currentRecall = initRecall

	this.displayNext = () => {
		if (this.queued.length === 0) {
			this.currentlyNotifying = false
			return
		}

		this.currentlyNotifying = true

		const currentMessage = this.queued.pop()
		const { text, timeout, autoHide } = currentMessage

		if (display(text, timeout, autoHide)) {

			this.currentRecall = initRecall
			setTimeout(() => {
				this.displayNext()
			}, timeout)

		} else {

			this.queued.unshift(currentMessage)
			setTimeout(() => {
				this.displayNext()
			}, this.currentRecall)
			console.log(this.queued)
			this.currentRecall += recallIncrement

		}
	}

	return (text = '', timeout = DEFAULT_TIMEOUT, autoHide = true) => {
		this.queued.push({
			text,
			timeout,
			autoHide
		})
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
	notify,
	clear
}
