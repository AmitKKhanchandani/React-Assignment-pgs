import React, { Component } from "react";
import './index.css';
import Store from '../../utils/store';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      logoUrl: window.location.href + 'images/logo.png'
    }
    
    // Bindings
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleLogout(e){
    e.preventDefault();

    Store.store.dispatch({
      type: 'CLEAR'
    });
    Store.store.dispatch({
      type: 'LOGOUT'
    });

  }

  render() {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between" id="Navmenu">
            <a className="navbar-brand" href="/"> 
            <img src={this.state.logoUrl} alt="Logo"/> 
              React Assignment</a>
            <form className="form-inline" onSubmit={this.handleLogout}>
                <div className="username"><i className="fa fa-user-circle-o" aria-hidden="true"></i> Shaadi</div>
                <button className="btn btn-outline-success my-2 my-sm-0 logout" type="submit"><i className="fa fa-sign-out" aria-hidden="true"></i></button>
            </form>
      </nav>
    );
  }
}

export default Header;
