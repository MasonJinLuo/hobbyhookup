import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <div id="main">
  <div className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading col-lg-12 col-sm-12 col-xs-12">Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="form-group col-lg-12 col-sm-12 col-xs-12">
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
      <div className="form-group col-lg-12 col-sm-12 col-xs-12">
        <label for="email">Email</label>
        <input
          value={user.email}
          type="email"
          className="form-control text-center"
          id="email"
          name='email'
          onChange={onChange}
          errorText={errors.email}
          required
        />
      </div>
      <div className="form-group col-lg-12 col-sm-12 col-xs-12">
        <label for="password">Password</label>
        <input
          value={user.password}
          type="text"
          className="form-control text-center"
          id="password"
          name='password'
          onChange={onChange}
          errorText={errors.password}
          required
        />
      </div>
      <div className="button-line">
        <button className="btn btn-primary" type="submit" label="Create New Account" primary>Create New Account</button>
      </div>

      <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
    </form>
  </div>
  </div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;