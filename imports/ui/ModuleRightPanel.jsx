import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import TrackerReact from 'meteor/ultimatejs:tracker-react';


// import {FS} from 'meteor/cfs:standard-packages';
import { Modules } from '../api/modules.js';
// import { Images } from '../api/images.js';
      if(!imageStore){
        var imageStore = new FS.Store.S3("images", {});
      }
      
      if(!Images){
        var Images = new FS.Collection("Images", {
          stores: [imageStore],
          filter: {
            allow: {
              contentTypes: ['image/*']
            }
          }
        });
      }
      Images.allow({
        insert: function() { return true; },
        update: function() { return true; },
        download: function() { return true; }
      });
export default class ModuleRightPanel extends Component {
  
    constructor(props) {
      super(props);
   
      this.state = {
        data_uri: null,
        subscription: {
            tasks: Meteor.subscribe('images')
          }
      };
    }

    tasks() {
      return Images.find({},{sort:{uploadedAt:-1}, limit: 1}).fetch(); //fetch must be called to trigger reactivity
    }

    handleSubmit(event) {
      event.preventDefault();
   
      // Find the text field via the React ref
      const power = ReactDOM.findDOMNode(document.getElementById("powerInput")).value.trim();
      const efficiency = ReactDOM.findDOMNode(document.getElementById("EfficiencyInput")).value.trim();
   
      Modules.insert({
        "power":"50W",
        "efficiency":"50%",
        createdAt: new Date(), // current time
      });
   
      // Clear form
      ReactDOM.findDOMNode(document.getElementById("powerInput")).value = '';
      ReactDOM.findDOMNode(document.getElementById("EfficiencyInput")).value = '';


      

    }

    handleFile(e) {
      var self = this;
      var reader = new FileReader();
      var file = e.target.files[0];
      console.log(file);

      reader.onload = function(upload) {
        this.state = {
          data_uri: upload.target.result,
        };
      }
      
      






      var newFile = new FS.File(file);
      Images.insert(newFile, function (error, fileObj) {
          if (error) {
            toastr.error("Upload failed... please try again.");
            console.log(error);
          } else {
            toastr.success('Upload succeeded!');
            ModuleRightPanel.tasks();
          }
      });


    }
   
  render() {
    return (
      <div className="panel panel-primary">
                    <div className="panel-heading">
                      <h3 className="panel-title">Modules</h3>
                    </div>
                    <div className="panel-body">
                      <form>
                        <div className="form-group">
                          <label for="powerInput">Power</label>
                          <input type="text" className="form-control" id="powerInput" placeholder="power"/>
                        </div>
                        <div className="form-group">
                          <label for="EfficiencyInput">Efficiency</label>
                          <input type="text" className="form-control" id="EfficiencyInput" placeholder="Efficiency"/>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputFile">Product Image</label>
                          <input type="file" id="exampleInputFile" onChange={this.handleFile.bind(this)}></input>
                            <div>
                                {this.tasks().map((image) => {
                                  console.log(image);
                                  return <a key={image._id} href={image.url()} target="_blank" className="thumbnail"><img key={image.copies.images.key} src={image.url()}/></a>;
                                })}
                            </div>
                          <p className="help-block">Product image will be displayed as it is.</p>
                        </div>
                        <button type="submit" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Submit</button>
                      </form>
                    </div>
                  </div>
    );
  }
}
