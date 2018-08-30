import { TuposModel } from '@youversion/tupos-base'
import setString from '@youversion/tupos-base/dist/setters/string'



/**
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

	static async getMany() {
		const json = await TuposModel.get({
			url: 'http://viewmaster.sl.lifechurchcloud.com/api/languages',
		})
		return json.map((item) => {
			return new Language(item)
		})
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
