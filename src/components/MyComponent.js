import React from "react";
import EditListMember from "./EditListMember";
import DisplayInf from "./DisplayInf";

class MyComponent extends React.Component {
    state={
        listUsers: [
            {id:1, name:"John", age:25},
            {id:2, name:"Jane", age:30},
            {id:3, name:"Bob", age:35},
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