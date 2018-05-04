import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider, addLocaleData } from 'react-intl'
import localeData from 'react-intl/locale-data/en'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import localeMessages from './locales/en.json'

// TO-DO: For now, we're hardcoding an English locale,
// but we should eventually get the locale and
// messages dynamically based on user's preferred
// language

addLocaleData(localeData)

ReactDOM.render(
	(
		<IntlProvider locale="en" messages={localeMessages}>
			<App />
		</IntlProvider>
	), document.getElementById('root')
)

registerServiceWorker()
