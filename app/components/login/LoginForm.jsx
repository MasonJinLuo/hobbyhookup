import React, { PropTypes } from 'react';
import { Link } from 'react-router';
// import { Card, CardText } from 'material-ui/Card';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';


const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user
}) => (
  <div id = "main">
  <div className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="form-group">
        <label for="username">Username</label>
        <input
          value={user.username}
          type="text"
          className="form-control text-center"
          id="username"
          name='username'
          onChange={onChange}
          errorText={errors.username}
          required
        />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input
          value={user.password}
          type="password"
          className="form-control text-center"
          id="password"
          name='password'
          onChange={onChange}
          errorText={errors.password}
          required
        />
      </div>  
      <div className="button-line">
        <button className="btn btn-primary" type="submit" label="Log in" primary>Log in</button>
      </div>

      <p>Don't have an account? <Link to={'/signup'}>Create one</Link>.</p>
    </form>
  </div>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;