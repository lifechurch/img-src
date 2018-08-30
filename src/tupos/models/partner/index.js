import { TuposModel } from '@youversion/tupos-base'
import setNumber from '@youversion/tupos-base/dist/setters/number'
import setString from '@youversion/tupos-base/dist/setters/string'



/**
 * Partner model
 * @extends TuposModel
 */
class Partner extends TuposModel {
	constructor(json) {
		super(json)
		if (!json || typeof json !== 'object') return
		this.id = json.id
		this.name = json.name
		this.attribution = json.attribution
		this.permission = json.permission
		this.status = json.status
		this.versionId = json.version_id
		this.externalId = json.external_id
	}

	/** Convert Partner to simple object */
	toObject() {
		return {
			id: this.id,
			name: this.name,
			attribution: this.attribution,
			permission: this.permission,
			status: this.status,
			version_id: this.versionId,
			external_id: this.externalId
		}
	}

	/**
  * Fetch partner from API
  * @param {number} partnerId
  */
	static async getOne(partnerId) {
		const json = await TuposModel.get({
			url: `https://viewmaster.sl.lifechurchcloud.com/api/partners/${partnerId}`,
		})
		return new Partner(json)
	}

	static async getMany() {
		const json = await TuposModel.get({
			url: 'https://viewmaster.sl.lifechurchcloud.com/api/partners',
		})
		return json.map((item) => {
			return new Partner(item)
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
	get attribution() {
		return this._attribution
	}

	set attribution(attribution) {
		this._attribution = setString(attribution, 'attribution')
	}

	/** @type {string} */
	get permission() {
		return this._permission
	}

	set permission(permission) {
		this._permission = setString(permission, 'permission')
	}

	/** @type {string} */
	get status() {
		return this._status
	}

	set status(status) {
		this._status = setString(status, 'status')
	}

	/** @type {string} */
	get versionId() {
		return this._versionId
	}

	set versionId(versionId) {
		this._versionId = setString(versionId, 'versionId')
	}

	/** @type {string} */
	get externalId() {
		return this._externalId
	}

	set externalId(externalId) {
		this._externalId = setString(externalId, 'externalId')
	}

}

export default Partner
