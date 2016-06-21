var fieldValues = {
         moduleName : null,
         poo : null,
         technology : null,
         moduleName : null,
         type : null,
         dualglass : null,
         antipid : null,
         snowload : null,
         windload : null,
         moduleName : null,
         keyfeature : null,
         power:null,
         powerTolerance:null,
         efficiency:null,
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

        console.log(this.props.moduleId);
        var that = this;
        if(this.props.moduleId != 'newmodule'){
            Meteor.call('Modules.findOne',this.props.moduleId,function(err,result){
                if(err){
                    Materialize.toast('Cannot find module ' + that.props.moduleId, 4000);
                }else{
                    that.saveValues(result);
                    console.log(fieldValues);
                    Materialize.updateTextFields();
                }
            });
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
    // componentDidMount: function() {
    //     console.log(this.props.moduleId);
    //     var that = this;

    //     Meteor.call('Modules.findOne',this.props.moduleId,function(err,result){
    //         if(err){
    //             Materialize.toast('Cannot find module ' + that.props.moduleId, 4000);
    //         }else{
    //             console.log(result);
    //             fieldValues = result;
    //             console.log(fieldValues);
    //             that.saveValues(fieldValues);
    //             Materialize.updateTextFields();
    //         }
    //     });
        
    // },
    saveValues(fields) {
     return function() {
     // Remember, `fieldValues` is set at the top of this file, we are simply appending
     // to and overriding keys in `fieldValues` with the `fields` with Object.assign
     // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
     fieldValues = Object.assign({}, fieldValues, fields)
     }()
    },
    updateToCollection(){
        Meteor.call('Modules.update',fieldValues,function(err){
            if(err){
                console.log(err);
            }
            console.log(fieldValues);

        });
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

        // var fieldValues = {
        //     moduleName : null,
        //     poo : null,
        //     technology : null,
        //     moduleName : null,
        //     type : null,
        //     dualglass : null,
        //     antipid : null,
        //     snowload : null,
        //     windload : null,
        //     moduleName : null,
        //     keyfeature : null,
        // };

             switch(this.state.step) {
             case 1:return (
                        <div className="main-right">
                            <InputHeader propsTitle={"General Information"}/>
                            <div className="container">
                                <Generalinfo fieldValues={fieldValues} nextStep={this.nextStep} saveValues={this.saveValues} moduleId={this.props.moduleId}/>
                                
                            </div>
                        </div>
                    )
             case 2:return (
                        <div className="main-right">
                            <InputHeader propsTitle={"Electrical Information"}/>
                            <div className="container">
                                <Electricalinfo fieldValues={fieldValues} nextStep={this.nextStep} previousStep={this.previousStep} saveValues={this.saveValues}/>
                                
                            </div>
                        </div>
                    )
             case 3:return (
                        <div className="main-right">
                            <InputHeader propsTitle={"Mechanical Information"}/>
                            <div className="container">
                                <Mechanicalinfo fieldValues={fieldValues} nextStep={this.nextStep} previousStep={this.previousStep} saveValues={this.saveValues} saveToCollection={this.saveToCollection}/>
                                
                            </div>
                        </div>
                    )
             case 4:return (
                        <div className="main-right">
                            <InputHeader propsTitle={"Warranty and Pricing"}/>
                            <div className="container">
                                <Warrantyinfo fieldValues={fieldValues} nextStep={this.nextStep} previousStep={this.previousStep} saveValues={this.saveValues} updateToCollection={this.updateToCollection}/>
                                
                            </div>
                        </div>
                    )
             }
            
    }
});