import React, { Component, PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'; 
import { createContainer } from 'meteor/react-meteor-data';
import { Modules } from '../api/modules.js';
// Task component - represents a single todo item
class Moduleinput extends Component {

  constructor(props){
    super(props);
    this.state = {
      moduleId: "",
    };
  }
  getMeteorData(){
        let data = {};
        data.currentUser = Meteor.user();
        return data;
  }

  goToHome(){
    $('#home').tab('show')
  }
  goToTechonology(){
    $('#techonology').tab('show')
  }
  goToPower(){
    $('#power').tab('show')
  }
  goToPricing(){
    $('#pricing').tab('show')
  }
  render() {
    return (
    	<div className="page-wrapper">
    	    <div className="container-fluid">

            <div className="panel panel-default">
                <div className="panel-heading">Module List</div>
                    <div className="panel-body">
                        <p>...</p>
                    </div>
                    <div>

                      <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active" onClick={this.goToHome.bind(this)}><a aria-controls="home" type="button" role="tab" data-toggle="tab" >General Information</a></li>
                        <li role="presentation"><a aria-controls="profile" role="tab" data-toggle="tab" onClick={this.goToTechonology.bind(this)}>Techonology</a></li>
                        <li role="presentation"><a aria-controls="messages" role="tab" data-toggle="tab" onClick={this.goToPower.bind(this)}>Power</a></li>
                        <li role="presentation"><a aria-controls="settings" role="tab" data-toggle="tab" onClick={this.goToPricing.bind(this)}>Pricing</a></li>
                      </ul>

                      <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="home">General Information</div>
                        <div role="tabpanel" className="tab-pane" id="techonology">Techonology</div>
                        <div role="tabpanel" className="tab-pane" id="power">Power</div>
                        <div role="tabpanel" className="tab-pane" id="pricing">Pricing</div>
                      </div>

                    </div>           
                </div>
    	    </div>
		</div>
    );
  }
}

export default createContainer(() => {
  return {
    modules: Modules.find({}).fetch(),
  };
}, Moduleinput);