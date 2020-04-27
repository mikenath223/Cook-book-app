import React from 'react';

const MealRecipe = ({ tab }) => {

  // const filtered = [];
  // tab.forEach(el => {
  //   el.
  // })
  return (
    <li key={tab.idMeal}>
      <img src={tab.strMealThumb} alt="imgTab" />
      <p>{tab.strMeal}</p>
      <p>Category</p>
      <p>{tab.strCategory}</p>
      <p>Cuisine Origin</p>
      <p>{tab.strArea}</p>
      <p>Cooking Instructions</p>
      <p>{tab.strInstructions}</p>
      <p>Tags</p>
      <p>{tab.strTags}</p>

      <object style={{ height: "390px", width: "440px" }}>
        <param name="movie" value={`http://www.youtube.com/v/${tab.strYoutube.split('=')[1]}?version=3`} />
        <param name="allowFullScreen" value="true" />
        <param name="allowScriptAccess" value="always" />
      </object>

    </li>
  )
}

export default MealRecipe;