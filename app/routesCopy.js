import Base from '../app/components/login/Base.jsx';
import HomePage from '../app/components/login/HomePage.jsx';
import DashboardPage from '../app/components/login/DashboardPage.jsx';
import LoginPage from '../app/components/login/LoginPage.jsx';
import SignUpPage from '../app/components/login/SignUpPage.jsx';
import Auth from '../app/components/login/Auth';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, LoginPage);
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;