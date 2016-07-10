Welcomelayout = React.createClass({
    
    render(){
        var logoStyle={
            'height': '50px','with':'150px'
        };
        return (
            <div className="row">
                <NavbarPublic/>
                <Homebanner/>
            </div>
        )
    }
});