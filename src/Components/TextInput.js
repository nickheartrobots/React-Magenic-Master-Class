import React, { Component } from 'react';

class TextInput extends Component {
	render(){
		return <input name={this.props.name} type="text" onChange={this.props.onChange} placeholder={this.props.placeholder} value={this.props.value} />;
	}
}

export default TextInput;