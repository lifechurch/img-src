import { TuposModel } from '@youversion/tupos-base'
import setDate from '@youversion/tupos-base/dist/setters/date'
import setNumber from '@youversion/tupos-base/dist/setters/number'
import setString from '@youversion/tupos-base/dist/setters/string'
import api4 from '@youversion/tupos-base/dist/fetchers/api4'


/** *
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
		this.memberSince = json.member_since
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
			member_since: this.memberSince
		}
	}

	/** Fetch partner from API */
	static async getOne(partnerId) {
		const json = await TuposModel.get(api4({
			endpoint: 'viewmaster',
			method: 'partners/:partnerId',
			version: 'api',
			auth: true,
			parseJson: true,
			urlParams: {
				partnerId
			}
		}))

		if (typeof json !== 'object') throw new Error()

		return new Partner(json)
	}

	/** Fetch list of partners from API */
	static async getMany() {
		const json = await TuposModel.get(api4({
			endpoint: 'viewmaster',
			method: 'partners',
			version: 'api',
			auth: true,
			parseJson: true
		}))

		if (!Array.isArray(json.data)) throw new Error()

		return json.data.map((item) => {
			return new Partner(item)
		})
	}

	/** Fetch current user partner status from API */
	static async me() {
		const json = await TuposModel.get(api4({
			endpoint: 'viewmaster',
			method: 'partners/me',
			version: 'api',
			auth: true,
			parseJson: true
		}))

		if (typeof json !== 'object') throw new Error()

		return new Partner(json)
	}

	/** Create partner */
	static async signUp(bodyParams) {
		const json = await TuposModel.get(api4({
			endpoint: 'viewmaster',
			method: 'signup',
			version: 'api',
			auth: true,
			bodyParams,
			parseJson: true,
			fetchArgs: { method: 'POST' }
		}))

		if (typeof json !== 'object') throw new Error()

		return new Partner(json)
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

	/** @type {number} */
	get permission() {
		return this._permission
	}

	set permission(permission) {
		this._permission = setNumber(permission, 'permission')
	}

	/** @type {number} */
	get status() {
		return this._status
	}

	set status(status) {
		this._status = setNumber(status, 'status')
	}

	/** @type {number} */
	get versionId() {
		return this._versionId
	}

	set versionId(versionId) {
		this._versionId = setNumber(versionId, 'versionId')
	}

	/** @type {Date} */
	get memberSince() {
		return this._memberSince
	}

	set memberSince(memberSince) {
		this._memberSince = setDate(memberSince, 'memberSince')
	}

}

export default Partner
