import { TuposModel } from '@youversion/tupos-base'
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
		this.detail = json.detail
	}

	/** Convert Partner to simple object */
	toObject() {
		return {
			detail: this.detail
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


	/** @type {string} */
	get detail() {
		return this._detail
	}

	set detail(detail) {
		this._detail = setString(detail, 'detail')
	}

}

export default Partner
