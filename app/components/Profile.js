var React = require("react");
var Router = require('react-router');

var Profile = React.createClass({
	render: function(){
		return(
			<div className="container">
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
       			<div id="main">
    			<div className="row">
    			    <div className="col-xs-12 col-sm-6 col-md-6">
    			        <div className="well well-sm">
    			            <div className="row">
    			                <div className="col-sm-6 col-md-4">
    			                    <img src="http://placehold.it/380x500" alt="" className="img-rounded img-responsive" />
    			                </div>
    			                <div className="col-sm-6 col-md-8">
    			                    <h4 className="profName">
    			                        Fake Name
    			                    </h4>
    			                    <small><cite title="San Francisco, USA">San Francisco, USA <i className="glyphicon glyphicon-map-marker">
    			                    </i></cite></small>
    			                    <p>
    			                        <i className="glyphicon glyphicon-user"></i>Age
    			                    </p>
    			                </div>
    			            </div>
    			        </div>
    			    </div>
    			</div>
    			<div className="hobbyPics">
    				<h2> Your Hobbies </h2>
  						<div className="row">
  							 <div className="col-lg-4 col-sm-6 col-xs-12">
  							     <a href="#">
  							          <img src="http://placehold.it/800x600" className="thumbnail img-responsive"></img>
  							     </a>
  							 </div>
  							  <div className="col-lg-4 col-sm-6 col-xs-12">
  							     <a href="#">
  							          <img src="http://placehold.it/800x600" className="thumbnail img-responsive"></img>
  							     </a>
  							 </div>
  							  <div className="col-lg-4 col-sm-6 col-xs-12">
  							     <a href="#">
  							          <img src="http://placehold.it/800x600" className="thumbnail img-responsive"></img>
  							     </a>
  							 </div>
  							  <div className="col-lg-4 col-sm-6 col-xs-12">
  							     <a href="#">
  							          <img src="http://placehold.it/800x600" className="thumbnail img-responsive"></img>
  							     </a>
  							 </div>
  							  <div className="col-lg-4 col-sm-6 col-xs-12">
  							     <a href="#">
  							          <img src="http://placehold.it/800x600" className="thumbnail img-responsive"></img>
  							     </a>
  							 </div>
  							  <div className="col-lg-4 col-sm-6 col-xs-12">
  							     <a href="#">
  							          <img src="http://placehold.it/800x600" className="thumbnail img-responsive"></img>
  							     </a>
  							 </div>
  						</div>
  					</div>
  					<div className="hobbyPics">
    				<h2> Your Recent Matches </h2>
  						<div className="row">
  							 <div className="col-lg-4 col-sm-6 col-xs-12">
  							     <a href="#">
  							          <img src="http://placehold.it/800x600" className="img-circle img-responsive"></img>
  							     </a>
  							 </div>
  							  <div className="col-lg-4 col-sm-6 col-xs-12">
  							     <a href="#">
  							          <img src="http://placehold.it/800x600" className="img-circle img-responsive"></img>
  							     </a>
  							 </div>
  							  <div className="col-lg-4 col-sm-6 col-xs-12">
  							     <a href="#">
  							          <img src="http://placehold.it/800x600" className="img-circle img-responsive"></img>
  							     </a>
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

module.exports = Profile;