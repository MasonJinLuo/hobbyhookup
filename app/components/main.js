var React = require("react");
var Router = require('react-router');
var Link = require("react-router").Link;

var Main = React.createClass({
	componentDidMount() {
        window.scrollTo(0, 0);
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