Mapcards = React.createClass({
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
                window.location.href ='/map/address?lat=' + response.data.results[0].geometry.location.lat + '&lng='+ response.data.results[0].geometry.location.lng;
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
            window.location.href ='/map/address?lat=' + response.data.results[0].geometry.location.lat + '&lng='+ response.data.results[0].geometry.location.lng;
            // FlowRouter.reload('/map/address?lat=' + response.data.results[0].geometry.location.lat + '&lng='+ response.data.results[0].geometry.location.lng);
          }
        });
    },
    render(){
        const styles = {
            bkgStyle:{
                background:"#eeeeee"
            },
            searchStyle:{
                padding:"0px !important",
                borderRadius:4
            },
            cardStyle:{
                height:250
            },
            searchIcon:{
                color:"#ffa726",
                fontSize:"2.5em",
                margin:4,
                position:"absolute",
                zIndex:99
            },
            slider:{
                paddingTop:40
            },
            money:{
                paddingTop:6
            }
        };
        var sqft = Math.round(this.props.params.area);
        return (
                <div className="row">
                    <div className="container">
                        <div className="col l6 offset-l3 m12 s12">

                          <div className="card white">
                            <div className="card-content" style={styles.searchStyle}>

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
                        <div className="col s12 m6 l6">
                          <div className="card" style={styles.cardStyle}>
                            <div className="card-content">
                              <h5 className="center-align">What's your average monthly electric bill?</h5>
                              <p className="center-align">We use your bill to calculate how much electricity you use <br/> based on typical utility rates in your area.</p>
                              <div className="row" style={styles.slider}>
                                  <p className="col s1 m1 l1 offset-l1 center-align" style={styles.money}>$0</p>
                                  <form action="#" className="col s9 m9 l8">
                                      <p className="range-field ">
                                        <input type="range" min="0" max="500" ref="slider"/>
                                      </p>
                                    </form>
                                   <p className="col s1 m1 l1 center-align" style={styles.money}>$500</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col s12 m6 l6">
                          <div className="card" style={styles.cardStyle}>
                            <div className="card-content">
                              <h5 className="center-align">Your recommended solar installation size</h5>
                              <p className="center-align">This size will cover about 96% of your electricity usage. <br/>Solar installations are sized in kilowatts (kW).</p>
                              <h5 className="center-align">6.75kW</h5>
                              <p className="center-align">({sqft} Square Feet)</p>
                            </div>
                          </div>
                        </div>
                    </div>
            </div>


        )
    }
});
