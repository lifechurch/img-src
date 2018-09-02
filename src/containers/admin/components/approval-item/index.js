import React from 'react' 
import PropTypes from 'prop-types'

import like from '../../../../assets/thumbs-up-solid.svg'
import picture from '../../../../assets/15549_320x320.jpg'

const User = (props) => {
    return (
        <div className="relative flex flex-row items-center pt2 pb2" >
            <div className = 'approvalItemUserAvatar h3 w3 br-100 bg-gray' >
            </div>
            <div className = 'approvalItemUserName pa3 f3 b' >
                ChuanTao Wang
            </div>
            <div className='bg-none pa2 bn pointer'>
                <img src={like} className='w1'></img>
            </div>
            <div className='bg-none pa2 bn pointer'>
                <img src={like} className='w1 rotate-180'></img>
            </div>
        </div>
    )
}

const VerseItem = (props) => {
    return (
        <div className = 'relative flex flex-row items-stretch pt2 pb2'>
            <div className='relative w-30'>
                <div className='relative aspect-ratio--1x1 w-100'>
                    <img className='absolute h-100' src = { picture } />
                    <div className='absolute h-100 w-100 flex flex-column items-center justify-center child bg-black-80 f3'>
                        <div className='flex flex-row items-center w-60 mb3 pointer white-80 hover-light-gray'>
                            <div className='bg-white-80 h1 w1 br-100 mr3' />
                            <div >Approve</div>
                        </div>
                        <div className='flex flex-row items-center w-60 pointer white-80 hover-light-gray'>
                            <div className='bg-white-80 h1 w1 br-100 mr3' />
                            <div >Decline</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex-auto flex flex-column w-60 ml2" >
                <div className = 'flex-auto flex flex-column bg-white pa2 mb2 br2 shadow-2'>
                    <div>
                        verse title
                    </div>
                    <div>
                        verse body
                    </div>
                </div>
                <div className = 'h-25'>
                    image demo
                </div>
            </div>
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