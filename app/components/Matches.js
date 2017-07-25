var React = require("react");
var Router = require('react-router');
var Link = require("react-router").Link;

var Matches = React.createClass({
	componentDidMount() {
        window.scrollTo(0, 0);
	},
		
	render: function() {

	return(
	<div>
		<h2> Your Matches </h2>
		<div className="row">
			<div className="col-lg-4 col-sm-6 col-xs-12" id="match1">
				<Link to="/Messages"><a href="#">
					<img src={this.props.img1} className="img-circle img-responsive" id="matchPicture1"></img>
				 </a></Link>
				<h4 id="matchName1">{this.props.name1}</h4>
			</div>
			<div className="col-lg-4 col-sm-6 col-xs-12" id="match2">
				<a href="#">
				    <img src={this.props.img2} className="img-circle img-responsive" id="matchPicture2"></img>
				 </a>
				 <h4 id="matchName2">{this.props.name2}</h4>
			</div>
			<div className="col-lg-4 col-sm-6 col-xs-12" id="match2">
				<a href="#">
				    <img src={this.props.img3}  className="img-circle img-responsive" id="matchPicture3"></img>
				</a>
				<h4 id="matchName3">{this.props.name3}</h4>
			</div>
		</div>
	</div>
	);
	}
});

module.exports = Matches;