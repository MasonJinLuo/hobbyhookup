import React, { PropTypes } from 'react';
var Router = require('react-router');
var Link = require("react-router").Link;




const Messages = ({ user, message, receiver,  handlePostMessageClick }) => (

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
					
		<h2> Messages </h2>
		<div className="row">
		            <div className="col-sm-8 col-sm-offset-2">
		                    <div id="chat-window" className="panel panel-default">
		       
		                        <div id="chat-panel" className="panel-heading">
		                            <h4> Chat with {receiver} </h4>
		                        </div>
		      
		                        <div id="chat-panel" className="panel-body">
		                            <div className="row">
								    	{message.map(function(chat, i) {
								    		console.log( "++++++++++++++++++++++++++++++++++++++", chat)
						              		return (
						                		<div className ="col-lg-12 col-sm-12 col-xs-12" key={i}>               
						                			<p>{chat.sender}: {chat.message}</p>
						              			</div>
						              			);
						              	})}   
		                            </div>
		                        </div>  

		                        <div className="panel-footer">
		                            <div className="input-group">
		                                <input id="chat-input" type="text" className="form-control input-sm chat_input" placeholder="Type your message here..."></input> <span className="input-group-btn">
		                                    <button id="chat-send" className="btn btn-sm btn-snack" style={{color:'white'}} onClick={() => handlePostMessageClick(user.username)}>Send</button>
		                                </span> 
		                            </div>
		                        </div>                    
		                    </div>
		                </div>
		        </div>
		        <div id="copyright">
		            <ul><li>&copy; Hobby Hookup</li></ul>
		        </div>

	</div>
);


Messages.propTypes = {
  // secretData: PropTypes.string.isRequired
  user: PropTypes.object.isRequired
  // username: PropTypes.string.isRequired
};

export default Messages;