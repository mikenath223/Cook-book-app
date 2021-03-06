import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SHOWMEAL } from '../../actions/index';
import MealRecipe from '../../components/single_recipe';
import Error from '../404/error-page';
import style from '../../styles/home.module.css';


const mapDispatchToProps = dispatch => ({
  showMeal: meal => dispatch(SHOWMEAL(meal)),
});

const mapStateToProps = state => ({
  meal: state.mealTab,
});

const MealTab = ({ match, showMeal, meal }) => {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    const dish = match.params.dish;
    fetch('https://muunchapi.herokuapp.com/api/getdish', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        strMeal: dish
      }),
    })
      .then(res => res.json())
      .then(
        reslt => {
          showMeal(reslt);
          setIsLoaded(true);
        },

        err => {
          setIsLoaded(true);
          setErr(err);
        },
      );
  }, [match, showMeal]);

  if (err) {
    return (
      <Error />
    );
  } if (!isLoaded) {
    return (
      <div className={`${style.container} container-fluid`}>
        <h3 data-testid="check-meal-route">Meal Recipe</h3>
        <img className={style.errImg} src="https://miro.medium.com/max/978/0*cWpsf9D3g346Va20.gif" alt="" />
      </div>
    );
  }
  return (
    <div>
      <h3>Meal Recipe</h3>
      <ul>
        {
          <MealRecipe
            meal={meal}
            key={meal.id}
          />
        }
      </ul>
    </div>
  );
};

MealTab.propTypes = {
  showMeal: PropTypes.func.isRequired,
  meal: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      dish: PropTypes.string,
    }),
  }).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(MealTab);
