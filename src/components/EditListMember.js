import React from "react";

class EditListMember extends React.Component {
    // Data
    state = {
        name: "Ha Minh Phuong",
        sex: "Male",
        age: 23,
        address: "Hoa Binh province"
    }

    // edit data
    handleEditName = (event) => {
        this.setState({
            name: event.target.value,
        })  
        event.preventDefault();
        console.log(this.state)
    }
    handleEditAge = (event) => {
        this.setState({
            age: event.target.value,
        })  
        event.preventDefault();
        console.log(this.state)
    }
    handleEditSex = (event) => {
        this.setState({
            sex: event.target.value,
        })  
        event.preventDefault();
    }

    handleEditAddress = (event) => {
        this.setState({
            address: event.target.value,
        })  
        event.preventDefault();
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
    }

    render(){
        return( 
            <div>   
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <table id='head'>
                        <tr>
                            <td><label>Name:</label></td>
                            <td><input type="text" id="fname" name="fname" value={this.state.name} onChange={(event) => this.handleEditName(event)}/><br/></td>
                        </tr>
                        <tr>
                            <td><label>Age:</label></td>
                            <td><input type="text" id="lname" name="lname" value={this.state.age} onChange={(event) => this.handleEditAge(event)}/><br/></td>
                        </tr>
                        <tr>
                            <td><label>Sex:</label></td>
                            <td><input type="text" id="lname" name="lname" value={this.state.sex} onChange={(event) => this.handleEditSex(event)}/><br/></td>
                        </tr>
                        <tr>
                            <td><label>Address:</label></td>
                            <td><input type="text" id="lname" name="lname" value={this.state.address} onChange={(event) => this.handleEditAddress(event)}/><br/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button type="submit">Submit</button></td>
                        </tr>
                    </table> 
                </form>
                <br/>
                <hr/>
                <br/>
                <table id='content'>
                    <tr>
                        <th>Name</th>
                        <th>Age</th> 
                        <th>Sex</th>
                        <th>Address</th>
                    </tr>
                    <tr>
                        <td>{this.state.name}</td>
                        <td>{this.state.age}</td>
                        <td>{this.state.sex}</td>
                        <td>{this.state.address}</td>
                    </tr>
                    </table>
            </div>
        )
    }
}

export default EditListMember;