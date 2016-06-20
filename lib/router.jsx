publicRoutes = FlowRouter.group({
    name: 'publicroute'
});
privateRoutes = FlowRouter.group({
    name: 'privateroute',
    triggersEnter: [function (context, redirect) {
        var route;
        if (!Meteor.userId()) {
            return FlowRouter.go('/');
        }
    }]
});
publicRoutes.route('/', {
    name: 'Home',
    action: function () {
        ReactLayout.render(Homelayout, {});
    }
});
publicRoutes.route('/signin', {
    name: 'Home',
    action: function () {
        ReactLayout.render(SigninLayout, {});
    }
});
privateRoutes.route('/dashboard', {
    name: 'Dashboardmessages.html',
    action: function () {

        ReactLayout.render(Layout, {
            sidebar: <Sidebar/>,
            content: <Modulelist/>
        })
    }
});
privateRoutes.route('/newmodule', {
    name: 'AddNewModule.html',
    action: function () {

        ReactLayout.render(Layout, {
            sidebar: <Sidebar/>,
            content: <InputtabNewModule/>
        })
    }
});
privateRoutes.route('/editmodule/:moduleId', {
    name: 'AddNewModule.html',
    action: function (params) {
        ReactLayout.render(Layout, {
            sidebar: <Sidebar/>,
            content: <Inputtab moduleId={params.moduleId}/>
        })
    }
});
privateRoutes.route('/newmodule/electricalinfo', {
    name: 'electricalinfo.html',
    action: function () {

        ReactLayout.render(Layout, {
            sidebar: <Sidebar/>,
            content: <Electricalinfo/>
        })
    }
});
privateRoutes.route('/newmodule/mechanicalinfo', {
    name: 'electricalinfo.html',
    action: function () {

        ReactLayout.render(Layout, {
            sidebar: <Sidebar/>,
            content: <Mechanicalinfo/>
        })
    }
});

privateRoutes.route('/messages', {
    name: 'Messages',
    action: function () {
        ReactLayout.render(Layout, {
            sidebar: <Sidebar/>,
            content: <Messages/>
        })
    }
});

privateRoutes.route('/profile', {
    name: 'Profile',
    action: function () {
        ReactLayout.render(Layout, {
            sidebar: <Sidebar/>,
            content: <Profile/>
        })
    }
});
publicRoutes.route('/signout', {
    name: 'Signout',
    action: function () {
        Meteor.logout(function () {
            FlowRouter.go('/');
        })
    }
});
publicRoutes.route('/user/:fullname', {
    name: 'UserHome',
    action: function (params) {
        ReactLayout.render(Layout, {
            sidebar: <Sidebar/>,
            content: params.fullname ? <Home fullname={params.fullname}/> : 'No User Found'
        })
    }
});
publicRoutes.route('/friends', {
    name: 'UserHome',
    action: function (params) {
        ReactLayout.render(Layout, {
            sidebar: <Sidebar/>,
            content: <FriendsList/>
        })
    }
});