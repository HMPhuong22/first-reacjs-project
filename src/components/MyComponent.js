import React from "react";
import EditListMember from "./EditListMember";
import DisplayInf from "./DisplayInf";

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

    render(){
        return(
            <div>
                <EditListMember/>
                <br/><hr/>
                <DisplayInf listUsers = {this.state.listUsers}/>
            </div>
        )
    }
}
 
export default MyComponent;