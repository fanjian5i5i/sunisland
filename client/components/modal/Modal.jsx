Modal = React.createClass({
  render () {
      return (
        <div>
          <button type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">{this.props.btnName}</button>

          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">{this.props.modalTitle}</h4>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-info" data-dismiss="modal" onClick={this.props.propFunction().bind(this)}>Confirm</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      );
    }
});
