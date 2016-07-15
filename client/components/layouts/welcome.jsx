Welcomelayout = React.createClass({
    
    render(){
        var logoStyle={
            'height': '50px','with':'150px'
        };
        return (
            <div>
                <NavbarPublic/>
                <Homebanner/>
                <HomeFooter/>
            </div>
        )
    }
});