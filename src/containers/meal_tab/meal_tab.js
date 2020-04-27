import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { SHOWMEAL } from '../../actions/index';
import MealRecipe from '../../components/single_recipe';


const mapDispatchToProps = dispatch => ({
  showMeal: meal => dispatch(SHOWMEAL(meal))
})

const mapStateToProps = state => ({
  meal: state.mealTab
})

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
        }
      )
  }, [match, showMeal, meal.length])

  if (err) {
    return <div>Error: {Error.message} </div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <ul>
          {meal.map(tab => <MealRecipe 
          tab={tab} 
          key={tab.idMeal} />)}
        </ul>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MealTab);