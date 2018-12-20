import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import YVAuthProtectedRoute from '@youversion/tupos-auth/dist/YVAuthProtectedRoute'
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

				<Route exact path="/" component={SplashPage} />
				<YVAuthProtectedRoute redirectTo="/" path="/user-registration" component={UserRegistration} />
				<Route
					path="/user-verse-assignment" render={() => {
						return (
							<SidebarNav menu={<SidebarNavMenu />}>
								<YVAuthProtectedRoute redirectTo="/" path="/user-verse-assignment" component={UserVerseAssignment} />
							</SidebarNav>
						)
					}}
				/>
				<Route
					path="/user-profile/:userId" render={() => {
						return (
							<SidebarNav menu={<SidebarNavMenu />}>
								<YVAuthProtectedRoute redirectTo="/" path="/user-profile/:userId" component={UserProfile} />
							</SidebarNav>
						)
					}}
				/>
				<Route
					path="/admin" component={() => {
						return (
							<SidebarNav menu={<SidebarNavMenu isAdmin={true} />}>
								<YVAuthProtectedRoute redirectTo="/" path="/admin" component={Admin} />
							</SidebarNav>
						)
					}}
				/>
			</div>
		</Router>
	)
}

export default App
