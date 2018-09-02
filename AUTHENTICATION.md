
# Authentication with YouVersion Account

- - - -

## YVAuthProtectedRoute

A replacement for `Route` from `react-router` that automatically redirects a user to a specified location (usually a login page) if they’re not currently signed in.

```
// Import the Route component
import YVAuthProtectedRoute from '@youversion/tupos-auth/dist/YVAuthProtectedRoute'

// Then use it like you would use a Route from react-router
// If a user is not logged in, they will get redirected to the redirectTo location (usually a login route)
<YVAuthProtectedRoute redirectTo="/" path="/user-registration" component={UserRegistration} />
```

- - - -

## YVAuthProvider

A React context provider that provides user authentication info to your app

```
// Import the Provider
import { YVAuthProvider } from '@youversion/tupos-auth/dist/YVAuth.context'

// Wrap your top-level app component so that the YV Auth context will be available throughout your app
ReactDOM.render(
  (
    <YVAuthProvider>
      <IntlProvider locale="en" messages={localeMessages}>
        <App />
      </IntlProvider>
    </YVAuthProvider>
  ), document.getElementById('root')
)
```

- - - -

## withYVAuth

A React Higher-Order Component that adds the following properties to any wrapped component:

* isSignedIn (boolean) - is the user currently authenticated?
* token (object) - an object containing details about the YV Auth Token
* login (function) - a function to sign a user in, takes a single object as a parameter. That object should have the following properties:
  * username
  * password
* logout (function) - a function to sign a user out, takes no parameters
* user (YV User) - a YV User class with info about a user with the following properties:
  * gender
  * avatarImageId
  * createdDt
  * bio
  * verified
  * birthdate
  * phoneMobile
  * languageTag
  * lastName
  * location
  * username
  * country
  * timezone
  * firstName
  * id
  * email

```
// Import at the top of your component
import withYVAuth from '@youversion/tupos-auth/dist/withYVAuth'

// Sign a user in
const { login } = this.props
const { username, password } = this.state
login({ username, password })

// Sign a user out
const { logout } = this.props
logout() // or
<a onClick={logout}>Sign Out</a>

// Wrap your export in the higher-order component (HOC)
export default withYVAuth(injectIntl(SplashPage))
```
