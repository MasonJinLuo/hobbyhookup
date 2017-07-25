// import React, { PropTypes } from 'react';
// var Router = require('react-router');
// var Link = require("react-router").Link;


// 	// componentDidMount: function() {
// 	// 	$.ajax({
//  //  			method: "GET",
//  //  			url: "/api/inbox"
// 	// 	})
// 	// },

// const Hobby = ({ user }) => (
// 	<Router>
// 	<div>
// 		<div className="container navContainer">
// 			<nav className="navbar navbar-default">
// 			<div className="container-fluid">

// 			<div className="navbar-header">
// 			  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
// 			    <span className="sr-only">Toggle navigation</span>
// 			    <span className="icon-bar"></span>
// 			    <span className="icon-bar"></span>
// 			    <span className="icon-bar"></span>
// 			  </button>
// 			  <h3 className="navbar-brand" href="/home">Hobby Hookup</h3>
// 			</div>

// 			  <form className="navbar-form navbar-left">
// 			    <div className="form-group">
// 			      <input type="text" className="form-control" placeholder="Search"></input>
// 			    </div>
// 			    <button type="submit" className="btn btn-default">Submit</button>
// 			  </form>
// 			  <div className="nav navbar-nav navbar-right">
// 			    <div className="dropdown">
// 			    	<button className="dropbtn btn btn-lg btn-default"> 
// 			    		<span className="glyphicon glyphicon-list"></span> 
// 			    	</button>
// 			    	<div className="dropdown-content">
// 					    <Link to="/profile">Profile</Link>		
// 						<Link to="/inbox">Inbox</Link>	
// 						<Link to="/profile/update">Update</Link>
// 						<Link to="/logout">Logout</Link>
// 					</div>
// 			    </div>
// 			  </div>
// 			</div>
// 			</nav>	
// 		</div>

// 		<br></br>

// 		<Route path="/hobby/:hobby" component={ChildHobby}/>
//     </div>
//   </Router>

	  
// );

// const ChildHobby = ({ match }) => (
//  		<div>
//     		<h3>ID: {match.params.hobby}</h3>
//     		<div id='main'>
// 			<article className="post featured">
// 				<header className="major">
// 					<h2><a href="#">{match.params.hobby}</a></h2>				
// 				</header>
// 				<a href="#" className="image main"><img src="http://68.media.tumblr.com/0f639d964052eff7a7f69a4a49123c88/tumblr_ntsra7yF4e1riijaro1_1280.jpg" alt="" /></a>
// 				<ul className="actions">
// 					<li><button className="button big" id="connectBTN" onClick={this.fetchData}>Connect</button></li>
// 				</ul>
// 			</article>
// 			<div className="matches">
//     			<Matches 		name1={this.state.matchName1} img1={this.state.matchImg1}
//     							name2={this.state.matchName2} img2={this.state.matchImg2}
//     							name3={this.state.matchName3} img3={this.state.matchImg3} />
//   			</div>
// 		</div>
// 		<div id="copyright">
// 			<ul><li>&copy; Hobby Hookup</li></ul>
// 		</div>
//   		</div>
// )
	
// Hobby.propTypes = {
//   // secretData: PropTypes.string.isRequired
//   user: PropTypes.object.isRequired
//   // username: PropTypes.string.isRequired
// };

// export default Hobby;