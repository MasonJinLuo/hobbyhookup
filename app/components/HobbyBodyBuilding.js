var React = require("react");
var Router = require('react-router');
var Matches = require('./Matches');
var Link = require("react-router").Link;

import Auth from './login/Auth';

var HobbyBodyBuilding = React.createClass({
	componentDidMount() {
        window.scrollTo(0, 0);
        const xhr = new XMLHttpRequest();
    	xhr.open('get', '/api/hobby');
   		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    	// set the authorization HTTP header
    	xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    	xhr.responseType = 'json';
    	console.log('didmount hit');
    	xhr.addEventListener('load', () => {
      	if (xhr.status === 200) {
        // console.log(xhr.response)
        // console.log(xhr.response.username)
        this.setState({
          // secretData: xhr.response.message,
          // user: xhr.response.message,
          user: xhr.response.user
          // hobbies: xhr.response.hobbies
          // username: xhr.response.username
        });
      	}
    	});
    	xhr.send();
  	},
	
	getInitialState: function() {
		return {
	      user: {},
	      results: [],
	      matchName1: "Name",
	      matchImg1: "http://placehold.it/800x600",
	      matchName2: "Name",
	      matchImg2: "http://placehold.it/800x600",
	      matchName3: "Name",
	      matchImg3: "http://placehold.it/800x600"
	    }
	},

	fetchData : function(){
		$.ajax({
  			method: "GET",
  			url: "/api/bodybuilding"
		})
		  .then(function(data) {
		  	console.log(data)
		    this.setState({
		    	results: data,
		    	matchName1: data[0][0].User.username,
		    	matchImg1: data[0][0].User.image_path,
		    	matchName2: data[1][0].User.username,
		    	matchImg2: data[1][0].User.image_path,
		    	matchName3: data[2][0].User.username,
		    	matchImg3: data[2][0].User.image_path
		    });
		    console.log('Hello ', this.state.matchName1)
		    // console.log('bye ', this.state.results[0].Hobby)
		  }.bind(this));
	},

	addNovice: function(){
		    $.ajax({
            method: "POST",
            url: "/api/addHobby",
              data: {
                level: "Novice",
                user_id: this.state.user.id,
                hobby_id: 7
              }
          }).then(function(done){
             $(".dropdown2").empty();
          });
	},

	addIntermediate: function(){
		    $.ajax({
            method: "POST",
            url: "/api/addHobby",
              data: {
                level: "Intermediate",
                user_id: this.state.user.id,
                hobby_id: 7
              }
          }).then(function(done){
             $(".dropdown2").empty();
          });
	},

	addExpert: function(){
		    $.ajax({
            method: "POST",
            url: "/api/addHobby",
              data: {
                level: "Expert",
                user_id: this.state.user.id,
                hobby_id: 7
              }
          }).then(function(done){
             $(".dropdown2").empty();
          });
	},	

	render: function(){
		return (
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
		<div id='main'>
			<article className="post featured">
				<header className="major">
					<h2><a href="#">Bodybuilding</a></h2>				
				</header>
				<a href="#" className="image main"><img src="https://www.t-nation.com/system/publishing/articles/10000990/original/Redefining-The-Female-Bodybuilder.jpg?1410215099" alt="" /></a>
				<div className="dropdown2">
			  		<button className="dropbtn2">+</button>
			  		<div className="dropdown-content2">
			    		<button onClick={this.addNovice}>Novice</button>
			    		<button onClick={this.addIntermediate}>Intermediate</button>
			    		<button onClick={this.addExpert}>Expert</button>
			  		</div>
				</div>
			
				<ul className="actions">
					<li><button className="connectBTN" id="connectBTN" onClick={this.fetchData}>Connect</button></li>
				</ul>
			</article>
			<div className="matches">
    			<Matches 		name1={this.state.matchName1} img1={this.state.matchImg1}
    							name2={this.state.matchName2} img2={this.state.matchImg2}
    							name3={this.state.matchName3} img3={this.state.matchImg3} />
  			</div>
		</div>
		<div id="copyright">
			<ul><li>&copy; Hobby Hookup</li></ul>
		</div>
	</div>



		);
	}

});

module.exports = HobbyBodyBuilding;