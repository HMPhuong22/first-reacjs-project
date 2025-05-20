import React from "react";
import EditListMember from "./EditListMember";
import DisplayInf from "./DisplayInf";

class MyComponent extends React.Component {
    state={
        name: 'Phuong dey',
        age: 23
    }

    render(){
        return(
            <div>
                <EditListMember/>
                <br/><hr/>
                <DisplayInf name={this.state.name} age={this.state.age}/>
            </div>
        )
    }
}
 
export default MyComponent;