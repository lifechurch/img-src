import { TuposModel } from '@youversion/tupos-base'
import setNumber from '@youversion/tupos-base/dist/setters/number'
import api4 from '@youversion/tupos-base/dist/fetchers/api4'


/** *
 * ImageCounts model
 * @extends TuposModel
 */
class ImageCounts extends TuposModel {
	constructor(json) {
		super(json)
		if (!json || typeof json !== 'object') return
		this.Pending = json.Pending
		this.Moderated = json.Moderated
		this.Approved = json.Approved
		this.Denied = json.Denied
	}

	/** Convert ImageCounts to simple object */
	toObject() {
		return {
			Pending: this.Pending,
			Moderated: this.Moderated,
			Approved: this.Approved,
			Denied: this.Denied
		}
	}

	/** Get image status counts */
	static async get() {
		const json = await TuposModel.get(api4({
			endpoint: 'viewmaster',
			method: 'images/counts',
			version: 'api',
			auth: true,
			parseJson: true
		}))

		if (typeof json !== 'object') throw new Error()

		return new ImageCounts(json)
	}


	/** @type {number} */
	get Pending() {
		return this._Pending
	}

	set Pending(Pending) {
		this._Pending = setNumber(Pending, 'Pending')
	}

	/** @type {number} */
	get Moderated() {
		return this._Moderated
	}

	set Moderated(Moderated) {
		this._Moderated = setNumber(Moderated, 'Moderated')
	}

	/** @type {number} */
	get Approved() {
		return this._Approved
	}

	set Approved(Approved) {
		this._Approved = setNumber(Approved, 'Approved')
	}

	/** @type {number} */
	get Denied() {
		return this._Denied
	}

	set Denied(Denied) {
		this._Denied = setNumber(Denied, 'Denied')
	}

}

export default ImageCounts
