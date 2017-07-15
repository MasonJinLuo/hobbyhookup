var React = require("react");

var Hobby = React.createClass({

	render: function(){
		return (
			<article>
				<header>
					<h2><a href="#">{this.props.title}<br></br></a></h2>
				</header>
				<a href="#" className="image fit"><img src={this.props.image} alt="" /></a>
				<ul className="actions">
					<li><a href={this.props.route} className="button">Match Now!</a></li>
				</ul>
			</article>
		)
	}

});


module.exports = Hobby;
