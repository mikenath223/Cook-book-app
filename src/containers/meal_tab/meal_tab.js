import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SHOWMEAL } from '../../actions/index';
import MealRecipe from '../../components/single_recipe';


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
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${match.params.dish}`)
      .then(res => res.json())
      .then(
        reslt => {
          setIsLoaded(true);
          showMeal(reslt.meals);
        },

        err => {
          setIsLoaded(true);
          setErr(err);
        },
      );
  }, [match, showMeal, meal.length]);

  if (err) {
    return (
      <div>
        Error:
        {Error.message}
      </div>
    );
  } if (!isLoaded) {
    return (
      <div className="container">
        <h3 data-testid="check-meal-route">Meal Recipe</h3>
        <img className="err-img" src="https://miro.medium.com/max/978/0*cWpsf9D3g346Va20.gif" alt="" />
      </div>
    );
  }
  return (
    <div>
      <h3>Meal Recipe</h3>
      <ul>
        {meal.map(tab => (
          <MealRecipe
            tab={tab}
            key={tab.idMeal}
          />
        ))}
      </ul>
    </div>
  );
};

MealTab.propTypes = {
  showMeal: PropTypes.func.isRequired,
  meal: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      dish: PropTypes.string.isRequired,
    }),
  }).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(MealTab);
