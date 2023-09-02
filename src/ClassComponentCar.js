import React, { Component } from 'react'

export class ClassComponentCar extends Component {
    constructor(props){
        super(props);
        this.state={
            brand:"Ford",
            model:"Mustang",
            color:"blue",
            year:"2010"
        };
    }
    changeColor=()=>{
        this.setState({color:" green "});
    }
  render() {
    return (
      <div>
        <h1>Car Company : {this.state.brand}</h1>
        <p>
            It is a {this.state.color} {this.state.model} {this.state.year}.   
        </p>
        <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    )
  }
}

export default ClassComponentCar