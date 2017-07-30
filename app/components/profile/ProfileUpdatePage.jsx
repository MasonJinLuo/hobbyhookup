import React, { PropTypes } from 'react';
import Auth from '../login/Auth';
import ProfileUpdate from './ProfileUpdate.jsx';


        // app.put('/api/updatePassword', function(req, res) {
        //     console.log("body", req.body.password);
        //     var newPassword = req.body.password; 
        //     var email = req.body.email;
        //     console.log(newPassword, email);
        //     var hashedPassword;
        //     var salt = bcrypt.genSaltSync(10);
        //     hashedPassword = bcrypt.hashSync(req.body.password, salt);
        //    //  bcrypt.genSalt(10, function(err, salt) {
        //    //      bcrypt.hash(newPassword, salt, function(err, hash) {
        //    //          hashedPassword = hash;
        //    //          });
        //    // })
        //     db.employ_option.update({
        //                 password: hashedPassword
        //             }, {
        //                 where: {
        //                     email: email
        //                 }
        //     });
        // });


class ProfileUpdatePage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    this.state = {  
      errors: {},
      secretData: '',
      username: '',
      user: {
        username : 'test',
        hobbyObject: {hobbies: []},
        inboxChatObject: {inboxChats: []}
      },
      userUpdateInfo: {
        password : '',
        newPassword : '',
        confirmNewPassword : '',
        email : '',
        age : '',
        image_path : '',
        location : ''
      }
    };
    this.processForm = this.processForm.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/profile');
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
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string function() {}or an HTTP body message
    // const username = encodeURIComponent(this.state.user.username);
    // const email = encodeURIComponent(this.state.user.email);
    // const password = encodeURIComponent(this.state.userUpdateInfo.password);
    // // const newPassword = encodeURIComponent(this.state.userUpdateInfo.newPassword);
    // // const confirmNewPassword = encodeURIComponent(this.state.userUpdateInfo.confirmNewPassword);
    // const age = encodeURIComponent(this.state.userUpdateInfo.age);
    // const location = encodeURIComponent(this.state.userUpdateInfo.location);
    // const image_path = encodeURIComponent(this.state.userUpdateInfo.image_path);
    // // const formData = `username=${username}&email=${email}&password=${password}&newPassword=${newPassword}&confirmNewPassword=${confirmNewPassword}&age=${age}&location=${location}`;
    // const formData = `username=${username}&email=${email}&password=${password}}&age=${age}&location=${location}&image_path=${image_path}`;
    // console.log("formData: ", formData)

    console.log("this start of ajax", this)
    // create an AJAX request
    $.ajax({
            method: "POST",
            url: "/auth/updateprofile",
            data: {
              username : this.state.user.username,
              email : this.state.user.email,
              password : this.state.userUpdateInfo.password,
              age : this.state.userUpdateInfo.age,
              location: this.state.userUpdateInfo.location,
              image_path: this.state.userUpdateInfo.image_path
            }
        }).then(function(req, res){
          console.log("req: ", req)
          console.log("res: ", res)
          if (req.success) {
            // success
            console.log(this)
            // change the component-container state
            this.setState({
              errors: {}
            });

            // set a message
            // localStorage.setItem('successMessage', resultData.response.message);
            console.log('woohoo, updated, redirecting now')
          // change the current URL to /
           this.context.router.replace('/profile');
          } else {
            // failure  

            const errors = req.response.errors ? req.response.errors : {};
            errors.summary = req.response.message;
            console.log(this)
            this.setState({
              error
            });
          }
        }.bind(this));
  }
    // const xhr = new XMLHttpRequest();
    // xhr.open('post', '/auth/updateprofile');
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhr.responseType = 'json';
    // xhr.addEventListener('load', () => {
  //     if (xhr.status === 200) {
  //       // success

  //       // change the component-container state
  //       this.setState({
  //         errors: {}
  //       });

  //       // set a message
  //       localStorage.setItem('successMessage', xhr.response.message);

  //       // make a redirect
  //       this.context.router.replace('/profile');
  //     } else {
  //       // failure

  //       const errors = xhr.response.errors ? xhr.response.errors : {};
  //       errors.summary = xhr.response.message;

  //       this.setState({
  //         error
  //       });
  //     }
  //   });
  //   xhr.send(formData);
  // }

 /**
   * Change the userUpdateInfo object.
   *
   * @param {object} event - the JavaScript event object
   */
  updateUserInfo(event) {
    const field = event.target.name;
    const userUpdateInfo = this.state.userUpdateInfo;
    userUpdateInfo[field] = event.target.value;

    this.setState({
      userUpdateInfo
    });
  }


  /**
   * Render the component.
   */
  render() {
    // return (<Dashboard secretData={this.state.secretData} />); 
    return (<ProfileUpdate user={this.state.user} userUpdateInfo={this.state.userUpdateInfo} onSubmit={this.processForm} onChange={this.updateUserInfo} errors={this.state.errors}/>)
    // return (<Dashboard secretData={this.state.username} />)
  }

}

ProfileUpdatePage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default ProfileUpdatePage;