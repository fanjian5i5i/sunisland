PDFContainer = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
        let data = {};
        data.comments = [];
        var commentsHandle = Meteor.subscribe('comments');
        if(commentsHandle.ready()){
            data.comments = Comments.find({},{}).fetch();
        }

        return data;
  },	
  handleClickModal(){
  	$('#modal1').openModal();
  },

  handleClickPost(){

  	var postText = this.refs.textarea1.getDOMNode().value;
  	var postTime = new Date();

  	var userId = Meteor.user()._id;

  	var post = {
  		userId:userId,
  		text:postText,
  		createdAt:postTime
  	};
  	Comments.insert(post,function(err){
  		if(err){
			Materialize.toast(err, 4000)
		}
		else{
			Materialize.toast("Posted",4000);
		}	
  	});
  },
  render() {
    return (
      <div className="row">
        <div className="col s12 m8">
          <div className="card z-depth-2">
            <div className="card-content orange-text">
              <span className="card-title">Card Title</span>
              <iframe src="http://docs.google.com/gview?url=http://www.bostonredevelopmentauthority.org/documents/planning/urban-renewal/proposed-minor-modification-to-urban-renewal-plans&embedded=true" frameborder="0"></iframe>
            </div>
            <div className="card-action">
            	<a className="btn-floating btn-large waves-effect waves-light red" data-target="modal1" onClick={this.handleClickModal}><i className="material-icons">add</i></a>
            </div>
            
          </div>
        </div>
        <PDFcomments/>
        <div id="modal1" className="modal">
                <div className="modal-content">
                  <h4>New Comment</h4>
                  <div className="row">
                      <form className="col s12">
                        <div className="row">
                          <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" ref="textarea1"></textarea>
                            <label for="textarea1">Textarea</label>
                          </div>
                         </div>
                       </form>
                   </div>    
                </div>
                <div className="modal-footer">
                  <a className=" modal-action modal-close waves-effect waves-green btn" onClick={this.handleClickPost}>Post</a>
                </div>
             </div>
      </div>
    );
  }
});