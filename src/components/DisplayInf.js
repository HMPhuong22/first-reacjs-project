import React from "react";

class DisplayInf extends React.Component{
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
            <div>
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
                                        <span>Age: {user.age}</span><hr/>
                                    </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInf;