import { TuposModel } from '@youversion/tupos-base'
import setNumber from '@youversion/tupos-base/dist/setters/number'
import setString from '@youversion/tupos-base/dist/setters/string'
import api4 from '@youversion/tupos-base/dist/fetchers/api4'
import AwsResponse from './aws_response'

/** *
 * ImageConfig model
 * @extends TuposModel
 */
class ImageConfig extends TuposModel {
	constructor(json) {
		super(json)
		if (!json || typeof json !== 'object') return
		this.presignedUploadId = json.presigned_upload_id
		this.presignedUploadConfirmId = json.presigned_upload_confirm_id
		this.awsResponse = json.aws_response
	}

	/** Convert ImageConfig to simple object */
	toObject() {
		return {
			presigned_upload_id: this.presignedUploadId,
			presigned_upload_confirm_id: this.presignedUploadConfirmId,
			aws_response: this.awsResponse.toObject()
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


	/** @type {number} */
	get presignedUploadId() {
		return this._presignedUploadId
	}

	set presignedUploadId(presignedUploadId) {
		this._presignedUploadId = setNumber(presignedUploadId, 'presignedUploadId')
	}

	/** @type {string} */
	get presignedUploadConfirmId() {
		return this._presignedUploadConfirmId
	}

	set presignedUploadConfirmId(presignedUploadConfirmId) {
		this._presignedUploadConfirmId = setString(presignedUploadConfirmId, 'presignedUploadConfirmId')
	}

	/** @type {AwsResponse} */
	get awsResponse() {
		return this._awsResponse
	}

	set awsResponse(awsResponse) {
		this._awsResponse = new AwsResponse(awsResponse, 'awsResponse')
	}

}

export default ImageConfig
