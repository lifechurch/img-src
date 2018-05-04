import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

function SecureRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={props => {
				// TO-DO: Need to perform an actual security check here
				//  If they have a valid token, show the component
				//  Otherwise, redirect to login page
				return (Component ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: { from: props.location }
						}}
					/>
				))
			}}
		/>
	)
}

SecureRoute.propTypes = {
	component: PropTypes.func,
	location: PropTypes.string
}

SecureRoute.defaultProps = {
	component: null,
	location: null
}

export default SecureRoute
