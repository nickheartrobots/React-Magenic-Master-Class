import React, { Component } from 'react';

class CheckboxGroup extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.array.map(i => {
                    return (
                        <div key={i}>
                            <input type="checkbox" name="checkboxGroup" value={i} onChange={this.props.onChange} checked={this.props.currentlyChecked[i]}/> {i}
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default CheckboxGroup