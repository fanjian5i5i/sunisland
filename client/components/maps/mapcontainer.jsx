Mapcontainer = React.createClass({
  mixins: [ReactMeteorData],
  componentDidMount() {
    GoogleMaps.load({key:'AIzaSyAE68vsDEztBYLzlKgYCtg2Z5Ffi8pb9wY'});
    console.log(this.props.address);
    // console.log(HTTP);
    var httpStr = "https://fanjian5i5i.carto.com/api/v2/sql?q=SELECT * FROM structures_poly_35 ORDER BY the_geom <-> ST_SetSRID(ST_MakePoint("+ this.props.address.lng +", "+ this.props.address.lat +"), 4326) LIMIT 1";
    HTTP.call("GET", httpStr,
      function (error, result) {
        if (!error) {
          // Session.set("twizzled", true);
          console.log(result);
        }
      });
  },
  getMeteorData() {
    return {
      loaded: GoogleMaps.loaded(),
      mapOptions: GoogleMaps.loaded() && this._mapOptions()
    };
  },
  _mapOptions() {
    return {
      center: new google.maps.LatLng(this.props.address.lat,this.props.address.lng),
      zoom: 19,
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      tilt:0
      
    };
  },
  render() {

    if (this.data.loaded)
      return (
        <main className="main-right">
          <div className="row">
            <div className="col s12 m12 l12">
              <GoogleMap name="mymap" options={this.data.mapOptions} />
            </div>
          </div>
        </main>
      )

      

    return <div>Loading map...</div>;
  }
});