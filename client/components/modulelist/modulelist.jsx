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
            limit:3,
            currentModule:{test:"test"},
            controlledModalOpen : false
        }
    },
    openModal () {
        this.setState({
          controlledModalOpen : true
        });
      },
    closeModal () {
      this.setState({
        controlledModalOpen : false
      });
    },
    addMore:function(){
        this.setState({limit:this.state.limit + 3});
    },

    editModule(module, e){
      var that = this;
       this.setState({currentModule:module},function(){
        this.refs.moduleName.value = module.moduleName;
        this.refs.technology.value = module.technology;
        this.refs.power.value = module.power;
        this.refs.efficiency.value = module.efficiency;
        console.log(this.state);

       });
    },
    handleChange(moduleName,e){
      var that = this;
      var midState = this.state.currentModule;
      midState.moduleName = that.refs.moduleName.value;
      this.setState({currentModule:midState});
      // console.log(this.state.currentModule);
    },
    changeModule(e){
      e.preventDefault();
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
                                        <input type="text" className="form-control" ref="moduleName" onChange={this.handleChange.bind(this,this.state.currentModule.moduleName)}  placeholder="Module Name"/>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Technology</label>
                                        <input type="text" className="form-control" ref="technology" defaultValue={this.state.currentModule.technology} onChange={this.handleChange} placeholder="Technology"/>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Power</label>
                                        <input type="text" className="form-control" ref="power" defaultValue={this.state.currentModule.power} onChange={this.handleChange} placeholder="Power"/>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Efficiency</label>
                                        <input type="text" className="form-control" ref="efficiency" defaultValue={this.state.currentModule.efficiency} onChange={this.handleChange} placeholder="Efficiency"/>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Price</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Price"/>
                                      </div>
                                      <ConfirmModal currentModule={this.state.currentModule}/>
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