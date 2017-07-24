import React from 'react';
import Auth from './Auth';
import Dashboard from './Dashboard.jsx';


class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      username: '',
      user: {
        username : 'test'
      }
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        console.log(xhr.response)
        console.log(xhr.response.username)
        this.setState({
          secretData: xhr.response.message,
          // user: xhr.response.message,
          user: xhr.response.user
          // username: xhr.response.username
        });
      }
    });
    xhr.send();
  }

  /**
   * Render the component.
   */
  render() {
    // return (<Dashboard secretData={this.state.secretData} />); 
    return (<Dashboard user={this.state.user} />)
    // return (<Dashboard secretData={this.state.username} />)
  }

}

export default DashboardPage;