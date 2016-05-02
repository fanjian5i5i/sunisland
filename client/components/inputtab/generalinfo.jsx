Generalinfo = React.createClass({
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
        console.log(this.state);
        FlowRouter.go('/newmodule/electricalinfo');
    },
    render(){
        // console.log(this.state);
        return (
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h3 className="panel-title">General Information</h3>
                      </div>
                      <div className="panel-body">
                        <div className="form-group">
                          <label htmlFor="usr">Module Name:</label>
                          <input type="text" className="form-control" id="usr"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="poo">Place of Origin:</label>
                          <select className="form-control" id="poo">
                            <option>China</option>
                            <option>Europe</option>
                            <option>USA</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="technology">Technology:</label>
                          <select className="form-control" id="technology">
                            <option>Monocrystalline</option>
                            <option>Multicrystalline</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="type">Type:</label>
                          <select className="form-control" id="type">
                            <option>N</option>
                            <option>P</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="dualglass">Dual glass:</label>
                          <select className="form-control" id="dualglass">
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="antipid">Anti-PID:</label>
                          <select className="form-control" id="antipid">
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>  
                        <div className="form-group">
                            <label htmlFor="snowload">Snow Load:</label>
                            <div className="input-group">
                                <input id="snowload" type="number" className="form-control" aria-describedby="basic-addon1"/>
                                <span className="input-group-addon" id="basic-addon1">Pa</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="windload">Wind Load:</label>
                            <div className="input-group">
                                <input id="windload" type="number" className="form-control" aria-describedby="basic-addon2"/>
                                <span className="input-group-addon" id="basic-addon2">Pa</span>
                            </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="keyfeature">Key Features:</label>
                          <textarea className="form-control" rows="5" id="keyfeature"></textarea>
                        </div>  
                        <div className="form-group">
                          <button type="button" className="btn btn-success pull-right" onClick={this.goNext}>Next</button>
                        </div> 
                      </div>
                    </div>

        )
    }
});