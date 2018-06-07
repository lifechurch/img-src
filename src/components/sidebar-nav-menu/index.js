import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { FormattedMessage, injectIntl } from 'react-intl'
import YVLogo from '../../assets/LC_YouVersion_Logo_with_icon_Light.png'
import AdminIcon from '../../assets/admin.svg'
import ToDoIcon from '../../assets/todo.svg'
import MyImagesIcon from '../../assets/me.svg'

function SidebarNavMenu(props) {
	return (
		<div className="pa3 f3">
			<img src={YVLogo} alt="YouVersion" width={200} className="mb4" />

			{props.isAdmin &&
				<div className="mb3">
					<div className="pl3 mb3">
						<NavLink className="no-underline light-silver link dim flex align-center" activeClassName="mid-gray" to="/admin">
							<img src={AdminIcon} alt="" className="mr3" />
							<FormattedMessage id="admin" />
						</NavLink>
					</div>

					<div className="pl3 ml5 mb3">
						<NavLink className="no-underline light-silver link dim flex align-center" activeClassName="mid-gray" to="/admin/pending">
							<FormattedMessage id="pending" />
						</NavLink>
					</div>
					<div className="pl3 ml5 mb3">
						<NavLink className="no-underline light-silver link dim flex align-center" activeClassName="mid-gray" to="/admin/images">
							<FormattedMessage id="images" />
						</NavLink>
					</div>

					<div className="w-100 bg-mid-gray" style={{ height: 1 }} />
				</div>
			}

			<div className="pl3 mb3">
				<NavLink className="no-underline light-silver link dim flex align-center" activeClassName="mid-gray" to="/todo">
					<img src={ToDoIcon} alt="" className="mr3" />
					<FormattedMessage id="todo" />
				</NavLink>
			</div>

			<div className="pl3 mb3">
				<NavLink className="no-underline light-silver link dim flex align-center" activeClassName="mid-gray" to="/myimages">
					<img src={MyImagesIcon} alt="" className="mr3" />
					<FormattedMessage id="myImages" />
				</NavLink>
			</div>
		</div>
	)
}

SidebarNavMenu.propTypes = {
	isAdmin: PropTypes.bool
}

SidebarNavMenu.defaultProps = {
	isAdmin: true
}

export default injectIntl(SidebarNavMenu)
