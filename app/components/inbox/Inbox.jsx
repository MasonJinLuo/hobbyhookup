import React, { PropTypes } from 'react';
var Router = require('react-router');
var Link = require("react-router").Link;

	// componentDidMount: function() {
	// 	$.ajax({
 //  			method: "GET",
 //  			url: "/api/inbox"
	// 	})
	// },



const Inbox = ({ user, handleUserClick }) => (
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
					    <Link to="/profile">Profile</Link>		
						<Link to="/inbox">Inbox</Link>	
						<Link to="/profile/update">Update</Link>
						<Link to="/logout">Logout</Link>
					</div>
			    </div>
			  </div>
			</div>
			</nav>	
		</div>

		<br></br>

	  <div className="panel panel-primary" id="inbox">
	      <div className="panel-heading">Inbox</div>
	      <div className="panel-body" id="unloadHere"></div>


	       <div className="inbox">
            <h2> Your Messages</h2>
              <div className="row">
              {user.inboxChatObject.inboxChats.map(function(chat, i) {
              return (
                <div className ="col-lg-12 col-sm-12 col-xs-12" key={i}>               
                <a href="#" onClick={() => handleUserClick(chat.sender)}><h4 className="messageSender">{chat.sender}</h4></a>
                <p className="inboxMessage">{chat.message}</p>
              </div>
              );
              })}              
              </div>
            </div>


	   </div>
	</div>
);


Inbox.propTypes = {
  // secretData: PropTypes.string.isRequired
  user: PropTypes.object.isRequired
  // username: PropTypes.string.isRequired
};

export default Inbox;