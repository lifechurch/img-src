import React, { Component } from 'react'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tasks: []
		}

		this.fetchData = this.fetchData.bind(this)
	}

	componentDidMount() {
		this.fetchData()
	}

	async fetchData() {
		const response = await fetch('/todo/api/v1.0/tasks')
		const { tasks } = await response.json()
		this.setState({ tasks })
	}

	render() {
		const { tasks } = this.state
		const listItems = tasks.map((task) => {
			return (<li key={task.id}>{task.description}</li>)
		})

		return (
			<div className="App">
				<h1>Output from Flask server:</h1>
				<ul>
					{listItems}
				</ul>
			</div>
		)
	}
}

export default App
