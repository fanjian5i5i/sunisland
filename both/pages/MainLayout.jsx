MainLayout = React.createClass({
  render() {
  	var robbonStyle = {
      	width: "100%",
	    height: "40vh",
	    "background-color": "#f2704c",
	    "-webkit-flex-shrink": "0",
	    "-ms-flex-negative": "0",
	    "flex-shrink": "0",
    };

    var mainStyle = {
    	"margin-top": "-35vh",
    };

    return (
      <div>
        <Header/>
        <div style={robbonStyle}></div>
        <main className="container" style={mainStyle}>{this.props.content}</main>
      </div>
    );
  }
});
