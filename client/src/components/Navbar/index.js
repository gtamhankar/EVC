import React, { Component } from "react";
import "./style.css";


class Navbar extends Component {
  render() {
    return (
	<div>
      <nav className="navbar bg-primary navtest" role="navigation">
      
        <ul className="nav navbar-nav">
          <li className="navbar-left"><h2>{this.props.title}</h2><h6>An Easy way to create your own poll</h6></li>         
          <li className="navbar-center"> </li>        
          <li className="navbar-right">Current User: {this.props.username}</li>          
        </ul>
      
    </nav>
	</div>
    );
  }
}

export default Navbar;