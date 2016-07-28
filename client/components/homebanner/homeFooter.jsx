HomeFooter = React.createClass({
    getInitialState(){
        return {
            searchText:''
        };
    },
    componentDidMount(){
    },
    render(){
        const style = {
            marginTop:0
        };
        return (
            <footer className="page-footer orange  lighten-1" style={style}>
              <div className="container">
                <div className="row">
                  <div className="col l6 s12">
                    <h5 className="white-text">SUN ISLAND</h5>
                    <p className="grey-text text-lighten-4">Help Everyone Generate Solar Power.</p>
                  </div>
                  <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Links</h5>
                    <ul>
                      <li><a className="grey-text text-lighten-3" href="#!">About</a></li>
                      <li><a className="grey-text text-lighten-3" href="#!">Team</a></li>
                      <li><a className="grey-text text-lighten-3" href="#!">FAQ</a></li>
                      <li><a className="grey-text text-lighten-3" href="#!">Sign Up</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <div className="container">
                © 2015 Copyright SUN ISALND
                <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
              </div>
            </footer>
        )
    }
});