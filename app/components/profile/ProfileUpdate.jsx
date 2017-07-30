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


const ProfileUpdate = ({ onSubmit, onChange, errors, user, userUpdateInfo }) => (

   <div>
      <div className="container navContainer">
                <nav className="navbar navbar-default">
                  <div className="container-fluid">
                    
                    <div className="navbar-header">
                      
                     <Link to="/"><h3 className="navbar-brand" href="/home">Hobby Hookup</h3></Link>
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
      <div className="container">
        <div id="main">
          <div className="row">
              
              <div className ="col-lg-12 col-sm-12 col-xs-12">

                <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Update Your Info</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="form-group col-lg-12 col-sm-12 col-xs-12" >
        <label htmlFor="password">Please Confirm Your Password</label>
        <input
          value={userUpdateInfo.password}
          type="password"
          className="form-control text-center"
          id="password"
          name='password'
          onChange={onChange}
          errorText={errors.password}
          required
        />
      </div>
      <div className="form-group col-lg-12 col-sm-12 col-xs-12">
        <label htmlFor="age">Age</label>
        <input
          value={userUpdateInfo.age}
          type="integer"
          className="form-control text-center"
          id="age"
          name='age'
          onChange={onChange}
          errorText={errors.age}
          required
        />
      </div>
      <div className="form-group col-lg-12 col-sm-12 col-xs-12">
        <label htmlFor="location">Location</label>
        <input
          value={userUpdateInfo.location}
          type="text"
          className="form-control text-center"
          id="location"
          name='location'
          onChange={onChange}
          errorText={errors.location}
          required
        />
      </div>
      <div className="form-group col-lg-12 col-sm-12 col-xs-12">
        <label htmlFor="location">User Avatar</label>
        <input
          value={userUpdateInfo.image_path}
          type="text"
          className="form-control text-center"
          id="image_path"
          name='image_path'
          onChange={onChange}
          errorText={errors.image_path}
          required
        />
      </div>


      <div className="button-line">
        <button className="btn btn-primary" type="submit" label="Update Your Profile" primary>Update Your Profile</button>
      </div>

    </form>
 
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

ProfileUpdate.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  userUpdateInfo: PropTypes.object.isRequired
};

export default ProfileUpdate;