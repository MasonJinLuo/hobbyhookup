var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute  = Router.IndexRoute;

var Main = require('../components/Main');
var Login = require('../components/Login');
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

module.exports = (

  <Route path='/' component={Main}>
  	<Route path='Homepage' component={Homepage} />
    <Route path='Login' component={Login} />
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

    <IndexRoute component={Homepage} />

  </Route>

);
