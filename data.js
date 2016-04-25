Books = new Mongo.Collection("books");
Modules = new Mongo.Collection("modules");
if (Meteor.isServer){
	if (!Books.find().count()){
		Books.insert({
			author:"Anthony Doerr",
			name:"All the Light We Cannot See"
		});

		Books.insert({
			author:"Paula Hawkins",
			name:"The girl on the train"
		});
	}

	if (!Modules.find().count()){
		Modules.insert({
			generalInfo:"Test",
			title:"General Information"
		});

	}
}