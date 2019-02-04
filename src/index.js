import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { YVAuthProvider } from '@youversion/tupos-auth/dist/YVAuth.context'
import { IntlProvider, addLocaleData } from 'react-intl'
import localeData from 'react-intl/locale-data/en'
import PartnerProvider from './context/Partner.context'
import App from './App'
import localeMessages from './locales/en.json'
// import tryModels from './try-models'

// TO-DO: For now, we're hardcoding an English locale,
// but we should eventually get the locale and
// messages dynamically based on user's preferred
// language

addLocaleData(localeData)

ReactDOM.render(
	(
		<YVAuthProvider>
			<PartnerProvider>
				<IntlProvider locale="en" messages={localeMessages}>
					<App />
				</IntlProvider>
			</PartnerProvider>
		</YVAuthProvider>
	), document.getElementById('root')
)
