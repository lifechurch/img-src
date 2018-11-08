import { TuposModel } from '@youversion/tupos-base'
import setString from '@youversion/tupos-base/dist/setters/string'
import api4 from '@youversion/tupos-base/dist/fetchers/api4'
import Copyright from './copyright'
import Reference from './reference'

/** *
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
			reference: this.reference.toObject(),
			copyright: this.copyright.toObject()
		}
	}

	/** Fetch verse from API */
	static async getOne(usfm, versionId) {
		const json = await TuposModel.get(api4({
			endpoint: 'viewmaster',
			method: 'verse',
			version: 'api',
			auth: true,
			parseJson: true,
			params: {
				version_id: versionId,
				usfm
			}
		}))

		if (typeof json !== 'object') throw new Error()

		return new Verse(json)
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
