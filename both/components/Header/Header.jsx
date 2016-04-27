Header = React.createClass({
  render() {
    var navStyle = {
      backgroundColor:"#f57c00", 
      paddingLeft:"12px"
    };
    return (
      <nav style={navStyle}>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">SUNISLAND</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
        </nav>
    );
  }
});
