import React from "react";

class InformationComponent extends React.Component {

    state = {
        name: "phuong",
        age: 23,
        address: "HB"
      }

    handleOnSubmit = (event) =>{
        this.setState({
          name: event.target.value
        })
        event.preventDefault()
        console.log(this.state)
    }

    render(){
            return (
              <div>
                Name: {this.state.name} - Age: {this.state.age} - Address: {this.state.address}
                <button onClick={this.eventClick}>Click Me</button>
        
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                  <input type="text" value={this.state.name} onChange={(event) => {this.handleOnSubmit(event)}}/>
                  <button type="submit">Save</button>
                </form>
              </div>
            );  
    }
}
export default InformationComponent;