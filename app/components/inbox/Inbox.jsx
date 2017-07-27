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
                      
                     <Link to="/"><h3 className="navbar-brand">Hobby Hookup</h3></Link>
                    </div>

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
	      <div className="panel-heading" id="chat-panel"><h2>Inbox</h2></div>
            <h3 id="panel-body">Your Messages</h3>
              <div className="row panel-body">
              {user.inboxChatObject.inboxChats.map(function(chat, i) {
              return (
                <div className ="col-lg-12 col-sm-12 col-xs-12" key={i}>               
                	<Link to={'/Messages/' + chat.sender}><h4 className="messageSender">{chat.sender}</h4></Link>
                	<p className="inboxMessage">{chat.message}</p>
              	</div>
              );
              })}              
              </div>
            </div>

	</div>
);

// <a href="#" onClick={() => handleUserClick(chat.sender)}><h4 className="messageSender">{chat.sender}</h4></a>

Inbox.propTypes = {
  // secretData: PropTypes.string.isRequired
  user: PropTypes.object.isRequired
  // username: PropTypes.string.isRequired
};

export default Inbox;