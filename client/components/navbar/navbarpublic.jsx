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
            <div className="">
               <nav className="nav-welcome">
                <div className="nav-wrapper container">
                <ul className="left">
                  <li><a href="#" data-activates="slide-out" className="button-collapse top-nav full hide-on-large-only"><i className="material-icons">menu</i></a></li>
                </ul>
                  
                  <a href="#" className="brand-logo"><img className="navlogo" src="/images/logo.png"/></a>
                  <ul id="nav-mobile" className="right">
                    <li className="hide-on-small-and-down"><a href="/about">About</a></li>
                    <li className="hide-on-small-and-down signin-btn"><a href="/signin">Sign In</a></li>
                    <li className="hide-on-small-and-down nav-padding">              </li>


                  </ul>
                </div>
              </nav>
            </div>
        )
    }
});