Profile = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        let data = {};
        // data.currentUser = {};
        var handle = Meteor.subscribe("userlist");
        if(handle.ready()){
            data.currentUser = Meteor.user();
            // this.setState({currentUser:data.currentUser});
        }

        return data;
    },
    getInitialState(){
        // console.log(this.data.currentUser);
        return {
            klass:'circle responsive-img',
            editmode:false,
            email:this.data && this.data.currentUser && this.data.currentUser.profile.email ? this.data.currentUser.profile.email:'you@yourdomain.com',
            currentUser:{}
        }
    },
    componentDidMount(){
       setTimeout(function(){ Materialize.updateTextFields(); }, 500);
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
    rendering(){
        return(
            <div className="progress">
                  <div className="indeterminate"></div>
              </div>
        )
    },
    getContent(){
        // this.setState({"currentUser":this.data.currentUser});
        return(
            <div className="row">
                <div className="input-field col s12">
                  <label htmlFor="email">Email:</label>
                  <input id="email" type="email" ref="email" defaultValue={this.data.currentUser.profile.email}/>
                </div>
                <div className="input-field col s12">
                  <label htmlFor="email">Work Phone Number:</label>
                  <input id="email" type="number" ref="workphone" defaultValue={this.data.currentUser.profile.workphone}/>
                </div>
                <div className="input-field col s12">
                  <label htmlFor="email">Account Manager:</label>
                  <input id="email" type="text" ref="accountmanager" defaultValue={this.data.currentUser.profile.accountmanager}/>
                </div>
                <div className="input-field col s12">
                  <label htmlFor="email">Company Name:</label>
                  <input id="email" type="text" ref="company" defaultValue={this.data.currentUser.profile.company}/>
                </div>
                <div className="input-field col s12">
                  <label htmlFor="email">Headquarter Location:</label>
                  <input id="email" type="text" ref="headquarter" defaultValue={this.data.currentUser.profile.headquarter}/>
                </div>
                <div className="input-field col s12">
                  <label htmlFor="email">Manufacturing Location:</label>
                  <input id="email" type="text" ref="manufacturinglocation" defaultValue={this.data.currentUser.profile.manufacturinglocation}/>
                </div>
                <div className="input-field col s12">
                  <label htmlFor="email">Company Module Capacity(MW):</label>
                  <input id="email" type="text" ref="companymodulecapacity" defaultValue={this.data.currentUser.profile.companymodulecapacity}/>
                </div>
            </div>
        )
    },
    render(){
        // var comment = {"                              <div className="col s12">
        //                           <Avatar user={this.data.currentUser ? this.data.currentUser._id:''} klass={this.state.klass}/>
        //                       </div>  
        //                       <div className="input-field col s12 file-field">
        //                         <div className="btn">
        //                           <span>Avatar</span>
        //                           <input type="file" onChange={this.uploadFile}/>
        //                         </div>
        //                         <div className="file-path-wrapper">
        //                           <input className="file-path validate" type="text" />
        //                         </div>
        //                       </div>"}
        return (
                <div className="row">
                    <div className="main-right">
                        <InputHeader propsTitle={"Profile"}/>
                        <div className="input-tab">
                          <form className="col s12">
                            <div className="row">




                              {this.data.currentUser? this.getContent(): <p>Loading...</p>}

                            </div>
                            
                          </form>
                        </div>
                    </div>
                </div>


        )
    }
});