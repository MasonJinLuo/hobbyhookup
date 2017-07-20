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

		<div className='container'>
			<div className='hobbyContainer'>
				<div> Bee Keeping </div>
			</div> 
		<br></br>
		<div className='infoContainer'>
		    <div>Information Content</div>
	    </div>
		</div>
		<br></br>
		<div className='container'>
			<button className='connectButton btn btn-success'> Connect </button>
		</div> 
		</div>
		);
	}

});

module.exports = Hobbies;