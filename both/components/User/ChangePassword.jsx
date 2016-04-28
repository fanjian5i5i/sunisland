ChangePassword = React.createClass({
	onSubmit(e){
		e.preventDefault();
		console.log(this.refs.oldPassword.getDOMNode().value);

		var oldPassword = this.refs.oldPassword.getDOMNode().value;
		var newPassword = this.refs.newPassword.getDOMNode().value;
		var confirmPassword = this.refs.confirmPassword.getDOMNode().value;

		if(newPassword === confirmPassword){
			Accounts.changePassword(oldPassword,newPassword, (err)=>{
				if(err){
					Materialize.toast(err.reason, 4000);
				}else{
					Materialize.toast("Password is changed", 4000);
					FlowRouter.go('/');
				}
			});
		}
	},
	render(){
		return (
			<div className="row">
				<div className="row">
					<h4 className="text-center">Change Password</h4>
					  <form onSubmit={this.onSubmit} className="col offset-s4 s4">
					    <div className="row">
					      <div className="input-field col s12">
					        <input id="oldPassword" ref="oldPassword" type="password" className="validate"/>
					        <label htmlFor="email">Old Password</label>
					      </div>
					     </div>
					     <div className="row">
					      <div className="input-field col s12">
					        <input id="newPassword" ref="newPassword" type="password" className="validate"/>
					        <label htmlFor="password">New Password</label>
					      </div>
					     </div>
						<div className="row">
						 <div className="input-field col s12">
						   <input id="confirmPassword" ref="confirmPassword" type="password" className="validate"/>
						   <label htmlFor="password">Confirm Password</label>
						 </div>
						</div>

					     <div className="row">
					     	<button className="waves-effect waves-light btn btn-block">Submit</button>
					     </div>
					  </form>
				</div>
			</div>
		)
	}
});