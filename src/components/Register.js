import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state={value:""};
        this.nameHandle=this.nameHandle.bind(this);
        // this.dateHandle=this.dateHandle.bind(this);
    }
    nameHandle=(event)=>{
        this.setState({value:event.target.value});
        alert(this.state.value);
    }


    render() {
        return (
          <div>
            <div className="container mx-auto">
              <form
                className="flex flex-col justify-center bg-blue-300"
                onSubmit={this.formHandle}
              >
                <div className="mx-auto font-extrabold">Register Form</div>
                <div className="text-center mx-auto p-10">
                  <label>
                    <span className="p-5">Name:</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter name.."
                      value={this.state.value}
                      onChange={this.nameHandle}
                    />
                  </label>
                </div>
                <div className="text-center mx-auto p-10">
                  <label>
                    <span className="p-5">Date of Birth:</span>
                    <input type="date" onClick={this.dateHandle} name="date"/>
                  </label>
                </div>
                <div className="text-center mx-auto p-5">
                  <button
                    className="bg-blue-700 p-2 pl-5 pr-5 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
    }
}
