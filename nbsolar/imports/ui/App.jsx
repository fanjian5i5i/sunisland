import React, { Component } from 'react';
 
import Task from './Task.jsx';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Moduleinput from './Moduleinput.jsx'; 
// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }
 
  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    return (
      <div className="">
          <Header/>
          <div className="wrapper">
            <Sidebar/>
          </div>
          <div className="wrapper">
            <Moduleinput/>  
          </div>
      </div>
    );
  }
}