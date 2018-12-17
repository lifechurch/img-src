import { TuposModel } from '@youversion/tupos-base'
import setString from '@youversion/tupos-base/dist/setters/string'
import api4 from '@youversion/tupos-base/dist/fetchers/api4'


/** *
 * Language model
 * @extends TuposModel
 */
class Language extends TuposModel {
	constructor(json) {
		super(json)
		if (!json || typeof json !== 'object') return
		this.languageTag = json.language_tag
		this.name = json.name
		this.localName = json.local_name
	}

	/** Convert Language to simple object */
	toObject() {
		return {
			language_tag: this.languageTag,
			name: this.name,
			local_name: this.localName
		}
	}

	/** Fetch list of languages from API */
	static async getMany() {
		const json = await TuposModel.get(api4({
			endpoint: 'viewmaster',
			method: 'languages',
			version: 'api',
			auth: true,
			parseJson: true
		}))

		if (json && json.data) {
			if (!Array.isArray(json.data)) throw new Error()

			return json.data.map((item) => {
				return new Language(item)
			})
		 } else {
			 return false
		 }
	}


	/** @type {string} */
	get languageTag() {
		return this._languageTag
	}

	set languageTag(languageTag) {
		this._languageTag = setString(languageTag, 'languageTag')
	}

	/** @type {string} */
	get name() {
		return this._name
	}

	set name(name) {
		this._name = setString(name, 'name')
	}

	/** @type {string} */
	get localName() {
		return this._localName
	}

	set localName(localName) {
		this._localName = setString(localName, 'localName')
	}

}

export default Language
