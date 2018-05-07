import React from 'react'
import './index.css'

const styles = {
	resize: 'none'
}

function TextArea(props) {
	return (
		<textarea {...props} style={styles} className="bg-animate br2 pa2 w-100 h3 input-reset b--moon-gray outline-0" />
	)
}

export default TextArea
