Views.modules = function(){

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
														{ view:"text", labelPosition: "top", label: "Place of Origin", placeholder: "Enter Place of Origin."},
														// {width: 40},
														// {}
													]
												},
												{

													cols:[
														{ view:"combo", labelPosition: "top", label:"From", suggest:"cities", placeholder:"Select departure point"},
														{width: 40},
														{view:"combo", labelPosition: "top", label:"To",  suggest:"cities", placeholder:"Select destination"}
													]
												},
												{inputWidth: 100,view:"button", type:"form", value:"Search", align: "left"}
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