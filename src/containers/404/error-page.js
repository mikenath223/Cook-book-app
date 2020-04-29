import React from 'react';
import { Link } from 'react-router-dom';
import style from './error.module.css';

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
    <div className={style.container}>
      <img className={style.image} src="https://cdn.dribbble.com/users/3026498/screenshots/6396647/404_error.jpg" alt=".." />
      <h1 data-testid="check-error-route" className={style.h1}>404 Error</h1>
      <Link to="/" className={style.homeBut}><button className={style.button} type="button">Go Home</button></Link>

    </div>
  </div>
);

export default Error;
