var React = require("react");
var Router = require('react-router');
var Link = require("react-router").Link;


var Homepage = React.createClass({

	render: function(){
		return (
			<div className="container">
				<div className="jumbotron head">
					<h1> This is Homepage Page </h1>
					<Link to="/Login"><button className="btn btn-primary btn-lg">Login</button></Link>
				</div>
			</div>
		);
	}

});

module.exports = Homepage;