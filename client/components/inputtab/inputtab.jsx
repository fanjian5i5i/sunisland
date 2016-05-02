Inputtab = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        let data = {};
        data.currentUser = {};
        var handle = Meteor.subscribe("modules");
        if(handle.ready()){
            data.currentUser = Meteor.user();
        }
        return data;
    },
    getInitialState(){
        return {
            klass:'img-circle img-responsive custom-input-file',
            editmode:false,
            email:this.data && this.data.currentUser && this.data.currentUser.emails ? this.data.currentUser.emails[0].address:'you@yourdomain.com'
        }
    },
    goNext(){
        console.log(this.state);
    },
    render(){
        // console.log(this.state);
        return (
                <div className="row">
                    <div className="container">
                        <Generalinfo/>
                        
                    </div>
                </div>
        )
    }
});