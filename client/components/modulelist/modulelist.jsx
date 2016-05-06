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

    render(){
        var modules = this.data.modules.map(function (module) {
            return <a href="#" className="list-group-item" key={module._id} module={module}>{module.moduleName}</a>
        });
        return (
            <div className="col-sm-10 col-xs-11" id="main">
                <div>
                    <div className="full col-sm-9">
                        <div className="row">
                            <div className="col-sm-9">
                                <div className="list-group">
                                  {modules}
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="panel panel-default">
                                  <div className="panel-heading">
                                    <h3 className="panel-title">Panel title</h3>
                                  </div>
                                  <div className="panel-body">
                                    <form>
                                      <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleInputFile">File input</label>
                                        <input type="file" id="exampleInputFile"/>
                                        <p className="help-block">Example block-level help text here.</p>
                                      </div>
                                      <div className="checkbox">
                                        <label>
                                          <input type="checkbox"/> Check me out
                                        </label>
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