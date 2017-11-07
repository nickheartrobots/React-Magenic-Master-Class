import React, { Component } from 'react';

class RadioGroup extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
		return (
			<div>
				{this.props.groupStuff.array.map(i => {
					return (
						<div key={i}>
							<input type="radio" name={this.props.groupStuff.groupName} value={i} onChange={this.props.onChange} checked={this.props.checked === i ? true : false}/> {i}
						</div>
					);
				})}
			</div>)
	}
}

export default RadioGroup;