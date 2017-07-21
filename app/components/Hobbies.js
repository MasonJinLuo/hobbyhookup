var React = require("react");
var Router = require('react-router');

var Hobbies = React.createClass({
	render: function(){
		return (
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
		<div id='main'>
			<article className="post featured">
				<header className="major">
					<h2><a href="#">Beekeeping</a></h2>				
				</header>
				<a href="#" className="image main"><img src="images/bees2.jpg" alt="" /></a>
				<ul className="actions">
					<li><a href="#" className="button big" id="connectBTN">Connect</a></li>
				</ul>
			</article>
			<div className="matches">
    			<h2> Your Matches </h2>
  				<div className="row">
  					<div className="col-lg-4 col-sm-6 col-xs-12" id="match1">
  						<a href="#">
  							<img src="http://placehold.it/800x600" className="img-circle img-responsive" id="matchPicture1"></img>
  						 </a>
  						<h4 id="matchName1">Name</h4>
  					</div>
  					<div className="col-lg-4 col-sm-6 col-xs-12" id="match2">
  						<a href="#">
  						    <img src="http://placehold.it/800x600" className="img-circle img-responsive" id="matchPicture2"></img>
  						 </a>
  						 <h4 id="matchName2">Name</h4>
  					</div>
  					<div className="col-lg-4 col-sm-6 col-xs-12" id="match2">
  						<a href="#">
  						    <img src="http://placehold.it/800x600" className="img-circle img-responsive" id="matchPicture3"></img>
  						</a>
  						<h4 id="matchName3">Name</h4>
  					</div>
  				</div>
  			</div>
		</div>
		<div id="copyright">
			<ul><li>&copy; Hobby Hookup</li></ul>
		</div>
	</div>



		);
	}

});

module.exports = Hobbies;