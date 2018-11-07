import { TuposModel } from '@youversion/tupos-base'
import setString from '@youversion/tupos-base/dist/setters/string'
import api4 from '@youversion/tupos-base/dist/fetchers/api4'
import Params from './params'

/** *
 * ImageConfig model
 * @extends TuposModel
 */
class ImageConfig extends TuposModel {
	constructor(json) {
		super(json)
		if (!json || typeof json !== 'object') return
		this.url = json.url
		this.imageId = json.image_id
		this.params = json.params
	}

	/** Convert ImageConfig to simple object */
	toObject() {
		return {
			url: this.url,
			image_id: this.imageId,
			params: this.params.toObject()
		}
	}

	/** Get image upload configuration */
	static async get() {
		const json = await TuposModel.get(api4({
			endpoint: 'viewmaster',
			method: 'images:upload_configs',
			version: 'api',
			auth: true,
			parseJson: true
		}))

		if (typeof json !== 'object') throw new Error()

		return new ImageConfig(json)
	}


	/** @type {string} */
	get url() {
		return this._url
	}

	set url(url) {
		this._url = setString(url, 'url')
	}

	/** @type {string} */
	get imageId() {
		return this._imageId
	}

	set imageId(imageId) {
		this._imageId = setString(imageId, 'imageId')
	}

	/** @type {Params} */
	get params() {
		return this._params
	}

	set params(params) {
		this._params = new Params(params, 'params')
	}

}

export default ImageConfig
