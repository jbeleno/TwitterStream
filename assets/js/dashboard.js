/**! TWITTER STREAM COLLECTOR
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 1.0.0
*
* This file is for loading and handling with react functions in JSX format
**/

var Navbar = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-fixed-top navbar-full navbar-dark bg-inverse hidden-md-up">
		        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#side-menu-toogle">
		            &#9776;
		        </button>
		    </nav>
    	);
	}
});

var ToogleContentNavbar = React.createClass({
	render: function() {
		return (
			<div className="collapse" id="side-menu-toogle">
		        <div className="bg-inverse p-a-1">
		            <h4>Collapsed content</h4>
		            <span className="text-muted">Toggleable via the navbar brand.</span>
		        </div>
		    </div>
		);
	}
});

var SideMenu = React.createClass({
  	render: function() {
	    return (
	    	<div id="sideMenu" className="side-menu hidden-sm-down">
		      	<div className="text-xs-center">
		            <img src="http://www.myiconfinder.com/uploads/iconsets/624dc72b6deef6abddf29031c1ac7224.png" className="side-menu-icon" />
		        </div>
		        
		        <div className="margin-sides-075">
		            <button type="button" className="btn btn-sm btn-green btn-block">NEW PROJECT</button>
		        </div>

		        <div className="side-menu-header">
		            MAIN NAVIGATION
		        </div>

		        <div className="side-menu-item active">
		            <span className="fa fa-database side-menu-item-icon"></span>
		            <span>Projects</span>
		        </div>

		        <div className="side-menu-item">
		            <span className="fa fa-power-off side-menu-item-icon"></span>
		            <span>Log Out</span>
		        </div>
	        </div>
	    );
  	}
});


var NewProjectBreadcrumb = React.createClass({
  	render: function() {
	    return (
	    	<h4>
	            <span>New Project</span>
	            <span className="custom-breadcrumb">
	                <span>
	                    <span className="fa fa-database"></span> Projects
	                </span>
	                <span className="no-pointer"> > </span>
	                <span>
	                    <span className="fa fa-plus"></span> New Project  
	                </span>
	            </span>
	        </h4>
	    );
	}
});

var ProjectListBreadcrumb = React.createClass({
  	render: function() {
	    return (
			<h4>
	            <span>Projects</span>
	            <span className="custom-breadcrumb">
	                <span>
	                    <span className="fa fa-database"></span>
	                    <span>Projects</span>    
	                </span>
	            </span>
	        </h4>
	    );
	}
});


var ProjectList = React.createClass({
  	render: function() {
	    return (
			<table className="table table-striped margin-top-3">
	            <thead className="thead-inverse">
	                <tr>
	                    <th>ID</th>
	                    <th>Project Name</th>
	                    <th>Options</th>
	                </tr>
	            </thead>
	            <tbody>
	                <tr>
	                    <td>1</td>
	                    <td className="gray-link">Semantic reasearch over twitter data</td>
	                    <td>
	                        <button type="button" className="btn btn-success-outline margin-top-025" data-toggle="tooltip" title="View">
	                            <span className="fa fa-eye"></span>
	                        </button>
	                        <button type="button" className="btn btn-danger-outline margin-top-025" data-toggle="tooltip" title="Delete">
	                            <span className="fa fa-times"></span>
	                        </button>
	                    </td>
	                </tr>
	                <tr>
	                    <td>2</td>
	                    <td className="gray-link">Semantic reasearch over twitter data</td>
	                    <td>
	                        <button type="button" className="btn btn-success-outline margin-top-025" data-toggle="tooltip" title="View">
	                            <span className="fa fa-eye"></span>
	                        </button>
	                        <button type="button" className="btn btn-danger-outline margin-top-025" data-toggle="tooltip" title="Delete">
	                            <span className="fa fa-times"></span>
	                        </button>
	                    </td>
	                </tr>
	                <tr>
	                    <td>3</td>
	                    <td className="gray-link">Semantic reasearch over twitter data</td>
	                    <td>
	                        <button type="button" className="btn btn-success-outline margin-top-025" data-toggle="tooltip" title="View">
	                            <span className="fa fa-eye"></span>
	                        </button>
	                        <button type="button" className="btn btn-danger-outline margin-top-025" data-toggle="tooltip" title="Delete">
	                            <span className="fa fa-times"></span>
	                        </button>
	                    </td>
	                </tr>
	            </tbody>
	        </table>  
	    );
	}
});

var NewProjectForm = React.createClass({
  	render: function() {
	    return (
	        <div className="new-project-form">
	            <div className="form-group row">
	                <label className="col-sm-2 form-control-label">Name</label>
	                <div className="col-sm-10">
	                    <input type="text" className="form-control" id="input-name" placeholder="Project name" />
	                </div>
	            </div>

	            <div className="form-group row">
	                <label className="col-sm-2 form-control-label">Follow</label>
	                <div className="col-sm-10">
	                    <textarea id="textarea-follow" className="form-control" rows="3" placeholder="Write up to 5,000 follow userids (use comma-separated values)"></textarea>
	                </div>
	            </div>
	
	            <div className="form-group row">
	                <label className="col-sm-2 form-control-label">Track</label>
	                <div className="col-sm-10">
	                    <textarea id="textarea-track" className="form-control" rows="3" placeholder="Write up to 400 track keywords (use comma-separated values)"></textarea>
	                </div>
	            </div>

	            <div className="form-group row">
	                <label className="col-sm-2 form-control-label">
	                    Location
	                    <span className="fa fa-question-circle" data-toggle="tooltip" title="Clic on the black square icon inside the map and drag and drop to draw a rectangle"></span>
	                </label>
	                <div className="col-sm-10">
	                    <div id="map"></div>
	                </div>
	            </div>
	      
	            <div className="form-group row">
	                <label className="col-sm-2 form-control-label">Languages</label>
	                <div className="col-sm-10">
	                    <textarea id="textarea-language" className="form-control" rows="3" placeholder="Write comma-separated values of languages in the format requiered by Twitter (en, pt, es, en-US, ...)"></textarea>
	                </div>
	            </div>
	  
	            <div className="form-group row">
	                <label className="col-sm-2 form-control-label">Count</label>
	                <div className="col-sm-10">
	                    <input type="number" className="form-control" id="input-count" placeholder="Number of rows in the stream data requiered" />
	                </div>
	            </div>

	            <div className="form-group row">
	                <label className="col-sm-2 form-control-label">Start Date</label>
	                <div className="col-sm-10">
	                    <input type="text" className="form-control" id="input-start-date" placeholder="dd/mm/yyyy hh:ii:ss" />
	                </div>
	            </div>
	    
	            <div className="form-group row">
	                <label className="col-sm-2 form-control-label">Finish Date</label>
	                <div className="col-sm-10">
	                    <input type="text" className="form-control" id="input-finish-date" placeholder="dd/mm/yyyy hh:ii:ss" />
	                </div>
	            </div>
	     
	            <div className="text-xs-center margin-top-3">
	                <button className="btn btn-standard btn-green">SAVE</button>
	            </div>
	        </div>
		);
  	}
});

var Dashboard = React.createClass({
  	render: function() {
	    return (
	    	<div id="wrapperContent">
		    	<ToogleContentNavbar />
				<Navbar />
				<SideMenu />
				<div className="content">
			    	<NewProjectBreadcrumb />
			    	<NewProjectForm />
			    </div>
			</div>
		);
  	}
});

ReactDOM.render(
	<Dashboard />,
  	document.getElementById('wrapper')
);