import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Header extends Component {
  handleSubmit(){

  }
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">SUN ISLAND Product Manager</a>
          </div>

          <div className="collapse navbar-collapse" id="navigation">
            <ul className="nav navbar-nav">
            </ul>
            <ul className="nav navbar-nav navbar-right">
            	<form onSubmit={this.handleSubmit} id="signin" className="navbar-form navbar-right" role="form">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        <input id="email" type="email" className="form-control" ref="email" name="email"
                               placeholder="Email Address"/>
                    </div>

                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                        <input id="password" type="password" className="form-control" ref="password" name="password"
                               placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <br/>
                </form>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
