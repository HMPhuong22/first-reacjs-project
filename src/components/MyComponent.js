import React from "react";
import EditListMember from "./EditListMember";
import DisplayInfomation from "./DisplayInfomation";
import "./DisplayInfomation.scss";

class MyComponent extends React.Component {
    state={
        listUsers: [
            {id:1, name:"John", age:25},
            {id:2, name:"Jane", age:30},
            {id:3, name:"Bob", age:35},
            {id:4, name:"John Nathan", age:14},
            {id:5, name:"Kelia", age:12},
            {id:6, name:"Phuong", age:23},
            {id:7, name:"David", age:11},
        ]
    }

    addUser = (value) => {
        console.log("Check value: ", value)
        this.setState({
            listUsers: [value, ...this.state.listUsers]
        })
    }

    deleteUser = (idValue) => {
        let listUsersClone = [...this.state.listUsers]
        const listUsersNew = listUsersClone.filter((users) => users.id !== idValue)
        this.setState({
            listUsers: listUsersNew
        })
    }

    render(){
        return(
            // fragment
            <>
                <EditListMember listUsers = {this.state.listUsers} addUser = {this.addUser}/>
                <br/><hr/>
                <DisplayInfomation listUsers = {this.state.listUsers} deleteUser = {this.deleteUser}/>
            </>
        )
    }
}
 
export default MyComponent;