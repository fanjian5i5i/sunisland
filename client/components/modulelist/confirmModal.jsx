ConfirmModal = React.createClass({
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
  updateModule(){
    console.log(this.props.currentModule);
    Meteor.call('Modules.update',this.props.currentModule,function(err){
            if(err){
                console.log(err);
            }else{
                toastr.success("Module Updated");
            }
        });
  },
  render () {
      return (
        <div>
          <button type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">Sumbit</button>

          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Are you sure you want to update the module information?</h4>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-info" data-dismiss="modal" onClick={this.updateModule}>Confirm</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      );
    }
});