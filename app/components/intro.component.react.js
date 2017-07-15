var React = require("react");

var Intro = React.createClass({

	render: function(){
		return (
			<div id="intro">
				<h1>Hobby test <br></br>
				Hookup</h1>
				<p>Find Your Next Passion.</p>
				<ul className="actions">
					<li><a href="#header" className="button icon solo fa-arrow-down scrolly">Continue</a></li>
				</ul>
			</div>

		)
	}

});


module.exports = Intro;
