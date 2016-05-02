Sidebar = React.createClass({
    links:[
        {_id:1,href:'/profile',icon:'fa fa-user fa-2x',text:'Profile'},
        {_id:2,href:'/dashboard',icon:'fa fa-home fa-2x',text:'Dashboard'},
        // {_id:3,href:'/messages',icon:'fa fa-home fa-2x',text:'Modules'},
        // {_id:4,href:'/friends',icon:'fa fa-users fa-2x',text:'Invertors'},
        {_id:3,href:'/newmodule',icon:'fa fa-file fa-2x',text:'Add New'}
    ],
    render(){
        var rows = this.links.map(function (link) {
            return (
                <li key={link._id}>
                    <a href={link.href}><i className={link.icon}></i> {link.text}</a>
                </li>
            )
        });
        return (
            <div className="column col-sm-2 col-xs-1 sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li>
                        <a href="#" data-toggle="offcanvas" className="visible-xs text-center">
                            <i className="fa fa-list-alt"></i>
                        </a>
                    </li>
                </ul>
                <ul className="nav hidden-xs" id="lg-menu">
                    {rows}
                </ul>
            </div>
        )
    }
});
