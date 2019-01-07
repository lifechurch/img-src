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
		this.errors = json.errors
	}

	/** Convert Image to simple object */
	toObject() {
		return {
			errors: this.errors
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

	/** Confirm that image upload is complete and image is ready to view. */
	static async confirmUpload(presignedUploadConfirmId, presignedUploadId, bodyParams) {
		const json = await TuposModel.get(api4({
			endpoint: 'viewmaster',
			method: 'images/confirm_post_and_submit/:presignedUploadId/:presignedUploadConfirmId',
			version: 'api',
			auth: true,
			bodyParams,
			parseJson: true,
			urlParams: {
				presignedUploadId,
				presignedUploadConfirmId
			},
			fetchArgs: { method: 'POST' }
		}))

		if (typeof json !== 'object') throw new Error()

		return new Image(json)
	}


	/** @type {string} */
	get errors() {
		return this._errors
	}

	set errors(errors) {
		this._errors = setString(errors, 'errors')
	}

}

export default Image
