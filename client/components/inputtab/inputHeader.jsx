InputHeader = React.createClass({
    render(){
        return (
            <header>
                <nav className="top-nav secondNav yellow darken-3">
                        <div className="container">
                          <div className="nav-wrapper"><a className="page-title">{this.props.propsTitle}</a></div>
                        </div>
                      </nav>
            </header>
        )
    }
});
