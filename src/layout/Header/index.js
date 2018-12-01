import React, { Component } from "react";
import './index.css';

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between" id="Navmenu">
            <a className="navbar-brand" href="/"> 
            <img src="/images/logo.png" alt="Logo"/> 
              React Assignment</a>
            <form className="form-inline">
                <div className="username"><i className="fa fa-user-circle-o" aria-hidden="true"></i> Shaadi</div>
                <button className="btn btn-outline-success my-2 my-sm-0 logout" type="submit"><i className="fa fa-sign-out" aria-hidden="true"></i></button>
            </form>
      </nav>
    );
  }
}

export default Header;
