Signupform = React.createClass({
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
        this.setState({message: '', messageClass: 'hidden'});
        var that = this;
        var username = this.refs.username.value;
        var password = this.refs.password.value;
        var accountmanager = this.refs.accountmanager.value;
        var workphone = this.refs.workphone.value;
        var email = this.refs.email.value;

        // var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        // var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        var user = {
            username:username,
            password: password,
            profile: {
                email: email,
                workphone:workphone,
                accountmanager:accountmanager,
                // fullname: (first_name + last_name).toLowerCase(),
                // firstname: first_name,
                // lastname: last_name,
                avatar: 'http://placehold.it/150x150',
                // friends: []
            }
        };
        Accounts.createUser(user, function (e) {

            if (e) {
                that.displayError(e.reason);
            } else {
                FlowRouter.go('/dashboard');
            }
        })


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
                                <div className="form-group">
                                    <input type="text" placeholder="Account Manager" ref="accountmanager"
                                           className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <input type="tel" placeholder="Work Phone" ref="workphone"
                                           className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Email or mobile number" ref="email"
                                           className="form-control"/>
                                </div>
                                <div className="col s10 offset-s1">
                                    <p className="privacy">By clicking on Sign Up, you agree to <a href="#">terms & conditions</a> and <a href= "#">privacy policy</a>.</p>
                                </div>
                                
                                <div className="form-group col-sm-12">
                                    <button type="submit" className="btn btn-md orange darken-4 btn-100">Sign Up</button>
                                </div>
                                
                                
                                <span className={this.state.messageClass}>{this.state.message}</span>

                            </div>
                        </form>
                    </div>
                  </div>
                </div>
              </div>
        )
    }
});