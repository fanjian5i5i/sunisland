PDFcomments = React.createClass({

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

  render() {
    var commnetsStyle = {
      "max-height": "800px",
      "overflow": "scroll",
      "overflow-x": "hidden"
    };
    var comments = this.data.comments.map(function (comment) {
              
            
      return (
          <div key={comment._id}>
            <h5>{comment.userId}</h5>
            <p>{comment.text}</p>
            <div className="divider"></div>
          </div>  
        );
    }.bind(this));
    return (
        <div className="col s12 m4">
          <div className="card z-depth-2">
            <div className="card-content orange-text" style={commnetsStyle}>
              <span className="card-title" >Comments</span>
              {comments}
          </div>
        </div>
       </div>
    );
  }
});