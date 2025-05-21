import React from "react";

class DisplayInf extends React.Component{
    render(){
        const {listUsers} = this.props;
        return(
            <div>
                <h1>Hiển thị thông tin</h1>
                {listUsers.map((user) => {
                    return(
                        <div key={user.id}>
                            <span>ID: {user.id}</span><br/>
                            <span>Name: {user.name}</span><br/>
                            <span>Age: {user.age}</span><hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInf;