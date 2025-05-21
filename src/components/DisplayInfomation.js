import React from "react";
import logo from './../logo.svg';
import { getValue } from "@testing-library/user-event/dist/utils";

class DisplayInfomation extends React.Component{
    state = {
        check: true   
    }

    // Click to hide infomation
    handleClickHide = () => {
        this.setState({
            check: false
        })
    }

    // Click to hide infomation
    handleClickShow = () => {
        this.setState({
            check: true
        })
    }

    render(){
        const {listUsers} = this.props;
        return(
            <div className="display-container">
                <img src={logo} className="logo-reactjs"/>
                <h1>Thông tin</h1>
                {
                    this.state.check?
                    (<button onClick={() => this.handleClickHide()}>Ẩn thông tin</button>):
                    <button onClick={() => this.handleClickShow()}>Hiện thông tin</button>
                }
                
                {this.state.check && 
                    <div>   
                        {listUsers.map((user) => {
                            return( 
                                    <div key={user.id} className={+user.age > 18? "green":"red"}>
                                        <span>ID: {user.id}</span><br/>
                                        <span>Name: {user.name}</span><br/>
                                        <span>Age: {user.age}</span><br/>
                                        <button onClick={() => this.props.deleteUser(user.id)}>Xóa</button><hr/>
                                    </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfomation;