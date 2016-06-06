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
    componentDidMount: function() {
        Materialize.updateTextFields();
    },
    saveAndContinue(e){
      e.preventDefault();
      var data = {
        power:this.refs.power.value,
        powerTolerance:this.refs.powerTolerance.value,
        efficiency:this.refs.efficiency.value,
       }
      this.props.saveValues(data);
      this.props.nextStep();
        // FlowRouter.go('/newmodule/electricalinfo');
    },
    goBack(){
        FlowRouter.go('/newmodule/');
    },
    render(){
        // console.log(this.state);
        return (
                <div className="input-tab">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s12">
                        <label htmlFor="power">Power(Wp):</label>
                        <input id="power" type="number" ref="power" defaultValue={this.props.fieldValues.power}/>
                      </div>
                      <div className="input-field col s12">
                        <label htmlFor="powerTolerance">Power Tolerance(%):</label>
                        <input id="powerTolerance" type="number" ref="powerTolerance" defaultValue={this.props.fieldValues.powerTolerance}/>
                      </div>
                      <div className="input-field col s12">
                        <label htmlFor="power">Module Efficiency(%):</label>
                        <input id="power" type="number" ref="efficiency" defaultValue={this.props.fieldValues.efficiency}/>
                      </div>
                      <div className="form-group">
                        <button type="button" className="btn btn-info pull-left" onClick={this.props.previousStep}>Back</button>
                        <button type="button" className="btn btn-success pull-right" onClick={this.saveAndContinue}>Save And Continue</button>
                      </div>
                    </div>
                  </form>
                </div>
        )
    }
});