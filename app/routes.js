var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute  = Router.IndexRoute;

var Main = require('../app/components/Main');
// var Login = require('../components/Login');
var Homepage = require('../app/components/Homepage')
var Hobbies = require('../app/components/Hobbies')
import Base from '../app/components/login/Base.jsx';
// import HomePage from '../app/components/login/HomePage.jsx';
import DashboardPage from '../app/components/login/DashboardPage.jsx';
import LoginPage from '../app/components/login/LoginPage.jsx';
import SignUpPage from '../app/components/login/SignUpPage.jsx';
import Auth from '../app/components/login/Auth';

module.exports = (

  <Route path='/' component={Main}>
  	<Route path='Homepage' component={Homepage} />
    <Route path='Hobbies' component={Hobbies} />

    <Route path='DashboardPage' component={DashboardPage} />
    <Route path='LoginPage' component={LoginPage} />
    <Route path='SignupPage' component={SignupPage} />

    <IndexRoute component={Homepage} />

  </Route>

);
