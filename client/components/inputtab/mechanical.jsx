Mechanicalinfo = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        let data = {};
        data.currentUser = {};
        var handle = Meteor.subscribe("modules");
        if(handle.ready()){
            data.currentUser = Meteor.user();
            console.log(data.currentUser);
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
    goBack(){
        FlowRouter.go('/newmodule/electricalinfo');
    },
    componentDidMount: function() {
        $('select').material_select();
        Materialize.updateTextFields();
    },
    saveAndContinue(e){
      e.preventDefault();
      var data = {
           cellOrientation : this.refs.cellOrientation.value,
           solarCell : this.refs.solarCell.value,
           weight : this.refs.weight.value,
           busbarsSolarCell : this.refs.busbarsSolarCell.value,
           frontGlassThickness : this.refs.frontGlassThickness.value,
           frameColor : this.refs.frameColor.value,
           junctionBox : this.refs.junctionBox.value,
           cables : this.refs.connector.value,
           connector : this.refs.cables.value
       }
      this.props.saveValues(data);
      this.props.nextStep();
        // FlowRouter.go('/newmodule/electricalinfo');
    },
    render(){
        // console.log(this.state);
        return (

          <div className="input-tab">
              <div className="row">
                <div className="col s12">
                  <div className="card">
                    <div className="card-content">
                      <form>
                        <div className="row">
                          <div className="input-field col s12">
                              <select ref="cellOrientation" defaultValue={this.props.fieldValues.cellOrientation}>                        
                                <option value="125mm×125mm">125mm×125mm</option>
                                <option value="156mm×156mm">156mm×156mm</option>
                              </select>
                              <label>Cell Orientation:</label>
                          </div>
                          <div className="input-field col s12">
                              <select ref="solarCell" defaultValue={this.props.fieldValues.solarCell}>                        
                                <option value="Monocrystalline">Monocrystalline</option>
                                <option value="Multicrystalline">Multicrystalline</option>
                              </select>
                              <label>Solar Cell:</label>
                          </div>
                          <div className="input-field col s12">
                            <label htmlFor="weight">Weight(kg):</label>
                            <input id="weight" type="number" ref="weight" defaultValue={this.props.fieldValues.weight}/>
                          </div>
                          <div className="input-field col s12">
                            <label htmlFor="busbarsSolarCell">BusBars Solar Cell:</label>
                            <input id="busbarsSolarCell" type="number" ref="busbarsSolarCell" defaultValue={this.props.fieldValues.busbarsSolarCell}/>
                          </div>
                          <div className="input-field col s12">
                            <label htmlFor="frontGlassThickness">Front Glass Thickness(mm):</label>
                            <input id="frontGlassThickness" type="number" ref="frontGlassThickness" defaultValue={this.props.fieldValues.frontGlassThickness}/>
                          </div>
                          <div className="input-field col s12">
                              <select ref="frameColor" defaultValue={this.props.fieldValues.frameColor}>                        
                                <option value="Black">Black</option>
                                <option value="Silver">Silver</option>
                                <option value="Frameless">Frameless</option>
                              </select>
                              <label>Frame Color:</label>
                          </div>
                          <div className="input-field col s12">
                              <select ref="junctionBox" defaultValue={this.props.fieldValues.junctionBox}>                        
                                <option value="IP65">IP65</option>
                                <option value="IP67">IP67</option>
                                <option value="Other">Other</option>
                              </select>
                              <label>Junction Box:</label>
                          </div>
                          <div className="input-field col s12">
                                    <textarea id="cables" className="materialize-textarea" ref="cables" defaultValue={this.props.fieldValues.cables}></textarea>
                                    <label htmlFor="cables">Cables:</label>
                          </div>
                          <div className="input-field col s12">
                                    <textarea id="connector" className="materialize-textarea" ref="connector" defaultValue={this.props.fieldValues.connector}></textarea>
                                    <label htmlFor="connector">Connector:</label>
                          </div>


                          <div className="form-group">
                            <button type="button" className="btn btn-info pull-left" onClick={this.props.previousStep}>Back</button>
                            <button type="button" className="btn btn-success pull-right" onClick={this.saveAndContinue}>Save and Continue</button>
                          </div> 
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        )
    }
});