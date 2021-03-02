import React, { Component } from "react";
      const scaleNames = {
        c: "Celsius",
        f: "Fahrenheit",
      };
export default class TempInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    //   this.setState({temperature:event.target.value});
      this.props.onTemperatureChange(event.target.value);
  }
  render() {

    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <div className="mx-auto">
        <h1>Enter temperature in {scaleNames[scale]}:</h1>
        <input value={temperature} onChange={this.handleChange} />
      </div>
    );
  }
}
