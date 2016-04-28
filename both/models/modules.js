Modules = new Mongo.Collection('modules');
	
if (Meteor.isServer) {
	Modules.allow({
		'insert':function(userId, name, power, price, createdAt){
			return true;
		}
	});

	Modules.insert({
	  userId: 'oWwoaeX3L72sNr9wB',
	  name: 'Module 1', 
	  power: '100W', 
	  price:'1',	 
	  createdAt: new Date(), // current time
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
  	Meteor.publish('modules', function modulesPublication() {
    	return Modules.find();
  });
}
if(Meteor.isClient){
   Meteor.subscribe("modules", function(){
      console.log(Modules, Modules.find(), Modules.find().fetch());
   });
}