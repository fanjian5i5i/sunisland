Maplayout = React.createClass({
    render(){
        const styles = {
            bkgStyle:{
                background:"#eeeeee"
            }
        };
        return (
            <div className="wrapper">
                <div className="box">
                    <div className="srow row-offcanvas row-offcanvas-left push-down-50" style={styles.bkgStyle}>
                        <NavbarPublic className="orange  lighten-1" logo={"/images/logo.png"}/>
                        {this.props.content}
                        
                        <HomeFooter/>
                    </div>
                </div>
            </div>
        )
    }
});