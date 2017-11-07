import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RadioGroup from './Components/RadioGroup';
import TextInput from './Components/TextInput';
import CheckboxGroup from './Components/CheckboxGroup';

class App extends Component {
	constructor(props) {
		super(props);
		
		const stuff = {"groupName": "items1", array: ["Cake", "The Letter Q", "Bread", "Robots", "Dr. Pepper"] };
		
		this.state = {
			lastName: "",
			firstName: "",
			items: stuff,
			radioSelected: stuff.array[0],
			array: ["Happy", "Angry", "Sad", "Cranky", "Silly", "Wild"],
			currentlyChecked: [false, false, false, false, false, false]
		}
	}

	handleLastNameChange = (event) => {
		this.setState({lastName: event.target.value});
	}

	handleFirstNameChange = (event) => {
		this.setState({firstName: event.target.value});
	}

	handleClick = (event) => {
		event.preventDefault();
		alert(this.state.radioSelected);
	}

	handleRadioChange =(event) => {
		console.log(event.target.value)
		this.setState({radioSelected: event.target.value});
		event.preventDefault();
	}

	handleCheckboxChange = (event) => {
		// .splice(index, remove one item/old value, new value) creates a new array and toggles the bool of the previous state
		const i = this.state.array.indexOf(event.target.value);
		this.setState({currentlyChecked: this.state.currentlyChecked.splice(i, 1, !this.state.currentlyChecked[i])});

		// .map() array of strings to an array of bools setting to true when value matches 
		// this.setState({ currentlyChecked: this.state.array.map((name) => {
		// 	return name === event.target.value ? true : false;
		// })});
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
					<RadioGroup groupStuff={this.state.items} onChange={this.handleRadioChange} checked={this.state.radioSelected}/>
				</div>
				<div>
					<h3>Check all that apply:</h3>
					<CheckboxGroup array={this.state.array} currentlyChecked={this.state.currentlyChecked} onChange={this.handleCheckboxChange}/>
				</div>
				<button onClick={this.handleClick}>Submit</button>
			</form>
			</div>
		);
	}
}

export default App;
