
import setString from '@youversion/tupos-base/dist/setters/string'



/** *
 * Verse model
 */
class Reference {
	constructor(json) {

		if (!json || typeof json !== 'object') return
		this.human = json.human
		this.usfm = json.usfm
	}

	/** Convert Reference to simple object */
	toObject() {
		return {
			human: this.human,
			usfm: this.usfm
		}
	}



	/** @type {string} */
	get human() {
		return this._human
	}

	set human(human) {
		this._human = setString(human, 'human')
	}

	/** @type {string} */
	get usfm() {
		return this._usfm
	}

	set usfm(usfm) {
		this._usfm = setString(usfm, 'usfm')
	}

}

export default Reference
