Maplayout = React.createClass({
    render(){
        return (
            <div className="wrapper">
                <div className="box">
                    <div className="srow row-offcanvas row-offcanvas-left push-down-50">
                        <NavbarPublic className="orange  lighten-1" logo={"/images/logo.png"}/>
                        {this.props.content}
                        <HomeFooter/>
                    </div>
                </div>
            </div>
        )
    }
});