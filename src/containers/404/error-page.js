import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
  <div>
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <Link to="/">
        <h2 className="navbar-brand home-link">
          {' '}
          <span className="yellow">munch</span>
          It
        </h2>
      </Link>
    </nav>
    <div>
      <img src="https://cdn.dribbble.com/users/3026498/screenshots/6396647/404_error.jpg" alt=".." />
      <h1 data-testid="check-error-route">404 Error</h1>
      <Link to="/" className="home-but-404"><button type="button">Go Home</button></Link>

    </div>
  </div>
);

export default Error;
