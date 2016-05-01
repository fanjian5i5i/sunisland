import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Sidebar extends Component {
  handleSubmit(){

  }
  render() {
    return (
    	<div className="wrapper">
    	    <div className="sidebar-wrapper">
    	        <ul className="sidebar-nav">
    	            <li>
    	                <a href="#">Account</a>
    	            </li>
    	            <li>
    	                <a href="#">Modules</a>
    	            </li>
    	            <li>
    	                <a href="#">Inverter</a>
    	            </li>
    	        </ul>
    	    </div>

		</div>
    );
  }
}
