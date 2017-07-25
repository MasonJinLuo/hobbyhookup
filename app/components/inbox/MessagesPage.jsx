import React from 'react';
import Auth from '../login/Auth';
import Messages from './Messages.jsx';


class MessagesPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {  
      secretData: '',
      username: '',
      user: {
        username : 'test',
        hobbyObject: {hobbies: []},
        inboxChatObject: {inboxChats: []}
      }
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    console.log(this.props.params.user)
    
  $.ajax({
      method: "GET",
      url: "/messages",
        data: {
          sender: "tomCat",
          receiver: "odyMon"
        },
    }).then(function(chatLog){
      var concat = chatLog[0].concat(chatLog[1]);
      console.log(concat[0].id)
      var sortedConcat = concat.sort(function(a, b) {
          return parseFloat(a.id) - parseFloat(b.id);
      });
      console.log(sortedConcat)
  });

    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/message');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        console.log(xhr.response)
        console.log(xhr.response.username)
        this.setState({
          // secretData: xhr.response.message,
          // user: xhr.response.message,
          user: xhr.response.user
          // hobbies: xhr.response.hobbies
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
    return (<Messages user={this.state.user} />)
    // return (<Dashboard secretData={this.state.username} />)
  }

}

export default MessagesPage;