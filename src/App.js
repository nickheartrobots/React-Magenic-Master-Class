import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RadioGroup from './Components/RadioGroup';
import TextInput from './Components/TextInput';
import CheckboxGroup from './Components/CheckboxGroup';

class FormValidation extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="Validation">
				{this.props.formErrors.lastName && <div>{this.props.formErrors.lastName}</div>}
			</div>
		)
	}
}




class App extends Component {
	constructor(props) {
		super(props);
		
		const stuff = ["Cake", "The Letter Q", "Bread", "Robots", "Dr. Pepper"];
		
		this.state = {
			lastName: "",
			firstName: "",
			items: stuff,
			radioSelected: stuff[0],
			array: ["Happy", "Angry", "Sad", "Cranky", "Silly", "Wild"],
			currentlyChecked: [false, false, false, false, false, false],
			formErrors: {
				lastName: 'asasfa'
			},
			showFormErrors: false,
			formValid: false
		}
	}

	handleLastNameChange = (event) => {
		this.setState({lastName: event.target.value}, this.validateLastName);
	}

	handleFirstNameChange = (event) => {
		this.setState({firstName: event.target.value});
	}

	handleClick = (event) => {
		event.preventDefault();
		this.validateForm();

		if(this.state.formValid === true){
			alert("Valid");
		} else {
			alert("Invalid");
			this.setState({showFormErrors: true});
		}
	}

	validateLastName = () => {
		let valid = false;
		
		if(this.state.lastName === "Clarity"){
			this.setState({formValid: true, showFormErrors: false})
		} else {
			let newFormErrors = this.state.formErrors;
			newFormErrors.lastName = 'its broken bitch!'
			this.setState({formErrors: newFormErrors})
		}

		return valid;
	}

	validateForm = () => {
	}

	handleRadioChange = (event) => {
		//console.log(`App.js clicked: ${event.target.value}`)
		this.setState({radioSelected: event.target.value});
	}

	handleCheckboxChange = (event) => {
		const i = this.state.array.indexOf(event.target.value);
		const t = this.state.currentlyChecked.slice(0);
		t.splice(i, 1, !t[i]);

		this.setState({currentlyChecked: t});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<form>
				<h2>Random Survey!</h2>
				<div>
					<label htmlFor="lastName">Last Name:</label>
					<TextInput value={this.state.lastName} name="lastName" placeholder="Ex: Snow" onChange={this.handleLastNameChange}/>
				</div>
				<div>
					<label htmlFor="firstName">First Name:</label>
					<TextInput value={this.state.firstName} name="firstName" placeholder="Ex: Jon" onChange={this.handleFirstNameChange}/>
				</div>
				<div>
					<h3>Which do you like better?</h3>
					<RadioGroup radios={this.state.items} onChange={this.handleRadioChange} checked={this.state.radioSelected}/>
				</div>
				<div>
					<h3>Check all that apply:</h3>
					<CheckboxGroup array={this.state.array} currentlyChecked={this.state.currentlyChecked} onChange={this.handleCheckboxChange}/>
				</div>
				<button onClick={this.handleClick}>Submit</button>
			</form>
			{false && <FormValidation formErrors={this.state.formErrors}/>}
			</div>
		);
	}
}

export default App;
