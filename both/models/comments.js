Comments = new Mongo.Collection('comments');
	
if (Meteor.isServer) {
	Comments.allow({
		'insert':function(userId, text, createdAt){
			return true;
		}
	});

	// Modules.insert({
	//   name: 'Module 1', 
	//   power: '100W', 
	//   price:'1',	 
	//   createdAt: new Date(), // current time
	// });
	// Modules.insert({
	//   name: 'Module 2', 
	//   power: '120W', 
	//   price:'2',	 
	//   createdAt: new Date(), // current time
	// });
	// Modules.insert({
	//   name: 'Module 3', 
	//   power: '90W', 
	//   price:'1',	 
	//   createdAt: new Date(), // current time
	// });
}

if (Meteor.isServer) {
  // This code only runs on the server
  	Meteor.publish('comments', function commentsPublication() {
    	return Comments.find();
  });
}
if(Meteor.isClient){
   Meteor.subscribe("comments", function(){
   });
}