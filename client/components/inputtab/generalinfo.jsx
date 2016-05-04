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
    saveAndContinue(e){
      e.preventDefault()
      var data = {
       moduleName : this.refs.moduleName.value,
       poo : this.refs.poo.value,
       technology : this.refs.technology.value,
       moduleName : this.refs.moduleName.value,
       type : this.refs.type.value,
       dualglass : this.refs.dualglass.value,
       antipid : this.refs.antipid.value,
       snowload : this.refs.snowload.value,
       windload : this.refs.windload.value,
       moduleName : this.refs.moduleName.value,
       keyfeature : this.refs.keyfeature.value,

       }
      this.props.saveValues(data)
      this.props.nextStep()
      console.log(this.state);
        // FlowRouter.go('/newmodule/electricalinfo');
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
                          <label htmlFor="moduleName">Module Name:</label>
                          <input type="text" className="form-control" id="usr" ref="moduleName"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="poo">Place of Origin:</label>
                          <select className="form-control" id="poo" ref="poo">
                            <option>China</option>
                            <option>Europe</option>
                            <option>USA</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="technology">Technology:</label>
                          <select className="form-control" id="technology" ref="technology">
                            <option>Monocrystalline</option>
                            <option>Multicrystalline</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="type">Type:</label>
                          <select className="form-control" id="type" ref="type">
                            <option>N</option>
                            <option>P</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="dualglass">Dual glass:</label>
                          <select className="form-control" id="dualglass" ref="dualglass">
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="antipid">Anti-PID:</label>
                          <select className="form-control" id="antipid" ref="antipid">
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>  
                        <div className="form-group">
                            <label htmlFor="snowload">Snow Load:</label>
                            <div className="input-group">
                                <input id="snowload" type="number" className="form-control" aria-describedby="basic-addon1" ref="snowload"/>
                                <span className="input-group-addon" id="basic-addon1">Pa</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="windload">Wind Load:</label>
                            <div className="input-group">
                                <input id="windload" type="number" className="form-control" aria-describedby="basic-addon2" ref="windload"/>
                                <span className="input-group-addon" id="basic-addon2">Pa</span>
                            </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="keyfeature">Key Features:</label>
                          <textarea className="form-control" rows="5" id="keyfeature" ref="keyfeature"></textarea>
                        </div>  
                        <div className="form-group">
                          <button type="button" className="btn btn-success pull-right" onClick={this.saveAndContinue}>Save And Continue</button>
                        </div> 
                      </div>
                    </div>

        )
    }
});