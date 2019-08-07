import React from 'react';
import Radios from "./Radios";
import CheckBoxes from "./CheckBoxes";
import Display from "./Display";

export default class Inputs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedRadioButton: 'none',
            message: 'none',
            checkBoxes: {borders: false, colors: false},
            checkedCount: 0,
            checkSelected: 'none'
        };
    }

    handleRadioChange = event => {
        this.setState({checkedRadioButton: event.target.value});
    };

    useButtonSelection = () => {
        this.setState({
            message: "You've chosen " + this.state.checkedRadioButton
        });
    };

    checkBoxReport = (event) => {
        this.state.checkBoxes[event.target.name] = event.target.checked;
        let selected = [];
        let checkedCount = 0;
        for (let box in this.state.checkBoxes) {
            if(this.state.checkBoxes[box]) {
                checkedCount++;
                selected.push(box);
            }
        }
        this.setState({checkSelected: selected.join(), checkedCount: checkedCount, checkBoxes: this.state.checkBoxes})
    };

    render() {
        return (
            <form>
                <h2>Text Input</h2>
                <div className="preference bordered">
                    <label htmlFor="name-search">Timer Name</label>
                    <input type="text" id="name-search"></input>
                </div>

                <div className="preference bordered">
                    <label htmlFor="username">Time</label>
                    <input type="number" id="time-search" defaultValue="0"></input>
                </div>

                <CheckBoxes checkBoxes={this.state.checkBoxes} checkBoxReport={this.checkBoxReport}/>

                <Radios
                    handleRadioChange={this.handleRadioChange}
                    useButtonSelection={this.useButtonSelection}
                    checkedRadioButton={this.state.checkedRadioButton}
                    message={this.state.message}/>

                <Display
                    checkedRadioButton={this.state.checkedRadioButton}
                    message={this.state.message}
                    checkSelected={this.state.checkSelected}
                    checkedCount={this.state.checkedCount}
                />
            </form>
        );
    }
}
