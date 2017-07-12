var React = require("react");
var Router = require('react-router');

var Main = React.createClass({
	signUp: function(){
		console.log("signup class is working")
		location.href = "Login"
	},

	render: function(){
		return (
			<div>
				{this.props.children}
			</div>
		);
	}

});

module.exports = Main;