# Using the img-src API
There are four Javascript model classes that you need to retrieve data from the `img-src` api.

### Language
### Partner
### Verse
### Version

---

## How to Use
To open the documentation for the API, just run the following command:

```
yarn model-docs
```

This will open a local web server with the complete documentation for each class.

Here’s a sample of how to use them:

```
import Verse from '../../tupos/models/verse'
const verse = await Verse.getOne('EPH.3.20', 116)
console.log(verse.reference.human, verse.content)
```
