Homebanner = React.createClass({
    getInitialState(){
        return {
            searchText:''
        };
    },
    componentDidMount(){
    },
    _handleKeyPress(e){
        // e.preventDefault();
        if (e.key === 'Enter') {
            e.preventDefault();
            HTTP.call( 'GET', 'http://maps.googleapis.com/maps/api/geocode/json?address='+this.refs.address.value, function( error, response ) {
              // Handle the error or response here.
              if(!error){
                console.log(response.data.results[0].geometry.location)
                FlowRouter.go('/map/address?lat=' + response.data.results[0].geometry.location.lat + '&lng='+ response.data.results[0].geometry.location.lng);
              }
            });
            // console.log(2);
        }
    },
    handleClick(e){
        e.preventDefault();
        HTTP.call( 'GET', 'http://maps.googleapis.com/maps/api/geocode/json?address='+this.refs.address.value, function( error, response ) {
          // Handle the error or response here.
          if(!error){
            console.log(response.data.results[0].geometry.location)
            FlowRouter.go('/map/address?lat=' + response.data.results[0].geometry.location.lat + '&lng='+ response.data.results[0].geometry.location.lng);
          }
        });
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
                color:"#ffa726",
                fontSize:"2.5em",
                margin:4,
                position:"absolute",
                zIndex:99
            }
        }
        return (
            <div className="intro valign-wrapper green shades-text text-white no-margin margin-welcome" style={styles.bkgStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col l12 s12 center-align">
                            <h3>Help Everyone Generate Solar Power</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l6 offset-l3 s12">
                            
                          <div className="card white">
                            <div className="card-content" style={styles.cardStyle}>

                              <form className="lighten-3">
                                    <i className="material-icons" style={styles.searchIcon}>search</i>
                                    <div className="input-field searchInput">
                                        <input id="search" type="search" required placeholder="Enter your home address..." ref="address" onKeyPress = {this._handleKeyPress}/>
                                        <i className="mdi-navigation-close close"></i>
                                    </div>
                                    <a className="waves-effect waves-light btn btn-search orange lighten-1" onClick={this.handleClick} >Search</a>
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