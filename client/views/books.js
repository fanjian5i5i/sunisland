Views.books = function(){
	var proxy = webix.proxy("meteor", Books);

	//datatable
	var table = {
		view:"datatable",
		id:"dtable", select:true, multiselect:true,
		editable:true, editaction:"dblclick",
		columns:[{
			id:"name", editor:"text", fillspace:1
		},{
			id:"author", editor:"text", fillspace:1
		}],
		url: 	proxy,
		save:   proxy
	};

	var toolbar = {
		view:"toolbar",
		elements:[
			{ view:"label", label:"Dbl-Click to edit any row"},
			{ view:"button", value:"Add", width:100, click:function(){
				var row = $$("dtable").add({ name:"", author:"" });
				$$("dtable").editCell(row, "name")
			}},
			{ view:"button", value:"Remove", width:100, click:function(){
				var id = $$("dtable").getSelectedId();
				if (id)
					$$("dtable").remove(id);
				else
					webix.message("Please select any row first");
			}}
		]
	};

	return {
		rows:[toolbar, table]
	};

}