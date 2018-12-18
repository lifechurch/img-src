import { TuposModel } from '@youversion/tupos-base'
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
		this.error = json.error
		this.errorDescription = json.error_description
	}

	/** Convert Image to simple object */
	toObject() {
		return {
			error: this.error,
			error_description: this.errorDescription
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
	static async getMany(imageStatus) {
		const json = await TuposModel.get(api4({
			endpoint: 'viewmaster',
			method: 'images',
			version: 'api',
			auth: true,
			parseJson: true,
			params: {
				image_status: imageStatus
			}
		}))

		if (!Array.isArray(json.data)) throw new Error()

		return json.data.map((item) => {
			return new Image(item)
		})
	}


	/** @type {string} */
	get error() {
		return this._error
	}

	set error(error) {
		this._error = setString(error, 'error')
	}

	/** @type {string} */
	get errorDescription() {
		return this._errorDescription
	}

	set errorDescription(errorDescription) {
		this._errorDescription = setString(errorDescription, 'errorDescription')
	}

}

export default Image
