import React from 'react'
import { FormattedMessage } from 'react-intl'
import ApprovalItem from './components/approval-item/index'

function Admin() {
	return (
		<div className="pa4 w-100">
			<h1 className="ma0 pa0">
				<FormattedMessage id="admin" />
			</h1>
			<ApprovalItem />
		</div>
	)
}

export default Admin
