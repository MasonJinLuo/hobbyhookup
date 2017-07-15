var React = require("react");
var Router = require('react-router');
var Link = require("react-router").Link;

var Hobby = React.createClass({

	render: function(){
		return (
			<article>
				<header>
					<h2><a href="#">{this.props.title}<br></br></a></h2>
				</header>
				<Link to="/Hobbies"><a href="#" className="image fit"><img src={this.props.image} alt="" /></a></Link>
				<ul className="actions">
					<li><Link to="/Hobbies"><a href={this.props.route} className="button">Match Now!</a></Link></li>
				</ul>
			</article>
		)
	}

});


module.exports = Hobby;
