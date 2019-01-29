import React from 'react'
import PropTypes from 'prop-types'
import like from '../../../../assets/thumbs-up-solid.svg'

const User = (props) => {
	return (
		<div className="relative flex flex-row items-center pt2 pb2" >
			<div className='approvalItemUserAvatar h3 w3 br-100 bg-gray' />
			<div className='approvalItemUserName pa3 f3 b' >ChuanTao Wang</div>
			<div
				role='presentation'
				className='bg-none pa2 bn pointer dn db-ns'
				onClick={() => { props.onUserAction('like', {}) }}
			>
				<img src={like} className='w1' alt='like' />
			</div>
			<div
				role='presentation'
				className='bg-none pa2 bn pointer dn db-ns'
				onClick={() => { props.onUserAction('dislike', {}) }}
			>
				<img src={like} className='w1 rotate-180' alt='dislike' />
			</div>
		</div>
	)
}

User.propTypes = {
	onUserAction: PropTypes.func.isRequired,
}

export default User