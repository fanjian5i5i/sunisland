Electricalinfo = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        let data = {};
        data.currentUser = {};
        var handle = Meteor.subscribe("modules");
        if(handle.ready()){
            data.currentUser = Meteor.user();
        }
        return data;
    },
    getInitialState(){
        return {
            klass:'img-circle img-responsive custom-input-file',
            editmode:false,
            email:this.data && this.data.currentUser && this.data.currentUser.emails ? this.data.currentUser.emails[0].address:'you@yourdomain.com'
        }
    },
    goNext(){
        FlowRouter.go('/newmodule/mechanicalinfo');
    },
    goBack(){
        FlowRouter.go('/newmodule/');
    },
    render(){
        // console.log(this.state);
        return (
                  <div className="row">
                      <div className="container">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h3 className="panel-title">Electrical Information</h3>
                      </div>
                      <div className="panel-body">
                        <div className="form-group">
                            <label htmlFor="power">Power:</label>
                            <div className="input-group">
                                <input id="power" type="number" className="form-control" aria-describedby="basic-addon1"/>
                                <span className="input-group-addon" id="basic-addon1">Wp</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="powerTolerance">Power Tolerance:</label>
                            <div className="input-group">
                                <input id="powerTolerance" type="number" className="form-control" aria-describedby="basic-addon1"/>
                                <span className="input-group-addon" id="basic-addon1">%</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="efficiency">Module Efficiency:</label>
                            <div className="input-group">
                                <input id="efficiency" type="number" className="form-control" aria-describedby="basic-addon2"/>
                                <span className="input-group-addon" id="basic-addon2">%</span>
                            </div>
                        </div>

                        <div className="form-group">
                          <button type="button" className="btn btn-info pull-left" onClick={this.goBack}>Back</button>
                          <button type="button" className="btn btn-success pull-right" onClick={this.goNext}>Next</button>
                        </div> 
                      </div>
                    </div>
              </div>      
            </div>
        )
    }
});