Homebanner = React.createClass({
    getInitialState(){
        return {
            searchText:''
        };
    },
    componentDidMount(){
    },
    render(){
        const styles = {
            bkgStyle:{
                "backgroundImage":'url(' + '/images/bostonkbgrd.jpg'+')',
                "backgroundSize":"cover",
                height:760,
                width:"100%",
                overflow:"hidden",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
            },
            cardStyle:{
                padding:"0px !important",
                borderRadius:4
            },
            searchIcon:{
                fontSize:"2.5em",
                margin:4,
                position:"absolute"
            },
            searchInput:{

            }
        }
        return (
            <div className="intro valign-wrapper green shades-text text-white no-margin margin-welcome" style={styles.bkgStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col l12 s12">
                            <h3>Help Everyone Generate Solar Power</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l6 offset-l3 s12">
                            
                          <div className="card white">
                            <div className="card-content" style={styles.cardStyle}>

                              <form className="lighten-3">
                                    <i className="material-icons" style={styles.searchIcon}>search</i>
                                    <div className="input-field">
                                        <input id="search" type="search" required placeholder="Enter your home address..."/>
                                        <i className="mdi-navigation-close close"></i>
                                    </div>
                                    <a className="waves-effect waves-light btn btn-search">Search</a>
                                </form>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});