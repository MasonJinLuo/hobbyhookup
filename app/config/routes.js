var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute  = Router.IndexRoute;

var Main = require('../components/Main');
var Login = require('../components/Login');
var Homepage = require('../components/Homepage')

module.exports = (

  <Route path='/' component={Main}>
  	<Route path='Homepage' component={Homepage} />
    <Route path='Login' component={Login} />

    <IndexRoute component={Homepage} />

  </Route>

);
