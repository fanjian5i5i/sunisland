import React, { Component, PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'; 
import { createContainer } from 'meteor/react-meteor-data';
import { Modules } from '../api/modules.js';
// Task component - represents a single todo item
class ContentPanel extends Component {

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
  handleEdit(){

  }
  handleDelete(){

  }
  handleAddNew(e){
     e.preventDefault();

     console.log(this.state);
  }
  render() {
    let that = this;
    function onRowSelect(row, isSelected){
       that.setState({
        moduleId: row._id,
      });
    }

    function onSelectAll(isSelected){
      console.log("is select all: " + isSelected);
    }
    var selectRowProp = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)",
      onSelect: onRowSelect,
      onSelectAll: onSelectAll
    };
    return (
    	<div className="page-wrapper">
    	    <div className="container-fluid">

            <div className="panel panel-default">
                <div className="panel-heading">Module List</div>
                    <div className="panel-body">
                        <p>...</p>
                    </div>
                    <div className="react-bs-table-tool-bar-btn-group">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-8">
                            <div className="btn-group btn-group-sm react-bs-table-tool-bar-btn-group" role="group">
                                <button type="button" className="btn btn-info react-bs-table-add-btn" onClick={this.handleAddNew.bind(this)}>
                                <i className="glyphicon glyphicon-plus"></i>Add
                                </button>
                                <button type="button" className="btn btn-success react-bs-table-add-btn">
                                <i className="glyphicon glyphicon-edit"></i>Edit
                                </button>
                                <button type="button" className="btn btn-warning react-bs-table-add-btn">
                                <i className="glyphicon glyphicon-trash"></i>Delete
                                </button>
                            </div>
                        </div>
                    </div>
                    <BootstrapTable data={this.props.modules} selectRow={selectRowProp} striped={true} hover={true} condensed={true} search={true}>
                      <TableHeaderColumn dataField="_id" isKey={true}>Product ID</TableHeaderColumn>
                      <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
                      <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
                    </BootstrapTable>

                    
                                
                                
                </div>
    	    </div>
		</div>
    );
  }
}

// ContentPanel.propTypes = {
//   modules: PropTypes.array.isRequired,
// };

export default createContainer(() => {
  return {
    modules: Modules.find({}).fetch(),
  };
}, ContentPanel);