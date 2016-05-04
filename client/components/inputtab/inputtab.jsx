var fieldValues = {
         name : null,
         email : null,
         password : null,
         age : null,
         colors : []
}

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
            step: 1,
            klass:'img-circle img-responsive custom-input-file',
            editmode:false,
            email:this.data && this.data.currentUser && this.data.currentUser.emails ? this.data.currentUser.emails[0].address:'you@yourdomain.com'
        }
    },
    saveValues(fields) {
     console.log(fieldValues);
     return function() {
     // Remember, `fieldValues` is set at the top of this file, we are simply appending
     // to and overriding keys in `fieldValues` with the `fields` with Object.assign
     // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
     fieldValues = Object.assign({}, fieldValues, fields)
     }()
    },

    nextStep() {
     this.setState({
     step : this.state.step + 1
     })
    },

    // Same as nextStep, but decrementing
    previousStep() {
     this.setState({
     step : this.state.step - 1
     })
    },
    render(){

        var fieldValues = {
             name : null,
             email : null,
             password : null,
             age : null,
             colors : []
        };

             switch(this.state.step) {
             case 1:return (
                        <div className="row">
                            <div className="container">
                                <Generalinfo fieldValues={fieldValues} nextStep={this.nextStep} saveValues={this.saveValues}/>
                                
                            </div>
                        </div>
                    )
             case 2:return (
                        <div className="row">
                            <div className="container">
                                <Electricalinfo/>
                                
                            </div>
                        </div>
                    )
             case 3:return (
                        <div className="row">
                            <div className="container">
                                <Mechanicalinfo/>
                                
                            </div>
                        </div>
                    )
             }
            
    }
});