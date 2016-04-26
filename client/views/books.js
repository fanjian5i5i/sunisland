Views.books = function(){
	var proxy = webix.proxy("meteor", Modules);

	//datatable
	var table = {
		view:"datatable",
		id:"dtable", select:true, multiselect:true,
		editable:true, editaction:"dblclick",
		columns:[{
			id:"moduleName", Label:"Module Name",editor:"text", fillspace:1
		},{
			id:"placeOfOrigin", editor:"text", fillspace:1
		},{
			id:"Technology", editor:"text", fillspace:1
		},{
			id:"features", editor:"text", fillspace:1
		},{
			id:"power", editor:"text", fillspace:1
		},{
			id:"productWarranty", editor:"text", fillspace:1
		},{
			id:"price", editor:"text", fillspace:1
		}],
		url: 	proxy,
		save:   proxy
	};

	var toolbar = {
		view:"toolbar",
		elements:[
			{ view:"label", label:"Dbl-Click to edit any row"},
			{ view:"button", value:"Add", width:100, click:function(){
				// var row = $$("dtable").add({ "Module Name":"", "Place of Origin":"" });
				// $$("dtable").editCell(row, "name")
				// Router.route('/app/modules');
				window.location.href = '/app/modules';
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