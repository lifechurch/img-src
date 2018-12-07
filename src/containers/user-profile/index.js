import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Partner from '../../tupos/models/partner'
import ToggleBar from '../../components/toggle-bar'
import SecondaryHeading from './../../components/typography/secondary-heading'
import BodyText from './../../components/typography/body-text'

class UserProfile extends React.Component {
  componentDidMount() {
    this.loadData()
  }

  async loadData() {
    let partners = await Partner.getOne(1)
    console.log(partners)
  }

  render() {
    const {
  		match: {
  			params: {
  				userId
  			},
  		}
  	} = this.props

    return (
  		<div className="flex flex-column w-100 min-h-100">
  			<div className="flex justify-center pt4 ph4">
  				<div className="flex flex-column items-center mb4">
  					<img className="br-100 w4 h4 mb3" alt="" />
  					<SecondaryHeading className="ma0 pa0">
  						name
  					</SecondaryHeading>
  					<div className="mt2 tc">
  						<BodyText>
  							<FormattedMessage id="youversionVolunteer" />
  						</BodyText>
  						<BodyText>
  							<FormattedMessage id="designerSince" />
  						</BodyText>
  					</div>
  				</div>
  			</div>

  			<div className="flex-auto pa3 bg-light-gray">
  				<div className="w-100 flex flex-column items-center ma3">
  					<ToggleBar
  						links={[
  							{
  								text: 'Submissions ()',
  								address: `/user-profile/${userId}/submissions`
  							},
  							{
  								text: 'Approved ()',
  								address: `/user-profile/${userId}/approved`
  							},
  							{
  								text: 'Declined ()',
  								address: `/user-profile/${userId}/declined`
  							},
  							{
  								text: 'Pending ()',
  								address: `/user-profile/${userId}/pending`
  							}
  						]}
  					/>

  					<div className="w-100 mt4">
  						{}
  					</div>
  				</div>
  			</div>
  		</div>
  	)
  }
}

UserProfile.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			inventoryId: PropTypes.string,
		}),
	})
}

UserProfile.defaultProps = {
	match: null
}
export default UserProfile
