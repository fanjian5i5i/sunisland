Signinform = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        let data = {};
        data.currentUser = Meteor.user();
        return data;
    },
    getInitialState(){
        return {
            message: '',
            messageClass: 'hidden'
        }
    },
    displayError(message){
        this.setState({message: message, messageClass: 'alert alert-danger registerError'});
    },
    handleSubmit(e){
        e.preventDefault();
        var that = this;
        var username = this.refs.username.value;
        var password = this.refs.password.value;
        Meteor.loginWithPassword(username, password, function (e) {
            if(e){
                that.displayError(e.reason)
            } else{
                Meteor.setTimeout(function(){
                    FlowRouter.go('/dashboard');
                },1000)
            }
        });


    },
    render(){
        return (

            <div className="row">
                <div className="col s6 offset-s3">
                  <div className="card orange-text text-darken-2 z-depth-3">
                    <div className="card-content">
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-sm-9">

                                <div className="form-group">
                                    <input ref="username" type="text" placeholder="Username"
                                           className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="New password" ref="password"
                                           className="form-control"/>
                                </div>
                                
                                <div className="form-group col-sm-12">
                                    <button type="submit" className="btn btn-md orange darken-4 btn-100">Sign In</button>
                                </div>

                            </div>
                        </form>
                    </div>
                  </div>
                </div>
              </div>
        )
    }
});