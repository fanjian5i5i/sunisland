SigninLayout = React.createClass({
    
    render(){
        var logoStyle={
            'height': '50px','with':'150px'
        };
        return (
            <div className="signup">
                <div className="container">
                    <div className="row white-text">
                        <div className="col s6 offset-s3">
                            <div className="logo">SUN ISLAND</div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row white-text">
                        <div className="signup-text col s6 offset-s3">Sign In</div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-md-offset-1">
                            <Signinform/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});