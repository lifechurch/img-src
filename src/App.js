import React, { Component } from 'react'
import './dropdown.css'

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
				<ul className="main-navigation">
					<li><a href="#">Home</a></li>
					<li><a href="#">Front End Design</a>
						<ul>
							<li><a href="#">HTML</a></li>
							<li><a href="#">CSS</a>
								<ul>
									<li><a href="#">Resets</a></li>
									<li><a href="#">Grids</a></li>
									<li><a href="#">Frameworks</a></li>
								</ul>
							</li>
							<li><a href="#">JavaScript</a>
								<ul>
									<li><a href="#">Ajax</a></li>
									<li><a href="#">jQuery</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li><a href="#">WordPress Development</a>
						<ul>
							<li><a href="#">Themes</a></li>
							<li><a href="#">Plugins</a></li>
							<li><a href="#">Custom Post Types</a>
								<ul>
									<li><a href="#">Portfolios</a></li>
									<li><a href="#">Testimonials</a></li>
								</ul>
							</li>
							<li><a href="#">Options</a></li>
						</ul>
					</li>
					<li><a href="#">About Us</a></li>
				</ul>
			</div>
		)
	}
}

export default App
