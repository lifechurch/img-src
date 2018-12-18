import { TuposModel } from '@youversion/tupos-base'
import setString from '@youversion/tupos-base/dist/setters/string'
import api4 from '@youversion/tupos-base/dist/fetchers/api4'


/***
 * Verse model
 * @extends TuposModel
 */
class Verses extends TuposModel {
  constructor(json) {
    super(json)
    if (!json || typeof json !== 'object') return
    this.humanReference = json.human_reference
    this.usfms = json.usfms
    this.url = json.url
    this.text = json.text
    this.html = json.html
  }

  /** Convert Verses to simple object */
  toObject() {
    return {
      human_reference: this.humanReference,
      usfms: this.usfms,
      url: this.url,
      text: this.text,
      html: this.html
    }
  }

  /** Fetch list of verses from API */
  static async getMany() {
    const json = await TuposModel.get(api4({
      endpoint: 'viewmaster',
      method: 'verses',
      version: 'api',
      auth: true,
      parseJson: true
    }))

    if (!Array.isArray(json["data"]) ) throw new Error()

    return json["data"].map((item) => {
      return new Verses(item)
    })
  }


   /** @type {string} */
  get humanReference() {
    return this._humanReference
  }

  set humanReference(humanReference) {
    this._humanReference = setString(humanReference, 'humanReference')
  }

  /** @type {string} */
  get usfms() {
    return this._usfms
  }

  set usfms(usfms) {
    this._usfms = setString(usfms, 'usfms')
  }

  /** @type {string} */
  get url() {
    return this._url
  }

  set url(url) {
    this._url = setString(url, 'url')
  }

  /** @type {string} */
  get text() {
    return this._text
  }

  set text(text) {
    this._text = setString(text, 'text')
  }

  /** @type {string} */
  get html() {
    return this._html
  }

  set html(html) {
    this._html = setString(html, 'html')
  }

}

export default Verses
