import React from 'react'
import PropTypes from 'prop-types'

function SidebarNav({ menu, children }) {
	return children ? (
		<div className="h-100">
			<div className="cf h-100">
				<div className="fl w7 br bg-white b--moon-gray h-100">
					{menu}
				</div>
				<div className="pa4 fl w-80">
					{children}
				</div>
			</div>
		</div>
	) : null
}

SidebarNav.propTypes = {
	menu: PropTypes.node,
	children: PropTypes.node
}

SidebarNav.defaultProps = {
	menu: null,
	children: null
}

export default SidebarNav
