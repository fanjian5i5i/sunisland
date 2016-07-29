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
        const styles={
            bkgStyle:{
                "backgroundImage":'url(' + '/images/bostonkbgrd-banner.jpg'+')',
                "backgroundSize":"cover",
                height:65,
                width:"100%",
                overflow:"hidden",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
            },
        }
        return (
            <div className="">
               <nav className="nav-welcome" style={styles.bkgStyle}>
                <div className="nav-wrapper container">
                <ul className="left">
                  <li><a href="#" data-activates="slide-out" className="button-collapse top-nav full hide-on-large-only"><i className="material-icons">menu</i></a></li>
                </ul>
                  
                  <a href="#" className="brand-logo"><img className="navlogo" src={this.props.logo}/></a>
                  <ul id="nav-mobile" className="right">
                    <li className="hide-on-small-and-down"><a href="/about">About</a></li>
                    <li className="hide-on-small-and-down signin-btn"><a href="/Team">Team</a></li>
                    <li className="hide-on-small-and-down signin-btn"><a href="/FAQ">FAQ</a></li>
                    <li className="hide-on-small-and-down signin-btn"><a href="/signin">Sign In</a></li>
                    <li className="hide-on-small-and-down nav-padding">              </li>


                  </ul>
                </div>
              </nav>
            </div>
        )
    }
});