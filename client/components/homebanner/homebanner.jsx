Homebanner = React.createClass({
    getInitialState(){
        return {
            searchText:''
        };
    },
    componentDidMount(){
    },
    render(){
        const style = {
            "backgroundImage":'url(' + '/images/bostonkbgrd.jpg'+')',
            "backgroundSize":"cover"
        }
        return (
            <div className="row intro valign-wrapper green shades-text text-white no-margin margin-welcome" style={style}>
                <div className="container">
                        <h1>Primo Material</h1>
                        <h2>Free theme based on materialize.css</h2>
                        <a className="waves-effect waves-light btn-large light-blue accent-2 primo-btn" href="/Primo%20Material.zip" download=""><i className="material-icons right">file_download</i>Free Download</a>
                        <a href="#start" className="waves-effect waves-light btn-large light-blue accent-1"><i className="material-icons right">check</i>Get Started</a>
                      </div>
            </div>
        )
    }
});