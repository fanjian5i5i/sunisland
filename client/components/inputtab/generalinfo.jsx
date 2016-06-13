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
    componentDidMount: function() {
        $('select').material_select();
        Materialize.updateTextFields();
      },
    componentWillReceiveProps: function(){
      console.log(this.props.fieldValues);
      var that = this;
      Meteor.call('Modules.findOne',this.props.moduleId,function(err,result){
          if(err){
              Materialize.toast('Cannot find module ' + that.props.moduleId, 4000);
          }else{
              // that.props.saveValues(result);
              that.refs.moduleName.value=result.moduleName;
              that.refs.poo.value = result.poo;
              that.refs.technology.value = result.technology;
              that.refs.type.value = result.type;
              that.refs.dualglass.value = result.dualglass;
              that.refs.antipid.value = result.antipid;
              that.refs.snowload.value = result.snowload;
              that.refs.windload.value = result.windload;
              that.refs.keyfeature.value = result.keyfeature;
              Materialize.updateTextFields();
          }
      });
    },
    saveAndContinue(e){
      e.preventDefault();
      var data = {
       moduleName : this.refs.moduleName.value,
       poo : this.refs.poo.value,
       technology : this.refs.technology.value,
       type : this.refs.type.value,
       dualglass : this.refs.dualglass.value,
       antipid : this.refs.antipid.value,
       snowload : this.refs.snowload.value,
       windload : this.refs.windload.value,
       keyfeature : this.refs.keyfeature.value,

       }
      this.props.saveValues(data);
      this.props.nextStep();
        // FlowRouter.go('/newmodule/electricalinfo');
    },
    render(){
        // console.log(this.state);
        $('select').material_select();
        return (
          <div className="input-tab">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input id="first_name" type="text" className="validate" ref="moduleName" defaultValue={this.props.fieldValues.moduleName}/>
                    <label htmlFor="first_name">Module Name:</label>
                  </div>
                  <div className="input-field col s12">
                      <select ref="poo" defaultValue={this.props.fieldValues.poo}>
                        
                        <option value="China">China</option>
                        <option value="Europe">Europe</option>
                        <option value="USA">USA</option>
                      </select>
                      <label>Place of Origin:</label>
                  </div>
                  <div className="input-field col s12">
                      <select ref="technology" defaultValue={this.props.fieldValues.technology}>
                        
                        <option value="Monocrystalline">Monocrystalline</option>
                        <option value="Multicrystalline">Multicrystalline</option>

                      </select>
                      <label>Technology:</label>
                  </div>
                  <div className="input-field col s12">
                      <select ref="type" defaultValue={this.props.fieldValues.type}> 
                        
                        <option value="N">N</option>
                        <option value="P">P</option>

                      </select>
                      <label>Type:</label>
                  </div>
                  <div className="input-field col s12">
                      <select ref="dualglass" defaultValue={this.props.fieldValues.dualglass}>
                        
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      <label>Dual Glass:</label>
                  </div>
                  <div className="input-field col s12">
                      <select ref="antipid" defaultValue={this.props.fieldValues.antipid}>
                        
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      <label>Anti-PID:</label>
                  </div>
                  <div className="input-field col s12">
                      <input type="number" className="validate" ref="snowload" defaultValue={this.props.fieldValues.snowload}/>
                      <label htmlFor="first_name">Snow Load:</label>
                  </div>
                  <div className="input-field col s12">
                      <input type="number" className="validate" ref="windload" defaultValue={this.props.fieldValues.windload}/>
                      <label htmlFor="first_name">Wind Load:</label>
                  </div>
                  <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" ref="keyfeature" defaultValue={this.props.fieldValues.keyfeature}></textarea>
                            <label htmlFor="textarea1">Key Features:</label>
                  </div>
                  <div className="form-group">
                    <button type="button" className="btn btn-success pull-right" onClick={this.saveAndContinue}>Save And Continue</button>
                  </div>
                </div>
              </form>
            </div>

        )
    }
});