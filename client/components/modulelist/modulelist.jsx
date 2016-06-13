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
     window.location.href = '/editmodule/'+module._id;
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
          <main className="main-right">
          <InputHeader propsTitle={"Module List"}/>
                <div className="row">
                    <div className="col s12">
                      <table className="responsive-table highlight striped">
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
                   
                   <div className="form-group">
                      <a className="btn-floating btn-large waves-effect waves-light red pull-right" href="/newmodule"><i className="material-icons">add</i></a>
                   </div>
                </div>
                   
            </main>
        )
    }
});