import React from 'react';
import Auth from '../login/Auth';
import Messages from './Messages.jsx';


class MessagesPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    this.handlePostMessageClick = this.handlePostMessageClick.bind(this);

    this.state = {  
      secretData: '',
      username: '',
      user: {
        username : 'test',
        hobbyObject: {hobbies: []},
        inboxChatObject: {inboxChats: []}
      },
      messagesArray: []
    };
  }

  handlePostMessageClick(user){
    console.log('this is:', this);
    console.log('sending user is', user)
    var chatMessage = document.getElementById("chat-input").value;
    // var chatMessage = $(#chat-input).val()  //Needs jquery
    console.log(chatMessage)
    $.ajax({
            method: "POST",
            url: "/api/sendMessage",
              data: {
                sender: this.state.user.username,
                receiver: this.props.params.user,
                message: chatMessage
              }
          }).then(function(cashMoney){
             document.getElementById("chat-input").value = "";
          });
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {


    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/message');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        console.log(xhr.response)
        console.log(xhr.response.user.inboxChatObject)
        this.setState({
          // secretData: xhr.response.message,
          // user: xhr.response.message,
          user: xhr.response.user
          // hobbies: xhr.response.hobbies
          // username: xhr.response.username
        });
      }
       console.log(this.state.user.username) // at this point in time. username is set in state
       console.log(this.props.params.user) // should give me the matched user I am trying to send message to
       $.ajax({
            method: "GET",
            url: "/messages",
              data: {
                sender: this.state.user.username,
                receiver: this.props.params.user
              },
          }).then(function(chatLog){
            var concat = chatLog[0].concat(chatLog[1]);
            console.log(concat[0].id)
            var sortedConcat = concat.sort(function(a, b) {
                return parseFloat(a.id) - parseFloat(b.id);
            });
            console.log(sortedConcat);
            this.setState({
              messagesArray: sortedConcat
            })
            console.log(this.state.messagesArray);
        }.bind(this));
    });
    xhr.send();

  }


  /**
   * Render the component.
   */
  render() {
    // return (<Dashboard secretData={this.state.secretData} />); 
    return (<Messages user={this.state.user} message={this.state.messagesArray} receiver={this.props.params.user} handlePostMessageClick={this.handlePostMessageClick}/>)
    // return (<Dashboard secretData={this.state.username} />)
  }

}

export default MessagesPage;