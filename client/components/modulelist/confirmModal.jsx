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
  handleClick(e){
    e.stopPropagation();
    $('#myModal').openModal();
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
          <a className="btn-floating btn-small waves-effect waves-light red" onClick={this.handleClick}><i className="material-icons">delete</i></a>
          <div id="myModal" className="modal bottom-sheet">
            <div className="modal-content">
              <p>Are you sure you want to ?</p>
            </div>
            <div className="modal-footer">
              <a className="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
              <a className="modal-action modal-close waves-effect waves-green btn-flat ">Cancle</a>
            </div>
          </div>
        </div>
      );
    }
});