var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute  = Router.IndexRoute;

var Main = require('../components/Main');
// var Login = require('../components/Login');
var Homepage = require('../components/Homepage')
var HobbyBeeKeeping = require('../components/HobbyBeeKeeping')
var HobbySpeedReading = require('../components/HobbySpeedReading')
var HobbyRockClimbing = require('../components/HobbyRockClimbing')
var HobbyMixingMusic = require('../components/HobbyMixingMusic')
var HobbyBirdWatching = require('../components/HobbyBirdWatching')
var HobbyCycling = require('../components/HobbyCycling')
var HobbyBodyBuilding = require('../components/HobbyBodyBuilding')
var HobbyBeerTasting = require('../components/HobbyBeerTasting')
var HobbyParkour = require('../components/HobbyParkour')
var HobbyPhotography = require('../components/HobbyPhotography')
var HobbySalsaDancing = require('../components/HobbySalsaDancing')
var Profile = require('../components/Profile')
var Messages = require('../components/Messages')
var Inbox = require('../components/Inbox')

var Hobbies = require('../components/Hobbies')
import Base from '../components/login/Base.jsx';
// import HomePage from '../app/components/login/HomePage.jsx';
import DashboardPage from '../components/login/DashboardPage.jsx';
import LoginPage from '../components/login/LoginPage.jsx';
import SignUpPage from '../components/login/SignUpPage.jsx';
import Auth from '../components/login/Auth';


    // <Route path='/dashboard' component={DashboardPage} />
module.exports = (

	<Route path='/' component={Main}>

    <Route path='HobbyBeeKeeping' getComponent={(location, callback)=> {
      if (Auth.isUserAuthenticated()) {
          callback(null, HobbyBeeKeeping);
        } else {
          callback(null, LoginPage);
        }
    }} />
    <Route path='HobbySpeedReading' getComponent={(location, callback)=> {
      if (Auth.isUserAuthenticated()) {
          callback(null, HobbySpeedReading);
        } else {
          callback(null, LoginPage);
        }
    }} />
    <Route path='HobbyRockClimbing' getComponent={(location, callback)=> {
      if (Auth.isUserAuthenticated()) {
          callback(null, HobbyRockClimbing);
        } else {
          callback(null, LoginPage);
        }
    }} />
    <Route path='HobbyMixingMusic' getComponent={(location, callback)=> {
      if (Auth.isUserAuthenticated()) {
          callback(null, HobbyMixingMusic);
        } else {
          callback(null, LoginPage);
        }
    }} />
    <Route path='HobbyBirdWatching' getComponent={(location, callback)=> {
      if (Auth.isUserAuthenticated()) {
          callback(null, HobbyBirdWatching);
        } else {
          callback(null, LoginPage);
        }
    }} />
  	<Route path='HobbyCycling' getComponent={(location, callback)=> {
      if (Auth.isUserAuthenticated()) {
          callback(null, HobbyCycling);
        } else {
          callback(null, LoginPage);
        }
    }} />
  	<Route path='HobbyBodyBuilding' getComponent={(location, callback)=> {
      if (Auth.isUserAuthenticated()) {
          callback(null, HobbyBodyBuilding);
        } else {
          callback(null, LoginPage);
        }
    }} />
  	<Route path='HobbyBeerTasting' getComponent={(location, callback)=> {
      if (Auth.isUserAuthenticated()) {
          callback(null, HobbyBeerTasting);
        } else {
          callback(null, LoginPage);
        }
    }} />
  	<Route path='HobbyParkour' getComponent={(location, callback)=> {
      if (Auth.isUserAuthenticated()) {
          callback(null, HobbyParkour);
        } else {
          callback(null, LoginPage);
        }
    }} />
  	<Route path='HobbyPhotography' getComponent={(location, callback)=> {
      if (Auth.isUserAuthenticated()) {
          callback(null, HobbyPhotography);
        } else {
          callback(null, LoginPage);
        }
    }} />
  	<Route path='HobbySalsaDancing' getComponent={(location, callback)=> {
      if (Auth.isUserAuthenticated()) {
          callback(null, HobbySalsaDancing);
        } else {
          callback(null, LoginPage);
        }
    }} />
    <Route path='Messages' getComponent={(location, callback)=> {
      if (Auth.isUserAuthenticated()) {
          callback(null, Messages);
        } else {
          callback(null, LoginPage);
        }
    }} />
    <Route path='Inbox' getComponent={(location, callback)=> {
      if (Auth.isUserAuthenticated()) {
          callback(null, Inbox);
        } else {
          callback(null, LoginPage);
        }
    }} />
    <Route path='Profile' getComponent={(location, callback)=> {
      if (Auth.isUserAuthenticated()) {
          callback(null, Profile);
        } else {
          callback(null, LoginPage);
        }
    }} />

  	<Route path='Homepage' 
  	getComponent={(location, callback)=> {
  		if (Auth.isUserAuthenticated()) {
          callback(null, Homepage);
        } else {
          callback(null, LoginPage);
        }
    }} />
  	<Route path='DashboardPage' 
  	getComponent={(location, callback)=> {
  		if (Auth.isUserAuthenticated()) {
          callback(null, Homepage);
        } else {
          callback(null, LoginPage);
        }
    }} />
    <Route path='Hobbies' 
    getComponent={(location, callback)=> {
  		if (Auth.isUserAuthenticated()) {
          callback(null, Hobbies);
        } else {
          callback(null, LoginPage);
        }
    }} />
    <Route path='/signup' component={SignUpPage} />
    <Route path='/login' component={LoginPage} />
    <Route path= '/logout'
    onEnter={(nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/login');
    }} />
    <IndexRoute 
    getComponent={(location, callback)=> {
  		if (Auth.isUserAuthenticated()) {
          callback(null, Homepage);
        } else {
          callback(null, LoginPage);
        }
    }} /> 
  </Route>
);
