import React from 'react' 

class ApprovalItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleClick = () => {
        console.log(this)
    }

    render() {
        return (
            <div></div>
        );
    }
}

ApprovalItem.propTypes = {
	children: PropTypes.node,
	to: PropTypes.node,
	disabled: PropTypes.bool,
	icon: PropTypes.node.isRequired,
	alt: PropTypes.string,
	onClick: PropTypes.func,
}

ApprovalItem.defaultProps = {
	children: null,
	to: null,
	disabled: false,
	alt: '',
	onClick: null
}

export default ApprovalItem