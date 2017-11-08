import React, { Component } from 'react';

class FormValidation extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="Validation">
				{this.props.formErrors.lastName && <div>{this.props.formErrors.lastName}</div>}
				{this.props.formErrors.firstName && <div>{this.props.formErrors.firstName}</div>}
				{this.props.formErrors.checkbox && <div>{this.props.formErrors.checkbox}</div>}
			</div>
		)
	}
}

export default FormValidation