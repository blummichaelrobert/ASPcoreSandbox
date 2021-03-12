import React, { Component } from "react";
import { SelectedTeam } from "./selected-team";

export class BaseballContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getYankees() {
		alert('Fetching Yankees!');
	}

	render() {
		return (
			<div style={{backgroundColor: 'grey'}}>
				<h1>Baseball Works!</h1>
				<button onClick={() => this.getYankees()}>Get Yankees</button>
				<SelectedTeam></SelectedTeam>
			</div>
		);
	}
}