Profile = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        let data = {};
        data.currentUser = {};
        var handle = Meteor.subscribe("userlist");
        if(handle.ready()){
            data.currentUser = Meteor.user();
        }
        return data;
    },
    getInitialState(){
        // console.log(this.data.currentUser);
        return {
            klass:'circle responsive-img',
            editmode:false,
            email:this.data && this.data.currentUser && this.data.currentUser.profile.email ? this.data.currentUser.profile.email:'you@yourdomain.com'
        }
    },
    toggleEdit(){
       this.setState({editmode:!this.state.editmode,email:this.data.currentUser ? Meteor.user().emails[0].address:''});
    },
    componentDidMount(){
        console.log(this.data.currentUser);
        this.setState({email:this.data.currentUser ? Meteor.user().profile.email:''});
        Materialize.updateTextFields();
    },
    changeEmail(e){
        e.preventDefault();
        Meteor.call('changeEmail',e.target.value);
        this.toggleEdit();
        this.setState({ email: e.target.value });

    },
    uploadFile(e){
        e.preventDefault();
        // console.log(e);
        var that = this;
        var image;
        FS.Utility.eachFile(e, function (file) {
            console.log(file);
            Images.insert(file, function (err, fileObj) {
                Meteor.call('changeAvatar', Meteor.user(), fileObj._id);
                setTimeout(function(){
                    that.setState({klass:'responsive-img'});
                },100)
            });

        });


    },
    render(){
        var editmode = <input onBlur={this.changeEmail} ref="email" defaultValue={this.state.email} type="text"/>;
        var emaillink = this.data.currentUser && this.data.currentUser.emails ? 'mailto:' + this.data.currentUser.emails[0].address:'';
        var mailblock = !this.state.editmode ? <a href={emaillink}>{this.state.email}</a>:editmode;
        return (
                <div className="row">
                    <div className="main-right">
                        <InputHeader propsTitle={"Profile"}/>
                        <div className="input-tab">
                          <form className="col s12">
                            <div className="row">

                              <div className="col s12">
                                  <Avatar user={this.data.currentUser ? this.data.currentUser._id:''} klass={this.state.klass}/>
                              </div>  
                              <div className="input-field col s12 file-field">
                                <div className="btn">
                                  <span>Avatar</span>
                                  <input type="file" onChange={this.uploadFile}/>
                                </div>
                                <div className="file-path-wrapper">
                                  <input className="file-path validate" type="text" />
                                </div>
                              </div>
                            </div>
                            <div className="input-field col s12">
                              <label htmlFor="email">Email:</label>
                              <input id="email" type="email" ref="email" defaultValue={this.state.email}/>
                            </div>
                          </form>
                        </div>
                    </div>
                </div>


        )
    }
});