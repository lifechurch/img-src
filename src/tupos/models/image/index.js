import { TuposModel } from '@youversion/tupos-base'
import setDate from '@youversion/tupos-base/dist/setters/date'
import setNumber from '@youversion/tupos-base/dist/setters/number'
import setString from '@youversion/tupos-base/dist/setters/string'
import api4 from '@youversion/tupos-base/dist/fetchers/api4'


/** *
 * Image model
 * @extends TuposModel
 */
class Image extends TuposModel {
	constructor(json) {
		super(json)
		if (!json || typeof json !== 'object') return
		this.versionId = json.version_id
		this.usfm = json.usfm
		this.createdDt = json.created_dt
		this.userId = json.user_id
		this.status = json.status
		this.languageTag = json.language_tag
		this.weight = json.weight
		this.id = json.id
		this.category = json.category
	}

	/** Convert Image to simple object */
	toObject() {
		return {
			version_id: this.versionId,
			usfm: this.usfm,
			created_dt: this.createdDt,
			user_id: this.userId,
			status: this.status,
			language_tag: this.languageTag,
			weight: this.weight,
			id: this.id,
			category: this.category
		}
	}

	/** Fetch image from API. Must be in editor role or the owner of image. */
	static async getOne(imageId) {
		const json = await TuposModel.get(api4({
			endpoint: 'viewmaster',
			method: 'images/:imageId',
			version: 'api',
			auth: true,
			parseJson: true,
			urlParams: {
				imageId
			}
		}))

		if (typeof json !== 'object') throw new Error()

		return new Image(json)
	}

	/** Fetch list of images from API. Must be in editor role. */
	static async getMany() {
		const json = await TuposModel.get(api4({
			endpoint: 'viewmaster',
			method: 'images',
			version: 'api',
			auth: true,
			parseJson: true
		}))

		if (!Array.isArray(json.data)) throw new Error()

		return json.data.map((item) => {
			return new Image(item)
		})
	}


	/** @type {number} */
	get versionId() {
		return this._versionId
	}

	set versionId(versionId) {
		this._versionId = setNumber(versionId, 'versionId')
	}

	/** @type {string} */
	get usfm() {
		return this._usfm
	}

	set usfm(usfm) {
		this._usfm = setString(usfm, 'usfm')
	}

	/** @type {Date} */
	get createdDt() {
		return this._createdDt
	}

	set createdDt(createdDt) {
		this._createdDt = setDate(createdDt, 'createdDt')
	}

	/** @type {number} */
	get userId() {
		return this._userId
	}

	set userId(userId) {
		this._userId = setNumber(userId, 'userId')
	}

	/** @type {number} */
	get status() {
		return this._status
	}

	set status(status) {
		this._status = setNumber(status, 'status')
	}

	/** @type {string} */
	get languageTag() {
		return this._languageTag
	}

	set languageTag(languageTag) {
		this._languageTag = setString(languageTag, 'languageTag')
	}

	/** @type {string} */
	get weight() {
		return this._weight
	}

	set weight(weight) {
		this._weight = setString(weight, 'weight')
	}

	/** @type {number} */
	get id() {
		return this._id
	}

	set id(id) {
		this._id = setNumber(id, 'id')
	}

	/** @type {string} */
	get category() {
		return this._category
	}

	set category(category) {
		this._category = setString(category, 'category')
	}

}

export default Image
