import React from "react";

class DisplayInf extends React.Component{
    render(){
        const {name, age} = this.props;
        return(
            <div>
                <h1>Hiển thị thông tin</h1>
                <span>Name: {name}</span><br/>
                <span>Age: {age}</span>
            </div>
        )
    }
}

export default DisplayInf;