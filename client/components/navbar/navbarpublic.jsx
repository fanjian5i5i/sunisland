NavbarPublic = React.createClass({
    getInitialState(){
        return {
            searchText:''
        };
    },
    mixins: [ReactMeteorData],
    getMeteorData(){
        let data = {};
        data.currentUser = Meteor.user();
        return data;
    },
    componentDidMount(){
    },
    handleSubmit(e){
        e.preventDefault();
        FlowRouter.go('/user/' + (this.refs.searchText.value).trim());
    },
    onClick: function(event) {
        event.preventDefault();
        $('.dropdown-button').dropdown();
    },
    render(){
        var username = '';
        if(this.data.currentUser && this.data.currentUser.profile){
            username = this.data.currentUser.username;
        }
        return (
            <div className="navbar-fixed">
               <nav>
                <div className="nav-wrapper yellow darken-4">
                <ul className="left">
                  <li><a href="#" data-activates="slide-out" className="button-collapse top-nav full hide-on-large-only"><i className="material-icons">menu</i></a></li>
                </ul>
                  
                  <a href="#" className="brand-logo"><img className="navlogo" src="/images/logo.png"/></a>
                  <ul id="nav-mobile" className="right">
                    <li className="hide-on-small-and-down"><a href="/dashboard"><i className="material-icons left">dashboard</i>Dashboard</a></li>
                    <li><a className="dropdown-button" data-activates="dropdown1" onClick={this.onClick}> {username}<i className="material-icons right">arrow_drop_down</i></a></li>
                  </ul>
                </div>
              </nav>
              <ul id="dropdown1" className="dropdown-content">
                <li><a href="/profile">Edit Profile</a></li>
                <li><a href="/signout">Logout</a></li>
              </ul>
            </div>
        )
    }
});