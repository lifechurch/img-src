import React from 'react'
import { FormattedMessage } from 'react-intl'
import Card from '../../components/card'
import TextInput from '../../components/text-input'
import TextArea from '../../components/textarea'
import Button from '../../components/button'
import Checkbox from '../../components/checkbox'
import IconButton from '../../components/icon-button'

function UserRegistration() {

	return (
		<div className="pa4">
			<h1 className="ma0 pa0">
				<FormattedMessage id="userRegistration" />
			</h1>
			<Card>
				<div className='pa3 bg-black-10'>
					<h3>Email/Password Style</h3>
					<IconButton icon="http://icons.iconarchive.com/icons/yootheme/social-bookmark/48/social-facebook-box-blue-icon.png" alt="Facebook">Continue with Facebook</IconButton>
					<TextInput name="email" type="text" placeholder="EMAIL" className='ma3' />
					<TextInput name="password" type="password" placeholder="PASSWORD" className='ma3' />
				</div>
				<div className='pa3'>
					<h3>First Name/Last Name Style</h3>
					<TextInput name="firstname" type="text" placeholder="FIRST NAME" className='b--moon-gray ma3' />
					<TextInput name="lastname" type="text" placeholder="LAST NAME" className='b--moon-gray ma3' /><br />
				</div>

				Why do you want to be on the volunteering team for YouVersion?<br />
				<TextArea />
				<Button to='/' buttontype='solid'>Submit</Button>
			</Card>
			<Card heightClass='mv4'>
				<div className='flex flex-column items-end-l items-center'>
					<TextArea rows={ 10 } disabled={true}>
						Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners,
						nor sit in the seat of scoffers; but his delight is in Yahweh's law. On his law he meditates day and night.
						He will be like a tree planted by the streams of water, that brings forth its fruit in its season,
						whose leaf also does not wither. Whatever he does shall prosper.
						The wicked are not so, but are like the chaff which the wind drives away.
						Therefore the wicked shall not stand in the judgment, nor sinners in the congregation of the righteous.
						For Yahweh knows the way of the righteous, but the way of the wicked shall perish.
						Why do the nations rage, and the peoples plot a vain thing? The kings of the earth take a stand,
						and the rulers take counsel together, against Yahweh, and against his Anointed, saying,
						«Let's break their bonds apart, and cast their cords from us.» He who sits in the heavens will laugh.
						The LORD will have them in derision. Then he will speak to them in his anger, and terrify them in his wrath:
						«Yet I have set my King on my holy hill of Zion.» I will tell of the decree. Yahweh said to me, «You are my son.
						Today I have become your father. Ask of me, and I will give the nations for your inheritance,
						the uttermost parts of the earth for your possession. You shall break them with a rod of iron.
						You shall dash them in pieces like a potter's vessel.» Now therefore be wise, you kings.
						Be instructed, you judges of the earth. Serve Yahweh with fear, and rejoice with trembling.
						Give sincere homage to the Son, lest he be angry, and you perish in the way, for his wrath will soon be kindled.
						Blessed are all those who take refuge in him.
					</TextArea>
					<Checkbox labelName='I agree to those terms and conditions' id='some-id' onChange={ (event) => (console.log(event)) } checked={false} />
					<Button onClick={(e) => console.log('clicked')} buttontype='solid' >
						Continue
					</Button>
				</div>
			</Card>
		</div>
	)
}

export default UserRegistration
