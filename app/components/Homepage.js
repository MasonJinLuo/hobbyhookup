var React = require("react");
var Router = require('react-router');
var Link = require("react-router").Link;

// import Hobby from './hobby.component.react.js';
import Intro from './intro.component.react.js';

var Homepage = React.createClass({
	componentDidMount() {
        window.scrollTo(0, 0);
	},

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
									<Link to="/profile">Profile</Link>		
									<Link to="/inbox">Inbox</Link>	
									<Link to="/update">Update</Link>
									<Link to="/logout">Logout</Link>
									</div>
								</div>
							</div>
							</div>
						</nav>	
					</div>

					{/* <div id="intro">
						<h1>Hobby test
						<br></br>
						Hookup</h1>
						<p>Find Your Next Passion.</p>
						<ul className="actions">
							<li><a href="#header" className="button icon solo fa-arrow-down scrolly">Continue</a></li>
						</ul>
					</div>*/}

				
					<header id="header">


						<a href="index.html" className="logo">Hobby Hookup</a>
					</header>

					<nav id="nav">
						<ul className="links">
							<li className="active"><Link to ="/">Hobby Hookup</Link></li>
							<Link to="/"><li><a href="#">About Us</a></li></Link>
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
									<h2><a href="#">Featured Hobby of July:<br></br>
									Beekeeping</a></h2>
									<p>Become one with the Hive.<br></br>
									Join Thousands of Urban and Rural Beekeepers.<br></br>
									</p>
								</header>
								<Link to="/hobby/beekeeping" className="image main"><img src="images/bees.jpeg" alt="" /></Link>
								<ul className="actions">
									<Link to="/hobby/beekeeping"><li><a href="#" className="button big">Match Now!</a></li></Link>
								</ul>
							</article>

						
							<section className="posts">
								
								<article>
									<header>
									<h2><a href="#">Speed Reading<br></br></a></h2>
									</header>
									<Link to="/hobby/speedreading"><a href="#" className="image fit"><img src='images/beach.jpg' alt="" /></a></Link>
									<ul className="actions">
									<li><Link to="/hobby/speedreading"><a href="#" className="button">Match Now!</a></Link></li>
									</ul>
								</article>

								<article>
									<header>
									<h2><a href="#">Rock Climbing<br></br></a></h2>
									</header>
									<Link to="/hobby/rockclimbing"><a href="#" className="image fit"><img src='images/rock.jpeg' alt="" /></a></Link>
									<ul className="actions">
									<li><Link to="/hobby/rockclimbing"><a href="#" className="button">Match Now!</a></Link></li>
									</ul>
								</article>

								<article>
									<header>
									<h2><a href="#">Mixing Music<br></br></a></h2>
									</header>
									<Link to="/hobby/mixingmusic"><a href="#" className="image fit"><img src='images/dj.jpeg' alt="" /></a></Link>
									<ul className="actions">
									<li><Link to="/hobby/mixingmusic"><a href="#" className="button">Match Now!</a></Link></li>
									</ul>
								</article>

								<article>
									<header>
									<h2><a href="#">Bird Watching<br></br></a></h2>
									</header>
									<Link to="/hobby/birdwatching"><a href="#" className="image fit"><img src='images/bird.jpeg' alt="" /></a></Link>
									<ul className="actions">
									<li><Link to="/hobby/birdwatching"><a href="#" className="button">Match Now!</a></Link></li>
									</ul>
								</article>

								<article>
									<header>
									<h2><a href="#">Cycling<br></br></a></h2>
									</header>
									<Link to="/hobby/cycling"><a href="#" className="image fit"><img src='images/bike.jpeg' alt="" /></a></Link>
									<ul className="actions">
									<li><Link to="/hobby/cycling"><a href="#" className="button">Match Now!</a></Link></li>
									</ul>
								</article>

								<article>
									<header>
									<h2><a href="#">Body Building<br></br></a></h2>
									</header>
									<Link to="/hobby/bodybuilding"><a href="#" className="image fit"><img src='images/lifting.jpeg' alt="" /></a></Link>
									<ul className="actions">
									<li><Link to="/hobby/bodybuilding"><a href="#" className="button">Match Now!</a></Link></li>
									</ul>
								</article>

								<article>
									<header>
									<h2><a href="#">Beer Tasting<br></br></a></h2>
									</header>
									<Link to="/hobby/beertasting"><a href="#" className="image fit"><img src='images/beer.jpg' alt="" /></a></Link>
									<ul className="actions">
									<li><Link to="/hobby/beertasting"><a href="#" className="button">Match Now!</a></Link></li>
									</ul>
								</article>

								<article>
									<header>
									<h2><a href="#">Parkour<br></br></a></h2>
									</header>
									<Link to="/hobby/parkour"><a href="#" className="image fit"><img src='images/park.jpg' alt="" /></a></Link>
									<ul className="actions">
									<li><Link to="/hobby/parkour"><a href="#" className="button">Match Now!</a></Link></li>
									</ul>
								</article>

								<article>
									<header>
									<h2><a href="#">Photography<br></br></a></h2>
									</header>
									<Link to="/hobby/photography"><a href="#" className="image fit"><img src='images/photo.jpeg' alt="" /></a></Link>
									<ul className="actions">
									<li><Link to="/hobby/photography"><a href="#" className="button">Match Now!</a></Link></li>
									</ul>
								</article>

								<article>
									<header>
									<h2><a href="#">Salsa Dancing<br></br></a></h2>
									</header>
									<Link to="/hobby/salsadancing"><a href="#" className="image fit"><img src='images/salsa.jpeg' alt="" /></a></Link>
									<ul className="actions">
									<li><Link to="/hobby/salsadancing"><a href="#" className="button">Match Now!</a></Link></li>
									</ul>
								</article>

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