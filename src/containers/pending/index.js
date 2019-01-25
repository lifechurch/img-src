import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import Card from '../../components/card'
import images from '../splash-page/assets/images'
import tempIcon from '../../assets/me.svg'

function AdminPending() {

	return (
		<div className="pa4 bg-light-gray h-100">
			<h1>
				<FormattedMessage id="pending" />
			</h1>
			<div className="flex mb3">
				<div className="mr3" >
					<img src={images[3]} alt="" className="w3 br-100" />
				</div>
				<div className="mr3"><h2>Amelia Davis</h2></div>
				<img src={tempIcon} alt="" className="mr3 dn di-l di-m" />
				<img src={tempIcon} alt="" className="mr3 dn di-l di-m" />
			</div>
			<div className="flex-ns mb6-ns">
				<div className="mr3">
					<img src={images[0]} alt="" />
				</div>
				<div className="flex-ns flex-column justify-between mt3">
					<Card className="mt3">
						<h3 className="mid-gray">2 Corinthians 3:17 NLT</h3>
						<p className="mid-gray">Now the Lord is the Spirit, and where the Spirit of the Lord is, there
									is freedom.
						</p>
					</Card>
					<div className="mt3">
						<img src={images[5]} alt="" className="w3 mr3" />
						<img src={images[5]} alt="" className="w3 mr3" />
						<img src={images[5]} alt="" className="w3 mr3" />
					</div>
				</div>
			</div>
			<hr className="dn-m dn-l" />

			<div className="flex mb3">
				<div className="mr3" >
					<img src={images[3]} alt="" className="w3 br-100" />
				</div>
				<div className="mr3"><h2>Pete Dragon</h2></div>
				<img src={tempIcon} alt="" className="mr3 dn di-l di-m" />
				<img src={tempIcon} alt="" className="mr3 dn di-l di-m" />
			</div>
			<div className="flex-ns">
				<div className="mr3">
					<img src={images[2]} alt="" />
				</div>
				<div className="flex-ns flex-column justify-between mt3">
					<Card>
						<h3 className="mid-gray">2 Corinthians 3:17 NLT</h3>
						<p className="mid-gray">Now the Lord is the Spirit, and where the Spirit of the Lord is, there
                                is freedom.
						</p>
					</Card>
					<div className="mt3">
						<img src={images[1]} alt="" className="w3 mr3" />
						<img src={images[1]} alt="" className="w3 mr3" />
						<img src={images[1]} alt="" className="w3 mr3" />
					</div>
				</div>
			</div>
		</div>

	)
}

export default AdminPending