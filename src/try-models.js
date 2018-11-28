import Image from './tupos/models/image'
import ImageConfig from './tupos/models/image-config'
import Language from './tupos/models/language'
import Partner from './tupos/models/partner'
import Verse from './tupos/models/verse'
import Verses from './tupos/models/verses'
import Version from './tupos/models/version'

const methods = [
  [ Image, 'Image', 'getOne', [ 1 ] ],
  [ Image, 'Image', 'getMany', [ 'denied' ] ],
  [ ImageConfig, 'ImageConfig', 'get', [] ],
  [ Language, 'Language', 'getMany', [] ],
  [ Partner, 'Partner', 'getOne', [ 1 ] ],
  [ Partner, 'Partner', 'getMany', [] ],
  [ Verse, 'Verse', 'getOne', [ 'JHN.1.1', 1 ] ],
  [ Verses, 'Verses', 'getMany', [] ],
  [ Version, 'Version', 'getMany', [] ]
]

async function main() {
  for (const test of methods) {
    const [ model, label, method, params ] = test
    console.group(`${label}.${method}`)
    try {
      const data = await model[method](...params)
      if (Array.isArray(data)) {
        console.log('RESPONSE: ARRAY')
        data.forEach((model) => {
          console.log(model.toObject())
        })
      } else {
        console.log('RESPONSE: OBJECT')
        console.log(data.toObject())
      }
    } catch (e) {
      console.error('ERROR', e)
    }
    console.groupEnd()
  }
}

export default main
