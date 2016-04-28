Home = React.createClass({

  modules() {
  	  // Meteor.subscribe('modules');
  	  // console.log(Modules.find({}).fetch());
  	  // var handle = Meteor.subscribe('modules');
  	  // if(handle.ready()) {
     //  	var dModules.find({}).fetch();
     //  }
      
      Meteor.subscribe("modules", function(){
	      console.log(Modules, Modules.find(), Modules.find().fetch());
	      return Modules.find({}).fetch();
	   });
      
      	 //fetch must be called to trigger reactivity
      // return [{name:"123", power:"234", price:"345"}
      // 	]
  },
  renderModules() {
  	// console.log(Modules.find({}).fetch());
    return this.modules().map((module) => (
      <tr>
      	<td>{module.name}</td>
        <td>{module.power}</td>
        <td>${module.price}</td>
      </tr>
    ));
  },
  render() {
    return (
      <div className="container">
        <table className="highlight">
                <thead>
                  <tr>
                      <th data-field="id">Name</th>
                      <th data-field="name">Item Name</th>
                      <th data-field="price">Item Price</th>
                  </tr>
                </thead>

                <tbody>
                  {this.renderModules()}
                </tbody>
              </table>
      </div>
    );
  }
});
