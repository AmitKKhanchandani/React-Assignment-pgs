import React, { Component } from "react";
import "./index.css";
import Store from "../../utils/store";

class Login extends Component {
  
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: '',
            alert: false
        }
    }

    handleOnChangeInput = evt =>{
        this.setState({[evt.target.id]: evt.target.value});
    }

    handleSubmit = (e) => {
        const state = this.state;
        e.preventDefault();
        e.stopPropagation();
        var username = state.username;
        var password = state.password;
        if(username === "shaadi" && password === "123"){
            Store.store.dispatch({
                type: "LOGIN"
            });
        }
        else{
            this.setState({
                alert: true,
                username: "",
                password: ""
            });
        }
    }


    render() {
        const state = this.state;
        return (
        
        <div id="LoginForm">
            <div className="container">
            <div className="login-form">
                <div className="main-div">
                <div className="panel">
                    <img
                    src="images/logo.png"
                    className="img-responsive logo"
                    alt="Logo"
                    />

                    <p>Please enter username and password</p>
                </div>
                <form id="Login" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        required
                        onChange={this.handleOnChangeInput}
                        placeholder="Username"
                        value={state.username}
                    />
                    </div>

                    <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        required
                        onChange={this.handleOnChangeInput}
                        placeholder="Password"
                        value={state.password}
                    />
                    </div>
                    {(state.alert) &&
                        <div className="alert alert-danger" role="alert">
                            The User Name or Password entered is incorrect.  Please try again.
                        </div>
                    }
                    <button type="submit" className="btn btn-primary">
                    Login
                    </button>
                </form>
                </div>
                <p>Designed by Amit K Khanchandani</p>
            </div>
            </div>
        </div>
        );
    }
}

export default Login;
