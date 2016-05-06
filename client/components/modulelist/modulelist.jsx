Modulelist = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        let data = {};
        data.modules = [];
        var modulehandle = Meteor.subscribe('modules');
        if(modulehandle.ready()){
            data.modules = Modules.find({},{}).fetch();
        }

        return data;
    },
    getInitialState(){
        return {
            limit:3
        }
    },
    addMore:function(){
        this.setState({limit:this.state.limit + 3});
    },

    editModule(module, e){
      console.log(this.data.modules);
       console.log(module);
    },

    render(){
      var that = this;
        var modules = this.data.modules.map(function (module) {
              
            
            return (<tr type="button" key={module._id} module={module} onClick={that.editModule.bind(this, module)}>
                <td>{module.moduleName}</td>
                <td>{module.technology}</td>
                <td>{module.power}</td>
                <td>{module.efficiency}</td>
                <td>$12</td>
              </tr>);
        }.bind(this));
        return (
            <div className="col-sm-10 col-xs-11" id="main">
                <div>
                    <div className="full col-sm-9">
                        <div className="row">
                            <div className="col-sm-9">
                              <div className="panel panel-default">
                                <div className="panel-heading">
                                  <h3 className="panel-title">Panel title</h3>
                                </div>
                              <div className="panel-body">    
                                  <table className="table table-responsive table-hover">
                                    <thead>
                                      <tr>
                                        <th>Module Name</th>
                                        <th>Technology</th>
                                        <th>Power</th>
                                        <th>Efficiency</th>
                                        <th>Price</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {modules}
                                    </tbody>
                                  </table>
                               </div>     
                               </div>

                            </div>
                            <div className="col-sm-3">
                                <div className="panel panel-default">
                                  <div className="panel-heading">
                                    <h3 className="panel-title">Edit</h3>
                                  </div>
                                  <div className="panel-body">
                                    <form>
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Module Name</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                      </div>
                                      <button type="submit" className="btn btn-default">Submit</button>
                                    </form>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});