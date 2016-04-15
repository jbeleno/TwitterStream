/**! TWITTER STREAM COLLECTOR
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 1.0.0
*
* This file is for loading and handling with react functions in JSX format
**/

var Navbar = React.createClass({
	displayName: "Navbar",

	render: function () {
		return React.createElement(
			"nav",
			{ className: "navbar navbar-fixed-top navbar-full navbar-dark bg-inverse hidden-md-up" },
			React.createElement(
				"button",
				{ className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#side-menu-toogle" },
				"☰"
			)
		);
	}
});

var ToogleContentNavbar = React.createClass({
	displayName: "ToogleContentNavbar",

	render: function () {
		return React.createElement(
			"div",
			{ className: "collapse", id: "side-menu-toogle" },
			React.createElement(
				"div",
				{ className: "bg-inverse p-a-1" },
				React.createElement(
					"h4",
					null,
					"Collapsed content"
				),
				React.createElement(
					"span",
					{ className: "text-muted" },
					"Toggleable via the navbar brand."
				)
			)
		);
	}
});

var SideMenu = React.createClass({
	displayName: "SideMenu",

	render: function () {
		return React.createElement(
			"div",
			{ id: "sideMenu", className: "side-menu hidden-sm-down" },
			React.createElement(
				"div",
				{ className: "text-xs-center" },
				React.createElement("img", { src: "http://www.myiconfinder.com/uploads/iconsets/624dc72b6deef6abddf29031c1ac7224.png", className: "side-menu-icon" })
			),
			React.createElement(
				"div",
				{ className: "margin-sides-075" },
				React.createElement(
					"button",
					{ type: "button", className: "btn btn-sm btn-green btn-block" },
					"NEW PROJECT"
				)
			),
			React.createElement(
				"div",
				{ className: "side-menu-header" },
				"MAIN NAVIGATION"
			),
			React.createElement(
				"div",
				{ className: "side-menu-item active" },
				React.createElement("span", { className: "fa fa-database side-menu-item-icon" }),
				React.createElement(
					"span",
					null,
					"Projects"
				)
			),
			React.createElement(
				"div",
				{ className: "side-menu-item" },
				React.createElement("span", { className: "fa fa-power-off side-menu-item-icon" }),
				React.createElement(
					"span",
					null,
					"Log Out"
				)
			)
		);
	}
});

var NewProjectBreadcrumb = React.createClass({
	displayName: "NewProjectBreadcrumb",

	render: function () {
		return React.createElement(
			"h4",
			null,
			React.createElement(
				"span",
				null,
				"New Project"
			),
			React.createElement(
				"span",
				{ className: "custom-breadcrumb" },
				React.createElement(
					"span",
					null,
					React.createElement("span", { className: "fa fa-database" }),
					" Projects"
				),
				React.createElement(
					"span",
					{ className: "no-pointer" },
					" > "
				),
				React.createElement(
					"span",
					null,
					React.createElement("span", { className: "fa fa-plus" }),
					" New Project"
				)
			)
		);
	}
});

var ProjectListBreadcrumb = React.createClass({
	displayName: "ProjectListBreadcrumb",

	render: function () {
		return React.createElement(
			"h4",
			null,
			React.createElement(
				"span",
				null,
				"Projects"
			),
			React.createElement(
				"span",
				{ className: "custom-breadcrumb" },
				React.createElement(
					"span",
					null,
					React.createElement("span", { className: "fa fa-database" }),
					React.createElement(
						"span",
						null,
						"Projects"
					)
				)
			)
		);
	}
});

var ProjectList = React.createClass({
	displayName: "ProjectList",

	render: function () {
		return React.createElement(
			"table",
			{ className: "table table-striped margin-top-3" },
			React.createElement(
				"thead",
				{ className: "thead-inverse" },
				React.createElement(
					"tr",
					null,
					React.createElement(
						"th",
						null,
						"ID"
					),
					React.createElement(
						"th",
						null,
						"Project Name"
					),
					React.createElement(
						"th",
						null,
						"Options"
					)
				)
			),
			React.createElement(
				"tbody",
				null,
				React.createElement(
					"tr",
					null,
					React.createElement(
						"td",
						null,
						"1"
					),
					React.createElement(
						"td",
						{ className: "gray-link" },
						"Semantic reasearch over twitter data"
					),
					React.createElement(
						"td",
						null,
						React.createElement(
							"button",
							{ type: "button", className: "btn btn-success-outline margin-top-025", "data-toggle": "tooltip", title: "View" },
							React.createElement("span", { className: "fa fa-eye" })
						),
						React.createElement(
							"button",
							{ type: "button", className: "btn btn-danger-outline margin-top-025", "data-toggle": "tooltip", title: "Delete" },
							React.createElement("span", { className: "fa fa-times" })
						)
					)
				),
				React.createElement(
					"tr",
					null,
					React.createElement(
						"td",
						null,
						"2"
					),
					React.createElement(
						"td",
						{ className: "gray-link" },
						"Semantic reasearch over twitter data"
					),
					React.createElement(
						"td",
						null,
						React.createElement(
							"button",
							{ type: "button", className: "btn btn-success-outline margin-top-025", "data-toggle": "tooltip", title: "View" },
							React.createElement("span", { className: "fa fa-eye" })
						),
						React.createElement(
							"button",
							{ type: "button", className: "btn btn-danger-outline margin-top-025", "data-toggle": "tooltip", title: "Delete" },
							React.createElement("span", { className: "fa fa-times" })
						)
					)
				),
				React.createElement(
					"tr",
					null,
					React.createElement(
						"td",
						null,
						"3"
					),
					React.createElement(
						"td",
						{ className: "gray-link" },
						"Semantic reasearch over twitter data"
					),
					React.createElement(
						"td",
						null,
						React.createElement(
							"button",
							{ type: "button", className: "btn btn-success-outline margin-top-025", "data-toggle": "tooltip", title: "View" },
							React.createElement("span", { className: "fa fa-eye" })
						),
						React.createElement(
							"button",
							{ type: "button", className: "btn btn-danger-outline margin-top-025", "data-toggle": "tooltip", title: "Delete" },
							React.createElement("span", { className: "fa fa-times" })
						)
					)
				)
			)
		);
	}
});

var NewProjectForm = React.createClass({
	displayName: "NewProjectForm",

	render: function () {
		return React.createElement(
			"div",
			{ className: "new-project-form" },
			React.createElement(
				"div",
				{ className: "form-group row" },
				React.createElement(
					"label",
					{ className: "col-sm-2 form-control-label" },
					"Name"
				),
				React.createElement(
					"div",
					{ className: "col-sm-10" },
					React.createElement("input", { type: "text", className: "form-control", id: "input-name", placeholder: "Project name" })
				)
			),
			React.createElement(
				"div",
				{ className: "form-group row" },
				React.createElement(
					"label",
					{ className: "col-sm-2 form-control-label" },
					"Follow"
				),
				React.createElement(
					"div",
					{ className: "col-sm-10" },
					React.createElement("textarea", { id: "textarea-follow", className: "form-control", rows: "3", placeholder: "Write up to 5,000 follow userids (use comma-separated values)" })
				)
			),
			React.createElement(
				"div",
				{ className: "form-group row" },
				React.createElement(
					"label",
					{ className: "col-sm-2 form-control-label" },
					"Track"
				),
				React.createElement(
					"div",
					{ className: "col-sm-10" },
					React.createElement("textarea", { id: "textarea-track", className: "form-control", rows: "3", placeholder: "Write up to 400 track keywords (use comma-separated values)" })
				)
			),
			React.createElement(
				"div",
				{ className: "form-group row" },
				React.createElement(
					"label",
					{ className: "col-sm-2 form-control-label" },
					"Location",
					React.createElement("span", { className: "fa fa-question-circle", "data-toggle": "tooltip", title: "Clic on the black square icon inside the map and drag and drop to draw a rectangle" })
				),
				React.createElement(
					"div",
					{ className: "col-sm-10" },
					React.createElement("div", { id: "map" })
				)
			),
			React.createElement(
				"div",
				{ className: "form-group row" },
				React.createElement(
					"label",
					{ className: "col-sm-2 form-control-label" },
					"Languages"
				),
				React.createElement(
					"div",
					{ className: "col-sm-10" },
					React.createElement("textarea", { id: "textarea-language", className: "form-control", rows: "3", placeholder: "Write comma-separated values of languages in the format requiered by Twitter (en, pt, es, en-US, ...)" })
				)
			),
			React.createElement(
				"div",
				{ className: "form-group row" },
				React.createElement(
					"label",
					{ className: "col-sm-2 form-control-label" },
					"Count"
				),
				React.createElement(
					"div",
					{ className: "col-sm-10" },
					React.createElement("input", { type: "number", className: "form-control", id: "input-count", placeholder: "Number of rows in the stream data requiered" })
				)
			),
			React.createElement(
				"div",
				{ className: "text-xs-center margin-top-3" },
				React.createElement("div", { id: "errorBoxNewProject" }),
				React.createElement(
					"button",
					{ id: "btnNewProject", className: "btn btn-standard btn-green" },
					"SAVE"
				)
			)
		);
	}
});

var Dashboard = React.createClass({
	displayName: "Dashboard",

	render: function () {
		return React.createElement(
			"div",
			{ id: "wrapperContent" },
			React.createElement(ToogleContentNavbar, null),
			React.createElement(Navbar, null),
			React.createElement(SideMenu, null),
			React.createElement(
				"div",
				{ className: "content" },
				React.createElement(NewProjectBreadcrumb, null),
				React.createElement(NewProjectForm, null)
			)
		);
	}
});

ReactDOM.render(React.createElement(Dashboard, null), document.getElementById('wrapper'));