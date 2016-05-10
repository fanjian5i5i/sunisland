Header = React.createClass({
  getInitialState(){
    return{
      isLoggedIn: User.isLoggedIn()
    };
  },
  logout(){
    Meteor.logout ((err)=>{
      if(err){
        Materialize.toast(err, 4000)
      }else{
        this.setState({isLoggedIn: !this.state.isLoggedIn})
        FlowRouter.go("/");
      }
    }.bind(this));
  },
  render() {
    var navStyle = {
      backgroundColor:"#292929", 
      paddingLeft:"12px"
    };

    var navOptions = User.isLoggedIn() ? <LoggedInNav logout={this.logout}/> : <LoggedOutNav/>;

    return (
      <nav style={navStyle}>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Boston Redevelopment Authority</a>
              {navOptions}
          </div>
        </nav>
    );
  }
});
