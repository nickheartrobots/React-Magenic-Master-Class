import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LastNameInput extends Component {
	constructor(props){
		super(props);

		this.state = {
			lastName: "",
			placeholder: "Ex: Snow",
		}
	}
	
	handleChange = (event) => {
		this.setState({lastName: event.target.value});
	}

	render(){
		return <input name="lastName" type="text" onChange={this.handleChange} placeholder={this.state.placeholder} value={this.state.lastName} />;
	}
}

class FirstNameInput extends Component {
	constructor(props){
		super(props);

		this.state = {
			firstName: "",
			placeholder: "Ex: Jon",
		}
	}
	
	handleChange = (event) => {
		this.setState({firstName: event.target.value});
	}

	render(){
		return <input name="firstName" type="text" onChange={this.handleChange} placeholder={this.state.placeholder} value={this.state.lastName} />;
	}
}

class RadioGroup extends Component {
	constructor(props){
		super(props);

		const array = ["Cake", "The Letter Q", "Bread", "Robots", "Dr. Pepper"];
		
		this.state = {
			array: array,
			currentlyChecked: array[0]
		}
	}
	
	handleChange = (event) => {
		this.setState({ currentlyChecked: event.target.value});
	}

	render(){
		return (
			<div>
				{this.state.array.map(i => {
					return (
						<div key={i}>
							<input type="radio" name="radioGroup" value={i} onChange={this.handleChange} checked={this.state.currentlyChecked === i ? true : false}/> {i}
						</div>
					);
				})}
			</div>)
	}
}

class CheckboxGroup extends Component {
	constructor(props){
		super(props);

		this.state = {
			array: ["Happy", "Angry", "Sad", "Cranky", "Silly", "Wild"],
			currentlyChecked: [false, false, false, false, false, false]
		}
	}
	
	handleChange = (event) => {
		// .splice(index, remove one item/old value, new value) creates a new array and toggles the bool of the previous state
		const i = this.state.array.indexOf(event.target.value);
		this.setState({currentlyChecked: this.state.currentlyChecked.splice(i, 1, !this.state.currentlyChecked[i])});

		// .map() array of strings to an array of bools setting to true when value matches 
		// this.setState({ currentlyChecked: this.state.array.map((name) => {
		// 	return name === event.target.value ? true : false;
		// })});
	}

	render(){
		return (
			<div>
				{this.state.array.map(i => {
					return (
						<div key={i}>
							<input type="checkbox" name="checkboxGroup" value={i} onChange={this.handleChange} checked={this.state.currentlyChecked[i]}/> {i}
						</div>
					);
				})}
			</div>)
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			lastName: "",
			firstName: "",
		}
	}


	handleSubmitClick = (event) => {
		event.preventDefault();
		alert("Form Submitted");
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
					<label htmlFor="firstName">First Name:</label>
					<FirstNameInput />
				</div>
				<div>
					<label htmlFor="lastName">Last Name:</label>
					<LastNameInput />
				</div>
				<div>
					<h3>Which is your favorite?</h3>
					<RadioGroup />
				</div>
				<div>
					<h3>Check all that apply:</h3>
					<CheckboxGroup />
				</div>
				<div>
					<button onClick={this.handleSubmitClick}>Submit</button>
				</div>
			</form>
			</div>
		);
	}
}

export default App;
