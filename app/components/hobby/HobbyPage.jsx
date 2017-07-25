// import React from 'react';
// import Auth from '../login/Auth';
// import Hobby from './Hobby.jsx';


// class HobbyPage extends React.Component {

//   /**
//    * Class constructor.
//    */
//   constructor(props) {
//     super(props);

//     this.state = {  
//       secretData: '',
//       username: '',
//       user: {
//         username : 'test',
//         hobbyObject: {hobbies: []},
//         inboxChatObject: {inboxChats: []}
//       }
//       results: [],
//         matchName1: "Name",
//         matchImg1: "http://placehold.it/800x600",
//         matchName2: "Name",
//         matchImg2: "http://placehold.it/800x600",
//         matchName3: "Name",
//         matchImg3: "http://placehold.it/800x600"
//     };
//   }

//   // fetchData : function(){
//   //   hobbyUrl = "/" + {match.params.hobby};
//   //   console.log(hobbyUrl);
//   //   $.ajax({
//   //       method: "GET",
//   //       // url: "/beekeeping"
//   //       url: hobbyUrl
//   //   })
//   //     .then(function(data) {
//   //       console.log(data)
//   //       this.setState({
//   //         results: data,
//   //         matchName1: data[0][0].User.username,
//   //         matchImg1: data[0][0].User.image_path,
//   //         matchName2: data[1][0].User.username,
//   //         matchImg2: data[1][0].User.image_path,
//   //         matchName3: data[2][0].User.username,
//   //         matchImg3: data[2][0].User.image_path
//   //       });
//   //       console.log('Hello ', this.state.matchName1)
//   //       // console.log('bye ', this.state.results[0].Hobby)
//   //     }.bind(this));
//   // }
//   /**
//    * This method will be executed after initial rendering.
//    */
//   componentDidMount() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('get', '/api/hobby');
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     // set the authorization HTTP header
//     xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
//     xhr.responseType = 'json';
//     xhr.addEventListener('load', () => {
//       if (xhr.status === 200) {
//         console.log(xhr.response)
//         console.log(xhr.response.username)
//         hobbyUrl = "/" + {match.params.hobby};
//         console.log(hobbyUrl);
//         $.ajax({
//         method: "GET",
//         // url: "/beekeeping"
//         url: hobbyUrl
//         })
//         .then(function(data) {
//         console.log(data)
//         this.setState({
//           results: data,
//           matchName1: data[0][0].User.username,
//           matchImg1: data[0][0].User.image_path,
//           matchName2: data[1][0].User.username,
//           matchImg2: data[1][0].User.image_path,
//           matchName3: data[2][0].User.username,
//           matchImg3: data[2][0].User.image_path,

//           user: xhr.response.user
//         });
//         console.log('Hello ', this.state.matchName1)
//         // this.setState({
//         //   // secretData: xhr.response.message,
//         //   // user: xhr.response.message,
//         user: xhr.response.user
//         //   // hobbies: xhr.response.hobbies
//         //   // username: xhr.response.username
//         // });
//       }
//     });
//     xhr.send();
//   }

//   /**
//    * Render the component.
//    */
//   render() {
//     // return (<Dashboard secretData={this.state.secretData} />); 
//     return (<Hobby user={this.state.user} />)
//     // return (<Dashboard secretData={this.state.username} />)
//   }

// }

// export default HobbyPage;