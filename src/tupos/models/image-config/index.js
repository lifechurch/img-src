import { TuposModel } from '@youversion/tupos-base'

import api4 from '@youversion/tupos-base/dist/fetchers/api4'


/** *
 * ImageConfig model
 * @extends TuposModel
 */
class ImageConfig extends TuposModel {
	constructor(json) {
		super(json)
		if (!json || typeof json !== 'object') return

	}

	/** Convert ImageConfig to simple object */
	toObject() {
		return {

		}
	}

	/** Get image upload configuration */
	static async get() {
		const json = await TuposModel.get(api4({
			endpoint: 'viewmaster',
			method: 'images/presigned_upload_config',
			version: 'api',
			auth: true,
			parseJson: true
		}))

		if (typeof json !== 'object') throw new Error()

		return new ImageConfig(json)
	}



}

export default ImageConfig
