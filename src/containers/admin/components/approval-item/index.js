import React from 'react' 
import PropTypes from 'prop-types'

import like from '../../../../assets/thumbs-up-solid.svg'

const User = (props) => {
    return (
        <div className="relative flex flex-row items-center pt2 pb2" >
            <div className = 'approvalItemUserAvatar h3 w3 br-100 bg-gray' >
            </div>
            <div className = 'approvalItemUserName pa3 f3 b' >
                ChuanTao Wang
            </div>
            <div className='bg-none pa2 bn'>
                <img src={like} className='w1'></img>
            </div>
            <div className='bg-none pa2 bn'>
                <img src={like} className='w1 rotate-180'></img>
            </div>
        </div>
    )
}

const VerseItem = (props) => {
    return (
        <div className="w-100  bg-white pa2 br2 shadow-2 relative" >
            1234
        </div>
    )
}

class ApprovalItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleClick = () => {
        console.log(this)
    }

    render() {
        return (
            <div className="w-100 pt4 pb4">
                <User />
                <VerseItem />
            </div>
        )
    }
}

ApprovalItem.propTypes = {
	// to: PropTypes.node,
	// disabled: PropTypes.bool,
	// icon: PropTypes.node.isRequired,
	// alt: PropTypes.string,
	onUserAction: PropTypes.func,
	onImageAction: PropTypes.func,
}

ApprovalItem.defaultProps = {
	onUserAction: ()=>{},
	onImageAction: ()=>{}
}

export default ApprovalItem