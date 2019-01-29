import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import Verse from '../../../../tupos/models/verse'

class VerseItem extends Component {
	state = {
		verse: {}
	}
	componentDidMount = async () => {
		const { _usfm: usfm, _versionId: versionId } = this.props
		try {
			const verse = await Verse.getOne(usfm, versionId)
			this.setState({ verse })
			console.log(verse)
		} catch (error) {
			console.error(error)
		}
	}

	render = () => {
		const { verse } = this.state
		return (
			<div className='ApprovalItemVerseItem relative flex flex-row-ns flex-column items-stretch pt2 pb2'>
				<div className='relative w-100 w-30-ns hide-child'>
					<div className='relative aspect-ratio aspect-ratio--1x1 w-100'>
						<img className='absolute h-100' src={this.props._url} alt='profile' />
						<div className='absolute db-ns dn h-100 w-100 bg-black-80 child' />
					</div>
					<div className='options-container absolute top-0 h-100 w-100 flex flex-column items-center justify-center child f3'>
						<div
							role='presentation'
							className='option flex flex-row items-center w-60 mb4 pointer white-80 hover-light-gray'
							onClick={() => { this.props.onImageAction('approve', {}) }}
						>
							<div className='title-circle bg-white-80 h1 w1 br-100 mr3' />
							<div ><FormattedMessage id='approve' /></div>
						</div>
						<div
							role='presentation'
							className='option flex flex-row items-center w-60 pointer white-80 hover-light-gray'
							onClick={() => { this.props.onImageAction('decline', {}) }}
						>
							<div className='title-circle bg-white-80 h1 w1 br-100 mr3' />
							<div ><FormattedMessage id='decline' /></div>
						</div>
					</div>
				</div>
				<div className="relative flex-auto flex flex-column w-100 w-60-ns ml2-ns mt2 mt0-ns" >
					<div className='flex-auto flex flex-column bg-white pa3 mb2 br2 shadow-2'>
						<div className='mb2 dark-gray f3'> {
							verse.reference && verse.reference.human && (verse.reference.human)
						}
						</div>
						<div className='gray f4'>
							{verse.content}
						</div>
					</div>
					<div className='image-demo flex flex-row flex-wrap items-start'>
						<img className='w-10 pt2 pb2 pr2' src={this.props._url} alt='demo-profile' />
					</div>
				</div>
			</div>
		)
	}
}


VerseItem.propTypes = {
	onImageAction: PropTypes.func.isRequired
}

VerseItem.defaultProps = {

}

export default VerseItem