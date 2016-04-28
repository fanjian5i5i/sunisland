import React, { Component, PropTypes } from 'react';
// Task component - represents a single todo item
export default class ModuleLeftPanel extends Component {
  render() {
    return (


            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Modules</h3>
              </div>
              <div className="panel-body panel-body-left">
                <div className="list-group">
                  <a href="#" className="list-group-item active">
                    Modules 1
                  </a>
                  <a href="#" className="list-group-item">Module 2
                  </a>
                  <a href="#" className="list-group-item">Module 3
                  </a>
                  <a href="#" className="list-group-item">Module 4
                  </a>
                  <a href="#" className="list-group-item">Module 5
                  </a>
                  <a href="#" className="list-group-item">Module 6
                  </a>
                  <a href="#" className="list-group-item">Module 7
                  </a>
                  <a href="#" className="list-group-item">Module 8
                  </a>
                  <a href="#" className="list-group-item">Module 9
                  </a>
                  <a href="#" className="list-group-item">Module 10
                  </a>

                </div>
              </div>
            </div>


      
    );
  }
}
