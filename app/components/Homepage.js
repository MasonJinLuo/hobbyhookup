var React = require("react");
var Router = require('react-router');
var Link = require("react-router").Link;

import Hobby from './hobby.component.react.js';
import Intro from './intro.component.react.js';

var Homepage = React.createClass({

	render: function(){
		return (
					<div id="wrapper">

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

					<Intro/>

				
					<header id="header">


						<a href="index.html" className="logo">Hobby Hookup</a>
					</header>

					<nav id="nav">
						<ul className="links">
							<li className="active"><a href="index.html">Hobby Hookup</a></li>
							<Link to="/Profile"><li><a href="profile.html">About Us</a></li></Link>
						</ul>
						<ul className="icons">
							<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
							<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
							<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
							<li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
						</ul>
					</nav>

				
					<div id="main">
						
							<article className="post featured">
								<header className="major">
									<h2><a href="#">TEST Featured Hobby of July:<br></br>
									Beekeeping</a></h2>
									<p>Become one with the Hive.<br></br>
									Join Thousands of Urban and Rural Beekeepers.<br></br>
									</p>
								</header>
								<a href="#" className="image main"><img src="images/bees.jpeg" alt="" /></a>
								<ul className="actions">
									<li><a href="#" className="button big">Match Now!</a></li>
								</ul>
							</article>

						
							<section className="posts">

								<Hobby title="Speed Reading" image = "images/beach.jpg" route ="#"/>
								<Hobby title="Rock Climbing" image = "images/rock.jpeg" route ="#"/>
								<Hobby title="Mixing Music" image = "images/dj.jpeg" route ="#"/>
								<Hobby title="Bird Watching" image = "images/bird.jpeg" route ="#"/>
								<Hobby title="Cycling" image = "images/bike.jpeg" route ="#"/>
								<Hobby title="Body Building" image = "images/lifting.jpeg" route ="#"/>
								<Hobby title="Beer Tasting" image = "images/beer.jpg" route ="#"/>
								<Hobby title="Parkour" image = "images/park.jpg" route ="#"/>
								<Hobby title="Photography" image = "images/photo.jpeg" route ="#"/>
								<Hobby title="Salsa Dancing" image = "images/salsa.jpeg" route ="#"/>
						
							</section>


					</div>

				
					

	
					<div id="copyright">
						<ul><li>&copy; Hobby Hookup</li></ul>
					</div>

			</div>

		);
	}

});

module.exports = Homepage;