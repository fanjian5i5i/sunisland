Views.modules = function(){
	var proxy = webix.proxy("meteor", Modules);
	var templates = {
		gravity:3,
		type: "clean",
		rows:[
			{view: "tabbar", multiview: true, selected: "generalInfo", options:[
				{id: "generalInfo", value: "General Information", width: 200},
				{id: "regular", value: "Regular", width: 150},
				{id: "flightInfo", value: "Flight Info", width: 150}
			]},
			{
				view: "multiview",
				cells:[
					{
						id: "generalInfo",
						url: 	proxy,
						save:   proxy,
						rows:[
								{
									view: "form",
									cols:[
										{
											type: "form",
											borderless: true,
											width: 550,
											rows:[
												{
													cols:[
														{ view:"text", labelPosition: "top", label: "Model Name", placeholder: "Enter Product Model."},
														// {width: 40},
														// {}
													]
												},
												{
													cols:[
														{ view:"combo", labelPosition: "top", label:"Place of Origin", options:[ 
																			{ id:1, value:"China"   },
																			{ id:2, value:"Europe"   }, 
																			{ id:3, value:"USA" }
																		]},
		
													]
												},
												{
													cols:[
														{ view:"combo", labelPosition: "top", label:"Technology", options:[ 
																			{ id:1, value:"Monocrystalline"   },
																			{ id:2, value:"Multicrystalline"   }
																		]},
		
													]
												},
												{
													cols:[
														{ view:"combo", labelPosition: "top", label:"type", options:[ 
																			{ id:1, value:"N"   },
																			{ id:2, value:"P"   }
																		]},
		
													]
												},
												{
													cols:[
														{ view:"text", labelPosition: "top", label: "Dual Glass", options:[ 
																			{ id:1, value:"Yes"   },
																			{ id:2, value:"No"   }
																		]},
													]
												},
												{
													cols:[
														{ view:"text", labelPosition: "top", label: "Snow Load", placeholder: "Enter Snow Load."},
		
													]
												},
												{
													cols:[
														{ view:"text", labelPosition: "top", label: "Wind Load", placeholder: "Enter Wind Load."},
		
													]
												},												
												{inputWidth: 100,view:"button", type:"form", value:"Next", align: "left",
													click:function(){
																	// var row = $$("dtable").add({ name:"", author:"" });
																	// $$("dtable").editCell(row, "name")
																	console.log(123);
																	var module_gi = $$("generalInfo").add({generalInfo:"123",title:"123test"})
																}
												}
											]
										},
										{}

									]
								}
							]
					},
					{
						id: "regular",
						view: "datatable", select:true,
						columns:[
							{id:"id", header:"#", width:40},
							{id:"direction", header:"Direction", fillspace:true},
							{id:"date", header:"Date", width:150, sort:"date", format:webix.i18n.longDateFormatStr},
							{id:"price", header:"Price", width:95, sort:"int", format:webix.i18n.priceFormat},
							{id:"save", header:"You save", width:95, sort:"int", format:webix.i18n.priceFormat},
							{id:"places", header:"Tickets", width:65, sort:"int"},
							{id:"book", header:"Booking", css:"webix_el_button", width:100, template:"<a href='javascript:void(0)' class='check_flight'>Book now</a>"}
						]
					},
					{
						id: "flightInfo",
						view: "datatable", select:true,
						columns:[
							{id:"id", header:"#", width:40},
							{id:"direction", header:"Direction", fillspace:true},
							{id:"date", header:"Date", width:150, sort:"date", format:webix.i18n.longDateFormatStr},
							{id:"price", header:"Price", width:95, sort:"int", format:webix.i18n.priceFormat},
							{id:"save", header:"You save", width:95, sort:"int", format:webix.i18n.priceFormat},
							{id:"places", header:"Tickets", width:65, sort:"int"},
							{id:"book", header:"Booking", css:"webix_el_button", width:100, template:"<a href='javascript:void(0)' class='check_flight'>Book now</a>"}
						]
					}
				]
			}
		]
	};


	return {
		$ui:{
			type:"wide", rows:[ templates]
		}
	};

}