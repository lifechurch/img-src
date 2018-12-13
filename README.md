# Image Source

A web application for YouVersion design community to submit verse image art for use in the Bible App.

[See it live](https://img-src.netlify.com/)

![](/ui-design/splash-page/desktop.png)

# Getting Started
To begin with, you should join the [Open Digerati Slack Group](https://opendigerati.slack.com) for advice and help regarding this repository.

Once you are in, there are plenty of [issues](https://github.com/lifechurch/img-src/issues) available to complete. If it's your first time contributing, look for issues labelled `good first issue` to make a start!

### Where can I create an account?
To create an account, you need to register to the YouVersion staging system. You can register at [staging.bible.com](https://staging.bible.com). You can ask for the username + password in the `#yv-img-source` channel on Slack!

### How do I get access to the Github group to assign tasks?
Simply ask in the `#yv-img-source` channel on Slack with your Github username and you will be given access as soon as possible.

### What is `${NPM_TOKEN}`?
This is your token used to authenticate with the NPM registry. To access private resources (such as `@youversion/tupos`) you will need a token from the YouVersion team, which can be requested in the `#yv-img-source` channel on Slack.

You can set the token in your environment variable like so:

* Windows: `set NPM_TOKEN={token}`
* Linux: `export NPM_TOKEN={token}`

### Why am I getting a 404 error for the `@youversion/tupos` package?
You will get a 404 error for this package if you do not have a valid token set in your system environment variable. The correct token can be requested in the `#yv-img-source` channel on Slack, and set as stated above.

### Guides
* [Contributing Guide](./CONTRIBUTING.md) - Volunteers guide to contributing.
* [Authentication Guide](./AUTHENTICATION.md) - A guide to authentication with a YouVersion account.
* [API Guide](./API.md) - Guide to using the img-src API.
