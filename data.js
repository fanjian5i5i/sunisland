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
			moduleName:"Test",
			placeOfOrigin:"China",
			Technology:"Mono",
			Type:"N",
			dualGLass:"N",
			snowLoad:60,
			windLoad:90,
			features:"Just some random text.. .asdfadfad.a.sd.fasdfa...dasdfasdfasdfsad",
			power:100,
			weight: 100,
			productWarranty:20,
			price:0.9
		});

	}
}