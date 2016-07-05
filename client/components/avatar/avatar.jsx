Avatar = React.createClass({
    getInitialState(){
        let state = {};
        state.avatar = 'http://placehold.it/250x250';
        return state;
    },
    mixins: [ReactMeteorData],
    getMeteorData(){
        var imagehandle = Meteor.subscribe('imagelist',this.props.user);
        var data = {};
        if(imagehandle.ready()){
            data.img = Images.findOne({_id:this.props.imgid});
        }
        return data;
    },
    render(){
        var avatar = this.state.avatar;


        if(this.data.img){
            avatar = this.data.img.url();
        }
        return (
            <img className={this.props.klass} src={avatar} alt="Image"/>
        )
    }
});