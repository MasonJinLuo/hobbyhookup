var React = require("react");
var Router = require('react-router');
var Link = require("react-router").Link;

var Inbox = React.createClass({	

	// componentDidMount: function() {
	// 	$.ajax({
 //  			method: "GET",
 //  			url: "/api/inbox"
	// 	})
	// },

	render: function() {

	return(
	<div>
		<div className="container navContainer">
			<nav className="navbar navbar-default">
			<div className="container-fluid">

			<div className="navbar-header">
			  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			    <span className="sr-only">Toggle navigation</span>
			    <span className="icon-bar"></span>
			    <span className="icon-bar"></span>
			    <span className="icon-bar"></span>
			  </button>
			  <h3 className="navbar-brand" href="/home">Hobby Hookup</h3>
			</div>

			  <form className="navbar-form navbar-left">
			    <div className="form-group">
			      <input type="text" className="form-control" placeholder="Search"></input>
			    </div>
			    <button type="submit" className="btn btn-default">Submit</button>
			  </form>
			  <div className="nav navbar-nav navbar-right">
			    <div className="dropdown">
			    	<button className="dropbtn btn btn-lg btn-default"> 
			    		<span className="glyphicon glyphicon-list"></span> 
			    	</button>
			    	<div className="dropdown-content">
					    <a href="#">Profile</a>
					    <a href="#">Inbox</a>
					    <a href="#">Update</a>
					    <a href="#">Logout</a>
					</div>
			    </div>
			  </div>
			</div>
			</nav>	
		</div>

		<br></br>

	  <div className="panel panel-primary" id="inbox">
	      <div className="panel-heading">Inbox</div>
	      <div className="panel-body" id="unloadHere">Content</div>
	   </div>
	</div>
	);
	}
});

module.exports = Inbox;