var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute  = Router.IndexRoute;

var Main = require('../components/Main');
var Login = require('../components/Login');
var Homepage = require('../components/Homepage')
var Hobbies = require('../components/Hobbies')
var Profile = require('../components/Profile')

module.exports = (

  <Route path='/' component={Main}>
  	<Route path='Homepage' component={Homepage} />
    <Route path='Login' component={Login} />
    <Route path='Hobbies' component={Hobbies} />
     <Route path='Profile' component={Profile} />

    <IndexRoute component={Homepage} />

  </Route>

);
