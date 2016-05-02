Modules = new Mongo.Collection('modules');
Modules.allow({
    insert:function(){
        return true;
    },
    update:function(){
        return true;
    },
    remove:function(){
        return true;
    }
});