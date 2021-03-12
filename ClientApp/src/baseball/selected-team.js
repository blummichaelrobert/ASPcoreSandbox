import React, { Component } from "react";


export class SelectedTeam extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{width: '30vw'}}>
                <h3>Selected Team</h3>
                <div>P:</div>
                <div>C:</div>
                <div>1B:</div>
                <div>2B:</div>
                <div>3B:</div>
                <div>SS:</div>
                <div>OF:</div>
                <div>OF:</div>
                <div>OF:</div>
                <div>DH:</div>
            </div>
        );
    }
}