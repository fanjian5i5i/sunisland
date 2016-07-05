Warrantyinfo = React.createClass({
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
        FlowRouter.go('/newmodule/Mechanicalinfo');
    },
    componentDidMount: function() {
        $('select').material_select();
        Materialize.updateTextFields();
      },
    handleClick(e){
      e.preventDefault();
      console.log(this.refs.certificate.value);
      $('#myModalUpdate').openModal();
    },
    handleSubmit(e){
        e.preventDefault();

        var data = {
           productwarranty : this.refs.productwarranty.value,
           powerwarranty : this.refs.powerwarranty.value,
           certificate : this.refs.certificate.value,
           price10 : this.refs.price10.value,
           price100 : this.refs.price100.value,
           price1000 : this.refs.price1000.value,


       }
      this.props.saveValues(data);
      this.props.updateToCollection();
      
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
                            <label htmlFor="weight">Product Warranty(years):</label>
                            <input id="productwarranty" type="number" ref="productwarranty" defaultValue={this.props.fieldValues.productwarranty}/>
                          </div>
                          <div className="input-field col s12">
                            <label htmlFor="weight">Power Warranty(years):</label>
                            <input id="powerwarranty" type="number" ref="powerwarranty" defaultValue={this.props.fieldValues.powerwarranty}/>
                          </div>

                          <div className="input-field col s12">
                              <select multiple id="certificate" type="number" ref="certificate" defaultValue={this.props.fieldValues.certificate}>
                                <option value="ISO/TS 16949:2009">ISO/TS 16949:2009</option>
                                <option value="ISO 9001:2008">ISO 9001:2008</option>
                                <option value="ISO 14001:2004">ISO 14001:2004</option>
                                <option value="OHSAS 18001:2007">OHSAS 18001:2007</option>
                                <option value="CE (European Union)">CE (European Union)</option>
                                <option value="CSA (UL 1703)">CSA (UL 1703)</option>
                                <option value="Electrical Protection Class ll">Electrical Protection Class ll</option>
                                <option value="VDE (IEC61215/61730)">VDE (IEC61215/61730)</option>
                                <option value="Take-E-Way (Germany)">Take-E-Way (Germany)</option>
                                <option value="MCS (Britain)">MCS (Britain)</option>
                                <option value="CQC (China)">CQC (China)</option>
                                <option value="JET (Japan)">JET (Japan)</option>
                                <option value="TÜV SÜD">TÜV SÜD</option>
                                <option value="SII (Israel)">SII (Israel)</option>
                                <option value="NRE (Korea)">NRE (Korea)</option>
                                <option value="CEC (Australia)">CEC (Australia)</option>
                                <option value="INMETRO (Brazil)">INMETRO (Brazil)</option>
                                <option value="CEC (California)">CEC (California)</option>
                                <option value="FSEC (Florida)">FSEC (Florida)</option>
                                <option value="SGS (Blowing sand)">SGS (Blowing sand)</option>
                                <option value="PV Cycle">PV Cycle</option>
                                <option value="Intertek">Intertek</option>
                                <option value="SNI-BPPT (Indonesia)">SNI-BPPT (Indonesia)</option>
                                <option value="TÜV">TÜV</option>
                                <option value="UL">UL</option>
                                <option value="Clean Energy Council">Clean Energy Council</option>
                                <option value="Recyclable packing">Recyclable packing</option>
                                <option value="BSI">BSI</option>
                                <option value="TÜV Nord">TÜV Nord</option>
                                <option value="ZEP Compatible">ZEP Compatible</option>
                                <option value="IEC 61730">IEC 61730</option>
                                <option value="IEC 61215">IEC 61215</option>
                                <option value="Cradle to Cradle">Cradle to Cradle</option>
                                <option value="PVEL">PVEL</option>
                                <option value="ilac-MRA">ilac-MRA</option>
                                <option value="CSTB">CSTB</option>

                              </select>
                              <label>Certificate(s):</label>
                          </div>

                          <div className="input-field col s12">
                            <label htmlFor="price10">Price (&lt;=10kW) ($/W):</label>
                            <input id="price10" type="number" ref="price10" defaultValue={this.props.fieldValues.price10}/>
                          </div>
                          <div className="input-field col s12">
                            <label htmlFor="price100">Price (&lt;=100kW) ($/W):</label>
                            <input id="price100" type="number" ref="price100" defaultValue={this.props.fieldValues.price100}/>
                          </div>
                          <div className="input-field col s12">
                            <label htmlFor="price1000">Price (&gt;100kW) ($/W):</label>
                            <input id="price1000" type="number" ref="price1000" defaultValue={this.props.fieldValues.price1000}/>
                          </div>
                          <div className="form-group">
                            <button type="button" className="btn btn-info pull-left" onClick={this.props.previousStep}>Back</button>
                            <button type="button" className="btn btn-success pull-right" onClick={this.handleClick}>Sumbit</button>
                          </div> 
                        </div>
                      </form>
                      <div id="myModalUpdate" className="modal">
                        <div className="modal-content">
                          <p>Are you sure you want to make changes to this module? </p>
                        </div>
                        <div className="modal-footer">
                          <a className="modal-action modal-close waves-effect waves-green btn-flat green-text" onClick={this.handleSubmit}>Yes</a>
                          <a className="modal-action modal-close waves-effect waves-green btn-flat red-text">Cancel</a>
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