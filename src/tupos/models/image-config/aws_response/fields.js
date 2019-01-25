
import setString from '@youversion/tupos-base/dist/setters/string'



/** *
 * ImageConfig model
 */
class Fields {
	constructor(json) {

		if (!json || typeof json !== 'object') return
		this.acl = json.acl
		this.key = json.key
		this.AWSAccessKeyId = json.AWSAccessKeyId
		this.policy = json.policy
		this.signature = json.signature
	}

	/** Convert Fields to simple object */
	toObject() {
		return {
			acl: this.acl,
			key: this.key,
			AWSAccessKeyId: this.AWSAccessKeyId,
			policy: this.policy,
			signature: this.signature
		}
	}



	/** @type {string} */
	get acl() {
		return this._acl
	}

	set acl(acl) {
		this._acl = setString(acl, 'acl')
	}

	/** @type {string} */
	get key() {
		return this._key
	}

	set key(key) {
		this._key = setString(key, 'key')
	}

	/** @type {string} */
	get AWSAccessKeyId() {
		return this._AWSAccessKeyId
	}

	set AWSAccessKeyId(AWSAccessKeyId) {
		this._AWSAccessKeyId = setString(AWSAccessKeyId, 'AWSAccessKeyId')
	}

	/** @type {string} */
	get policy() {
		return this._policy
	}

	set policy(policy) {
		this._policy = setString(policy, 'policy')
	}

	/** @type {string} */
	get signature() {
		return this._signature
	}

	set signature(signature) {
		this._signature = setString(signature, 'signature')
	}

}

export default Fields
