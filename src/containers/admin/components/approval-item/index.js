import React from 'react' 
import PropTypes from 'prop-types'

import like from '../../../../assets/thumbs-up-solid.svg'
import picture from '../../../../assets/15549_320x320.jpg'
import './index.css'

const User = (props) => {
    return (
        <div className="relative flex flex-row items-center pt2 pb2" >
            <div className = 'approvalItemUserAvatar h3 w3 br-100 bg-gray' >
            </div>
            <div className = 'approvalItemUserName pa3 f3 b' >
                ChuanTao Wang
            </div>
            <div 
                className='bg-none pa2 bn pointer dn db-ns'
                onClick={ ()=>{props.onUserAction('like', {})} }
            >
                <img src={like} className='w1'></img>
            </div>
            <div 
                className='bg-none pa2 bn pointer dn db-ns'
                onClick={ ()=>{props.onUserAction('dislike', {})} }
            >
                <img src={like} className='w1 rotate-180'></img>
            </div>
        </div>
    )
}



const VerseItem = (props) => {
    return (
        <div className = 'ApprovalItemVerseItem relative flex flex-row-ns flex-column items-stretch pt2 pb2'>
            <div className='relative w-100 w-30-ns hide-child'>
                <div className='relative aspect-ratio aspect-ratio--1x1 w-100'>
                    <img className='absolute h-100' src = { picture } />
                    <div className='absolute db-ns dn h-100 w-100 bg-black-80 child'  />
                </div>
                <div className='options-container absolute top-0 h-100 w-100 flex flex-column items-center justify-center child f3'>
                    <div 
                        className='option flex flex-row items-center w-60 mb4 pointer white-80 hover-light-gray'
                        onClick={ ()=>{props.onImageAction('approve', {})} }
                    >
                        <div className='title-circle bg-white-80 h1 w1 br-100 mr3' />
                        <div >Approve</div>
                    </div>
                    <div 
                        className='option flex flex-row items-center w-60 pointer white-80 hover-light-gray'
                        onClick={ ()=>{props.onImageAction('decline', {})} }
                    >
                        <div className='title-circle bg-white-80 h1 w1 br-100 mr3' />
                        <div >Decline</div>
                    </div>
                </div>
            </div>
            <div className="relative flex-auto flex flex-column w-100 w-60-ns ml2-ns mt2 mt0-ns" >
                <div className = 'flex-auto flex flex-column bg-white pa3 mb2 br2 shadow-2'>
                    <div className='mb2 dark-gray f3'>
                        verse title
                    </div>
                    <div className='gray f4'>
                        verse body
                    </div>
                </div>
                <div className='image-demo flex flex-row flex-wrap items-start'>
                    <img className='w-10 pt2 pb2 pr2' src = { picture } />
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

    onImageAction = ( action, imageInfo ) => {
        console.log(action, imageInfo)
        this.props.onImageAction(action, imageInfo)
    }

    onUserAction = ( action, userInfo ) => {
        console.log(action, userInfo)
        this.props.onUserAction(action, userInfo)
    }

    render() {
        return (
            <div className="w-100 pt4 pb4">
                <User onUserAction={this.onUserAction} />
                <VerseItem onImageAction={this.onImageAction} />
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