var React = require("react");
var Router = require('react-router');

var Login = React.createClass({
	componentDidMount() {
        window.scrollTo(0, 0);
	},
	
	render: function(){
		return (
			<div className="container">
				<div className="jumbotron head">
					<h1> This is Login Page </h1>
				</div>
			</div>
		);
	}

});

module.exports = Login;