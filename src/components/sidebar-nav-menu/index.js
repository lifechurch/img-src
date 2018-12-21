import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { FormattedMessage, injectIntl } from 'react-intl'
import withYVAuth from '@youversion/tupos-auth/dist/withYVAuth'
import YVLogo from '../../assets/LC_YouVersion_Logo_with_icon_Light.png'
import AdminIcon from '../../assets/admin.svg'
import Button from '../../components/button'
import ToDoIcon from '../../assets/todo.svg'
import MyImagesIcon from '../../assets/me.svg'
import './index.css'

function SidebarNavMenu(props) {
	const { isSignedIn, logout } = props
	return (
		<div className="pa3 f3">
			<img src={YVLogo} alt="YouVersion" style={{ width: 200 }} className="mb4" />

			{props.isAdmin &&
				<div className="mb4 flex flex-column">
					<div className="pl3 mb3">
						<NavLink className="no-underline light-silver link dim flex items-center" activeClassName="active" to="/admin">
							<img src={AdminIcon} alt="" className="mr3" />
							<FormattedMessage id="admin" />
						</NavLink>
					</div>

					<div className="pl3 mb3" style={{ marginLeft: 35 }}>
						<NavLink className="no-underline light-silver link dim flex items-center" activeClassName="active" to="/admin/pending">
							<div className="bg-mid-gray br-100 mr2 bullet" style={{ width: 7, height: 7 }} />
							<FormattedMessage id="pending" />
						</NavLink>
					</div>
					<div className="pl3 mb4" style={{ marginLeft: 35 }}>
						<NavLink className="no-underline light-silver link dim flex items-center" activeClassName="active" to="/admin/images">
							<div className="bg-mid-gray br-100 mr2 bullet" style={{ width: 7, height: 7 }} />
							<FormattedMessage id="images" />
						</NavLink>
					</div>

					<div className="w-60 bg-mid-gray self-center" style={{ height: 1 }} />
				</div>
			}

			<div className="pl3 mb4">
				<NavLink className="no-underline light-silver link dim flex items-center" activeClassName="active" to="/user-verse-assignment">
					<img src={ToDoIcon} alt="" className="mr3" />
					<FormattedMessage id="todo" />
				</NavLink>
			</div>

			<div className="pl3 mb4">
				<NavLink className="no-underline light-silver link dim flex items-center" activeClassName="active" to="/user-profile">
					<img src={MyImagesIcon} alt="" className="mr3" />
					<FormattedMessage id="myImages" />
				</NavLink>
			</div>

			{ isSignedIn && (
				<div className="pl3 mb4">
					<Button buttontype="outline-only" onClick={logout} tabIndex={0}>
						<FormattedMessage id="signOut" />
					</Button>
				</div>
			)}
		</div>
	)
}

SidebarNavMenu.propTypes = {
	isAdmin: PropTypes.bool,
	isSignedIn: PropTypes.bool,
	logout: PropTypes.func
}

SidebarNavMenu.defaultProps = {
	isAdmin: false,
	isSignedIn: false,
	logout: null
}

export default withYVAuth(injectIntl(SidebarNavMenu))
