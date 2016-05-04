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
    goNext(){
        console.log(this.state);
    },
    goBack(){
        FlowRouter.go('/newmodule/electricalinfo');
    },
    handleSubmit(e){
        e.preventDefault();
        var that = this;
        var cellOrientation = this.refs.cellOrientation.value;
        var solarCell = this.refs.solarCell.value;
        var weight = this.refs.weight.value;
        var busbarsSolarCell = this.refs.busbarsSolarCell.value;
        var frontGlassThickness = this.refs.frontGlassThickness.value;
        var frameColor = this.refs.frameColor.value;
        var junctionBox = this.refs.junctionBox.value;
        var cables = this.refs.cables.value;
        var connector = this.refs.connector.value;
        var junctionBox = this.refs.junctionBox.value;
        var params = {
            cellOrientation:cellOrientation,
            solarCell:solarCell,
            weight:weight,
            busbarsSolarCell:busbarsSolarCell,
            frontGlassThickness:frontGlassThickness,
            frameColor:frameColor,
            junctionBox:junctionBox,
            cables:cables,
            connector:connector,
            junctionBox:junctionBox
        };
            Meteor.call('Modules.insert',params,function(err){
                if(err){
                    console.log(err);
                }
            });
            // this.setState({filename:''});
        // this.resetFields();


    },
    render(){
        // console.log(this.state);
        return (
            <div className="row">
                <div className="container">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h3 className="panel-title">Mechanical Information</h3>
                      </div>
                      <div className="panel-body">
                        <div className="form-group">
                          <label htmlFor="cellOrientation">Cell Orientation:</label>
                          <select className="form-control" id="cellOrientation" ref="cellOrientation">
                            <option>125mm×125mm</option>
                            <option>156mm×156mm</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="solarCell">Solar Cell:</label>
                          <select className="form-control" id="solarCell" ref="solarCell">
                            <option>Monocrystalline</option>
                            <option>Multicrystalline</option>
                          </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="weight">Weight:</label>
                            <div className="input-group">
                                <input id="weight" type="number" className="form-control" aria-describedby="basic-addon1" ref="weight"/>
                                <span className="input-group-addon" id="basic-addon1">kg</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="busbarsSolarCell">BusBars Solar Cell:</label>
                            <input type="number" className="form-control" id="busbarsSolarCell" ref="busbarsSolarCell"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="frontGlassThickness">Front Glass Thickness:</label>
                            <div className="input-group">
                                <input id="frontGlassThickness" type="number" className="form-control" aria-describedby="basic-addon2" ref="frontGlassThickness"/>
                                <span className="input-group-addon" id="basic-addon2">mm</span>
                            </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="frameColor">Frame Color:</label>
                          <select className="form-control" id="frameColor" ref="frameColor">
                            <option>Black</option>
                            <option>Silver</option>
                            <option>Frameless</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="junctionBox">Junction Box:</label>
                          <select className="form-control" id="junctionBox" ref="junctionBox">
                            <option>IP65</option>
                            <option>IP67</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="cables">Cables:</label>
                          <textarea className="form-control" rows="2" id="cables" ref="cables"></textarea>
                        </div>  
                        <div className="form-group">
                          <label htmlFor="connector">Connector:</label>
                          <textarea className="form-control" rows="2" id="connector" ref="connector"></textarea>
                        </div>  
                        <div className="form-group">
                          <button type="button" className="btn btn-info pull-left" onClick={this.goBack}>Back</button>
                          <button type="button" className="btn btn-success pull-right" onClick={this.goNext}>Next</button>
                          <button type="button" className="btn btn-success pull-right" onClick={this.handleSubmit}>Sumbit</button>
                        </div> 
                      </div>
                    </div>
                </div>      
            </div>
        )
    }
});