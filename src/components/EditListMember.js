import React from "react";

class EditListMember extends React.Component {
    // Data

    // edit data
    handleEditId = (event) => {
        this.setState({
            id: event.target.value,
        })  
        event.preventDefault();
        console.log(this.state)
    }
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

    // submit
    handleOnSubmit = (event) => {
        const addUser = this.props.addUser({
            id: (Math.floor(Math.random() * 100) + 1) + "-ramdom",
            name: this.state.name,
            age: this.state.age,
        });
        event.preventDefault();
    }

    render(){
        return( 
            <div>  
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <table id='head'>
                        <tbody>
                            <tr>
                                <td><label>Name:</label></td>
                                <td><input type="text" onChange={(event) => this.handleEditName(event)}/><br/></td>
                            </tr>
                            <tr>
                                <td><label>Age:</label></td>
                                <td><input type="text" onChange={(event) => this.handleEditAge(event)}/><br/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button type="submit">Submit</button></td>
                            </tr>
                        </tbody>
                    </table> 
                </form>
            </div>
        )
    }
}

export default EditListMember;