import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

//Create constructor here instead?
  // constructor(props) {
  //   super(props);

  //   this = {
  //     // secretData: ''
  //     user: {
  //     	username : 'test'
  //     }
  //   };
  // }
// const Dashboard = ({ secretData }) => (
// const Dashboard = ({ user }) => (
const Dashboard = ({ user }) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
    {user.username && <CardText style={{ fontSize: '16px', color: 'green' }}>{user.username}</CardText>}
  </Card>
);

// const Dashboard = ({ user }) => (
//   <div className="container">
//     <div
//       title="Dashboard"
//       subtitle="You should get access to this page only after authentication."
//     ></div>
//     {user.username && <style={{ fontSize: '16px', color: 'green' }}>{user.username}</style>}
//   </div>
// );

Dashboard.propTypes = {
  // secretData: PropTypes.string.isRequired
  user: PropTypes.object.isRequired
  // username: PropTypes.string.isRequired
};

export default Dashboard;