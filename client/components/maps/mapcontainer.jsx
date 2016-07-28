Mapcontainer = React.createClass({
  mixins: [ReactMeteorData],
  componentDidMount() {
    GoogleMaps.load({key:'AIzaSyAE68vsDEztBYLzlKgYCtg2Z5Ffi8pb9wY'});
    console.log(this.props.address);
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
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.SATELLITE,
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