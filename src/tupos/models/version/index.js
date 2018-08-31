import { TuposModel } from '@youversion/tupos-base'
import setNumber from '@youversion/tupos-base/dist/setters/number'
import setString from '@youversion/tupos-base/dist/setters/string'



/**
 * Version model
 * @extends TuposModel
 */
class Version extends TuposModel {
	constructor(json) {
		super(json)
		if (!json || typeof json !== 'object') return
		this.id = json.id
		this.name = json.name
		this.abbreviation = json.abbreviation
	}

	/** Convert Version to simple object */
	toObject() {
		return {
			id: this.id,
			name: this.name,
			abbreviation: this.abbreviation
		}
	}

	/**
  * Fetch list of versions from API

  */
	static async getMany() {
		const json = await TuposModel.get({
			url: 'https://viewmaster.sl.lifechurchcloud.com/api/versions',
		})
		return json.map((item) => {
			return new Version(item)
		})
	}


	/** @type {number} */
	get id() {
		return this._id
	}

	set id(id) {
		this._id = setNumber(id, 'id')
	}

	/** @type {string} */
	get name() {
		return this._name
	}

	set name(name) {
		this._name = setString(name, 'name')
	}

	/** @type {string} */
	get abbreviation() {
		return this._abbreviation
	}

	set abbreviation(abbreviation) {
		this._abbreviation = setString(abbreviation, 'abbreviation')
	}

}

export default Version
