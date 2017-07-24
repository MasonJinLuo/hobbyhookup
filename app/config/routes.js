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

    <Route path='HobbyBeeKeeping' component={HobbyBeeKeeping} />
    <Route path='HobbySpeedReading' component={HobbySpeedReading} />
    <Route path='HobbyRockClimbing' component={HobbyRockClimbing} />
    <Route path='HobbyMixingMusic' component={HobbyMixingMusic} />
    <Route path='HobbyBirdWatching' component={HobbyBirdWatching} />
  	<Route path='HobbyCycling' component={HobbyCycling} />
  	<Route path='HobbyBodyBuilding' component={HobbyBodyBuilding} />
  	<Route path='HobbyBeerTasting' component={HobbyBeerTasting} />
  	<Route path='HobbyParkour' component={HobbyParkour} />
  	<Route path='HobbyPhotography' component={HobbyPhotography} />
  	<Route path='HobbySalsaDancing' component={HobbySalsaDancing} />
    <Route path='Messages' component={Messages} />
    <Route path='Inbox' components={Inbox} />
    <Route path='Profile' component={Profile} />

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
