import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RadioGroup from './Components/RadioGroup';
import TextInput from './Components/TextInput';
import CheckboxGroup from './Components/CheckboxGroup';
import FormValidation from './Components/FormErrors';

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
				lastName: '',
				firstName: '',
				checkbox: ''
			},
			isLastNameValid: false,
			isFirstNameValid: false,
			isCheckboxValid: true,
			showFormErrors: false,
		}
	}

	handleLastNameChange = (event) => {
		this.setState({lastName: event.target.value}, this.validateLastName);
	}

	validateLastName = () => {
		let isValid = false;
		let newFormErrors = this.state.formErrors;

		if(this.state.lastName === "Snow"){
			newFormErrors.lastName = ''
			isValid = true;
			this.setState({isLastNameValid: isValid, formErrors: newFormErrors})
		} else {
			newFormErrors.lastName = 'Try a different Last Name'
			this.setState({isLastNameValid: isValid, formErrors: newFormErrors})
		}
		return isValid;
	}

	handleFirstNameChange = (event) => {
		this.setState({firstName: event.target.value}, this.validateFirstName);
	}

	validateFirstName = () => {
		let isValid = false;
		let newFormErrors = this.state.formErrors;

		if(this.state.firstName === "Jon"){
			newFormErrors.firstName = ''
			isValid = true;
			this.setState({isFirstNameValid: isValid, formErrors: newFormErrors})
		} else {
			newFormErrors.firstName = 'Try a different First Name'
			this.setState({isFirstNameValid: isValid, formErrors: newFormErrors})
		}
		return isValid;
	}

	handleRadioChange = (event) => {
		this.setState({radioSelected: event.target.value});
	}

	handleCheckboxChange = (event) => {
		const i = this.state.array.indexOf(event.target.value);
		//copy full array
		const temp = this.state.currentlyChecked.slice(0);
		//insert toggled value
		temp.splice(i, 1, !temp[i]);

		this.setState({currentlyChecked: temp}, this.validateCheckbox);
	}

	validateCheckbox = () => {
		let isValid = false;
		let newFormErrors = this.state.formErrors;

		//if any of the boxes are checked
		if(this.state.currentlyChecked.some(b => b)){
			newFormErrors.checkbox = ''
			isValid = true;
			this.setState({isFirstNameValid: isValid, formErrors: newFormErrors})
		} else {
			newFormErrors.checkbox = 'Please select at least one Checkbox'
			this.setState({isCheckboxValid: isValid, formErrors: newFormErrors})
		}

		console.log(isValid);
		return isValid;
	}

	handleClick = (event) => {
		event.preventDefault();

		if(this.validateForm()){
			alert("Valid");
		} else {
			alert("Invalid");
			this.setState({showFormErrors: true});
		}
	}

	validateForm = () => {
		const isLastNameValid = this.validateLastName();
		const isFirstNameValid = this.validateFirstName();
		const isCheckboxValid = this.validateCheckbox();

		if(isLastNameValid && isFirstNameValid && isCheckboxValid){
			return true;
		}

		return false;
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
					<h3>Guess a Name!</h3>
					<div>
						<label htmlFor="lastName">Last Name:</label>
						<TextInput value={this.state.lastName} name="lastName" placeholder="Ex: Snow" onChange={this.handleLastNameChange}/>
					</div>
					<div>
						<label htmlFor="firstName">First Name:</label>
						<TextInput value={this.state.firstName} name="firstName" placeholder="Ex: Jon" onChange={this.handleFirstNameChange}/>
					</div>
				</div>
				<div>
					<h3>Which do you like better?</h3>
					<RadioGroup radios={this.state.items} onChange={this.handleRadioChange} checked={this.state.radioSelected}/>
				</div>
				<div>
					<h3>Select at least One:</h3>
					<CheckboxGroup array={this.state.array} currentlyChecked={this.state.currentlyChecked} onChange={this.handleCheckboxChange}/>
				</div>
				<button onClick={this.handleClick}>Submit</button>
			</form>
			{(!this.state.isLastNameValid
				|| !this.state.isFirstNameValid
				|| !this.state.isCheckboxValid)
				&& this.state.showFormErrors
				&& <FormValidation formErrors={this.state.formErrors}/>}
			</div>
		);
	}
}

export default App;
