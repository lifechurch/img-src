import { TuposModel } from '@youversion/tupos-base'
import setString from '@youversion/tupos-base/dist/setters/string'

import Copyright from './copyright'
import Reference from './reference'

/**
 * Verse model
 * @extends TuposModel
 */
class Verse extends TuposModel {
	constructor(json) {
		super(json)
		if (!json || typeof json !== 'object') return
		this.content = json.content
		this.reference = json.reference
		this.copyright = json.copyright
	}

	/** Convert Verse to simple object */
	toObject() {
		return {
			content: this.content,
			reference: this.reference,
			copyright: this.copyright
		}
	}

	/**
  * Fetch verse from API
  * @param {number} versionId
  * @param {string} usfm
  */
	static async getOne(usfm, versionId) {
		const json = await TuposModel.get({
			url: 'http://viewmaster.sl.lifechurchcloud.com/api/verse',
			query: {
				version_id: versionId,
				usfm
			}
		})
		return new Verse(json)
	}

	static async getMany() {
		const json = await TuposModel.get({
			url: 'http://viewmaster.sl.lifechurchcloud.com/api/verses',
		})
		return json.map((item) => {
			return new Verse(item)
		})
	}


	/** @type {string} */
	get content() {
		return this._content
	}

	set content(content) {
		this._content = setString(content, 'content')
	}

	/** @type {Reference} */
	get reference() {
		return this._reference
	}

	set reference(reference) {
		this._reference = new Reference(reference, 'reference')
	}

	/** @type {Copyright} */
	get copyright() {
		return this._copyright
	}

	set copyright(copyright) {
		this._copyright = new Copyright(copyright, 'copyright')
	}

}

export default Verse
