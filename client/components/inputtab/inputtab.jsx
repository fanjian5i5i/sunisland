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
    componentDidMount: function() {
        console.log(this.props.moduleId);
        // var module_edit = Modules.findOne(this.props.moduleId);
        // console.log(module_edit);
        // setTimeout(function() {
        //     if(module_edit){
        //         fieldValues = module_edit;
        //         console.log(fieldValues);
        //     }else{
        //         Materialize.toast('Cannot find module ' + this.props.moduleId, 4000);
        //     }
        // }, 2000);
        // Modules.find({'_id':that.props.moduleId},function(err,cursor){
        //     if(err){
        //         console.log(err);
        //         Materialize.toast('Cannot find module ' + that.props.moduleId, 4000);
        //     }else{
        //         console.log(cursor);
        //     }
        // })
        Meteor.call('Modules.insert',this.props.moduleId,function(err,result){
            if(err){
                Materialize.toast('Cannot find module ' + that.props.moduleId, 4000);
            }else{
                console.log(result);
                fieldValues = result;
            }
        });
        
    },
    saveValues(fields) {
     return function() {
     // Remember, `fieldValues` is set at the top of this file, we are simply appending
     // to and overriding keys in `fieldValues` with the `fields` with Object.assign
     // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
     fieldValues = Object.assign({}, fieldValues, fields)
     }()
    },
    saveToCollection(){
        Meteor.call('Modules.insert',fieldValues,function(err){
            if(err){
                console.log(err);
            }
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
                                <Generalinfo fieldValues={fieldValues} nextStep={this.nextStep} saveValues={this.saveValues}/>
                                
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
             }
            
    }
});