Sidebar = React.createClass({
    links:[
        {_id:1,href:'/profile',icon:'perm_identity',text:'Profile'},
        {_id:2,href:'/dashboard',icon:'dashboard',text:'Dashboard'},
        // {_id:3,href:'/messages',icon:'fa fa-home fa-2x',text:'Modules'},
        // {_id:4,href:'/friends',icon:'fa fa-users fa-2x',text:'Invertors'},
        {_id:3,href:'/newmodule',icon:'note_add',text:'Add New'}
    ],
    handleClick(){
        $('.button-collapse').sideNav('hide');
    },
    render(){
        var rows = this.links.map(function (link) {
            return (
                <li key={link._id}>
                    <a href={link.href}><i className="medium left material-icons icons-margin-top">{link.icon}</i> {link.text}</a>
                </li>
            )
        });
        return (
            <div>
                <ul id="slide-out" className="side-nav fixed side-nav-margin" onClick={this.handleClick}>
                      {rows}
                </ul>
            </div>
        )
    }
});
