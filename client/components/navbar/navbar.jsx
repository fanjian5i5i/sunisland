Navbar = React.createClass({
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
        var users = Meteor.users.find({},{fields:{'profile':1}}).fetch();
        var usernames = [];
        users.map(function(user){
            usernames.push(user.profile.fullname);
        });
        $('#typeahead').typeahead({
            name: 'users',
            local: usernames
        });
    },
    handleSubmit(e){
        e.preventDefault();
        FlowRouter.go('/user/' + (this.refs.searchText.value).trim());
    },
    onClick: function(event) {
        $('.dropdown-button').dropdown();
    },
    render(){
        var fullname = '';
        if(this.data.currentUser && this.data.currentUser.profile){
            fullname = this.data.currentUser.profile.firstname + ' ' + this.data.currentUser.profile.lastname;
        }
        return (
            <div className="navbar-fixed">
               <nav>
                <div className="nav-wrapper">
                  <a href="#" className="brand-logo">SUN ISLAND Account Manager</a>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/dashboard"><i className="material-icons left">dashboard</i>Dashboard</a></li>
                    <li><a className="dropdown-button" href="#!" data-activates="dropdown1" onClick={this.onClick}> {fullname}<i className="material-icons right">arrow_drop_down</i></a></li>
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