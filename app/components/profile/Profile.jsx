import React, { PropTypes } from 'react';
var Router = require('react-router');
var Link = require("react-router").Link;

// import { Card, CardTitle, CardText } from 'material-ui/Card';

//Create constructor here instead?
  // constructor(props) {
  //   super(props);

  //   this = {
  //     // secretData: ''
  //     user: {
  //     	username : 'test'
  //     }
  //   };
  // }
// const Dashboard = ({ secretData }) => (
// const Dashboard = ({ user }) => (

  //<Card className="container">
    //<CardTitle
      //title="Dashboard"
  //     subtitle="You should get access to this page only after authentication."
  //   />
  //   {user.username && <CardText style={{ fontSize: '16px', color: 'green' }}>{user.username}</CardText>}
  // </Card>


  // ORIGINAL IMAGE SOURCE: <img src="http://placehold.it/380x500" 

   // <h2> Your Recent Matches </h2>
   //            <div className="row">
   //              <div className="col-lg-4 col-sm-6 col-xs-12" id="match1">
   //                <a href="#">
   //                  <img src="http://placehold.it/800x600" className="img-circle img-responsive" id="matchPicture1"></img>
   //                 </a>
   //                <h4 id="matchName1">Name</h4>
   //              </div>
   //              <div className="col-lg-4 col-sm-6 col-xs-12" id="match2">
   //                <a href="#">
   //                    <img src="http://placehold.it/800x600" className="img-circle img-responsive" id="matchPicture2"></img>
   //                </a>
   //                <h4 id="matchName2">Name</h4>
   //              </div>
   //              <div className="col-lg-4 col-sm-6 col-xs-12" id="match2">
   //                <a href="#">
   //                    <img src="http://placehold.it/800x600" className="img-circle img-responsive" id="matchPicture3"></img>
   //                </a>
   //                <h4 id="matchName3">Name</h4>
   //              </div>
   //            </div>
   //            </div>
   //          </div>


const Profile = ({ user }) => (

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
      <div className="container">
            <div id="main">
          <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="well well-sm">
                      <div className="row">
                          <div className="col-sm-6 col-md-4">
                              <img src={user.image_path} alt="" className="img-rounded img-responsive" />
                          </div>
                          <div className="col-sm-6 col-md-8">
                              <h4 className="profName">
                                  {user.username}
                              </h4>
                              <small><cite title="location">{user.location}<i className="glyphicon glyphicon-map-marker">
                              </i></cite></small>
                              <p>
                                  <i className="glyphicon glyphicon-user"></i>{user.age}
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="hobbyPics">
            <h2> Your Hobbies </h2>
              <div className="row">
              {user.hobbyObject.hobbies.map(function(hobby, i) {
              return (
                <div className ="col-lg-4 col-sm-6 col-xs-12" key={i}>
                <a href="#" target='_blank'><h4 className="userHobby">{hobby.Hobby.name}</h4></a>
                <a href="#">
                    <img src="http://placehold.it/800x600" className="thumbnail img-responsive"></img>
                  </a>
              </div>
              );
              })}              
              </div>
            </div>

           
          <div id="copyright">
            <ul><li>&copy; Hobby Hookup</li></ul>
          </div>
      </div>
    </div>
  </div>
);

// const Dashboard = ({ user }) => (
//   <div className="container">
//     <div
//       title="Dashboard"
//       subtitle="You should get access to this page only after authentication."
//     ></div>
//     {user.username && <style={{ fontSize: '16px', color: 'green' }}>{user.username}</style>}
//   </div>
// );

Profile.propTypes = {
  // secretData: PropTypes.string.isRequired
  user: PropTypes.object.isRequired
  // username: PropTypes.string.isRequired
};

export default Profile;