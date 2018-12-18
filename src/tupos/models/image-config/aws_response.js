
import setString from '@youversion/tupos-base/dist/setters/string'

import Fields from './aws_response/fields'

/** *
 * ImageConfig model
 */
class AwsResponse {
	constructor(json) {

		if (!json || typeof json !== 'object') return
		this.url = json.url
		this.fields = json.fields
	}

	/** Convert AwsResponse to simple object */
	toObject() {
		return {
			url: this.url,
			fields: this.fields.toObject()
		}
	}



	/** @type {string} */
	get url() {
		return this._url
	}

	set url(url) {
		this._url = setString(url, 'url')
	}

	/** @type {Fields} */
	get fields() {
		return this._fields
	}

	set fields(fields) {
		this._fields = new Fields(fields, 'fields')
	}

}

export default AwsResponse
