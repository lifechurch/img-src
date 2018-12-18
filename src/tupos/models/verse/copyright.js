
import setString from '@youversion/tupos-base/dist/setters/string'



/***
 * Verse model
 */
class Copyright {
  constructor(json) {
    
    if (!json || typeof json !== 'object') return
    this.text = json.text
    this.html = json.html
  }

  /** Convert Copyright to simple object */
  toObject() {
    return {
      text: this.text,
      html: this.html
    }
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

export default Copyright
