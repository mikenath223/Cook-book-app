import React from 'react';
import { Link } from 'react-router-dom';


const MealRecipe = ({ tab }) =>

  // const filtered = [];
  // tab.forEach(el => {
  //   el.
  // })
  (
    <li key={tab.idMeal}>
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <Link to="/">
          <h2 className="navbar-brand home-link">
            {' '}
            <span className="yellow">munch</span>
            It
          </h2>
        </Link>
      </nav>
      <div className="top-head">
        <h1 className="bg-dark text-light meal-intro p-3">Meal Recipe</h1>
        <div className="vid-wrap">
          <object className="youtube-vid">
            <param name="movie" value={`http://www.youtube.com/v/${tab.strYoutube.split('=')[1]}?version=3`} />
            <param name="allowFullScreen" value="true" />
            <param name="allowScriptAccess" value="always" />
          </object>
          <p className="badge badge-pill bg-danger text-light p-2 tags">{tab.strTags}</p>
        </div>

        <div className="meal-thumb">
          <img src={tab.strMealThumb} className="meal-pic" alt="imgTab" />
          <p className="badge badge-success p-2 meal-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 172 172"
              style={{ fill: '#000000' }}
            >
              <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ 'mix-blend-mode': 'normal' }}>
                <path d="M0,172v-172h172v172z" fill="none" />
                <g fill="#e67e22"><path d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,37.9948 30.8052,68.8 68.8,68.8c37.9948,0 68.8,-30.8052 68.8,-68.8c0,-37.9948 -30.8052,-68.8 -68.8,-68.8zM118.72013,118.72013c-2.24173,2.24173 -5.87093,2.24173 -8.10693,0l-17.2,-17.2l8.10693,-8.10693l17.2,17.2c2.24173,2.236 2.24173,5.87093 0,8.10693zM119.94707,74.07467c-5.5728,5.5728 -13.2096,7.43613 -19.21813,5.30333l-39.3364,39.3364c-2.24173,2.24173 -5.87093,2.24173 -8.10693,0c-2.24173,-2.24173 -2.24173,-5.87093 0,-8.10693l18.87413,-18.87413l-13.08347,-13.08347c-8.58853,-8.58853 -10.5436,-21.78667 -4.81027,-32.49653l31.734,31.73973l6.61627,-6.61627c-2.1328,-6.00853 -0.26947,-13.64533 5.30333,-19.21813c7.29853,-7.29853 18.14027,-8.28467 24.22333,-2.2016c6.08307,6.08307 5.09693,16.9248 -2.19587,24.2176z" /></g>
              </g>
            </svg>
            {tab.strMeal}
          </p>
        </div>
      </div>

      <div className="my-5 container-fluid cook-desc">
        <div className="mb-2 row text-light">
          <p className="bg-dark col-xl-6 col-lg-6 col-md-6 col-sm-12 px-5 p-2">Category</p>
          <p className="bg-success col-xl-6 col-lg-6 col-md-6 col-sm-12 px-5 p-2 text-warning">{tab.strCategory}</p>
        </div>
        <div className="mb-2 row text-light">
          <p className="bg-info col-xl-6 col-lg-6 col-md-6 col-sm-12 px-5 p-2">Cuisine Origin</p>
          <p className="bg-primary col-xl-6 col-lg-6 col-md-6 col-sm-12 px-5 p-2">{tab.strArea}</p>
        </div>
        <div className="mb-2 row text-light">
          <p className="bg-danger col-xl-6 col-lg-6 col-md-6 col-sm-12 px-5 p-2">Cooking Instructions</p>
          <p className="bg-secondary text-white col-xl-6 col-lg-6 col-md-6 col-sm-12 px-5 p-2">{tab.strInstructions}</p>
        </div>
      </div>
    </li>
  );


export default MealRecipe;
