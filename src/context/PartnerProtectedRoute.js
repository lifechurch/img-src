import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import withPartner from './withPartner'

function PartnerProtectedRoute(props) {
	const { component: RouteComponent, redirectTo, ...rest } = props
	const { isSignedIn, isPartner } = rest
	return (
		<Route
			{...rest}
			render={(renderProps) => {
				if (isSignedIn === true && isPartner === true) return (<RouteComponent {...renderProps} />)
				else if (isSignedIn === true && isPartner === false) return (<Redirect to={redirectTo} />)
				else if (isSignedIn === false) return (<Redirect to="/" />)
				return null
			}}
		/>
	)
}

export default withPartner(PartnerProtectedRoute)