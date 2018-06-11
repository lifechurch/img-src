import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import SecureRoute from './components/secure-route'
import SidebarNavMenu from './components/sidebar-nav-menu'
import Admin from './containers/admin'
import SplashPage from './containers/splash-page'
import UserRegistration from './containers/user-registration'
import UserVerseAssignment from './containers/user-verse-assignment'
import UserProfile from './containers/user-profile'
import SidebarNav from './layouts/sidebar-nav'
import ToastHandler from './components/toast-handler'

function App() {
	return (
		<Router>
			<div className="h-100">

				<Helmet
					title="Image Source: A YouVersion Design Community"
					description="A web application for YouVersion design community to submit verse image art for use in the Bible App."
				/>

				<ToastHandler />

				{/*
          This is temporary navigation while we build out the full application
          This will be removed once we have real navigation developed
        */}
				<nav className="flex pa3 bg-near-black">
					<Link to="/" className="mr3 link dim moon-gray">Splash Page</Link>
					<Link to="/user-registration" className="mr3 link dim moon-gray">Sign Up</Link>
					<Link to="/user-verse-assignment" className="mr3 link dim moon-gray">Verse Assignment</Link>
					<Link to="/user-profile/Michael" className="mr3 link dim moon-gray">User Profile: Michael</Link>
					<Link to="/user-profile/Tommy" className="mr3 link dim moon-gray">User Profile: Tommy</Link>
					<Link to="/admin" className="mr3 link dim moon-gray">Admin</Link>
				</nav>

				<Route exact path="/" component={SplashPage} />
				<Route path="/user-registration" component={UserRegistration} />
				<Route
					path="/user-verse-assignment" render={() => {
						return (
							<SidebarNav menu={<SidebarNavMenu />}>
								<Route path="/user-verse-assignment" component={UserVerseAssignment} />
							</SidebarNav>
						)
					}}
				/>
				<Route
					path="/user-profile/:userId" render={() => {
						return (
							<SidebarNav menu={<SidebarNavMenu />}>
								<Route path="/user-profile/:userId" component={UserProfile} />
							</SidebarNav>
						)
					}}
				/>
				<SecureRoute
					path="/admin" component={() => {
						return (
							<SidebarNav menu={<SidebarNavMenu isAdmin={true} />}>
								<Route path="/admin" component={Admin} />
							</SidebarNav>
						)
					}}
				/>
			</div>
		</Router>
	)
}

export default App
