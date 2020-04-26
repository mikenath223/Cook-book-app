import React, { useState, useEffect } from 'react'


const App = () => {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.json())
      .then(
        reslt => {
          setIsLoaded(true);
          setCategories(reslt.categories)
        },

        err => {
          setIsLoaded(true);
          setErr(err);
        }
      )
  }, [])

  if (err) {
    return <div>Error: {Error.message} </div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <ul>
          {categories.map(cat => (
            <li key={cat.idCategory}>
              <p>{cat.strCategory}</p>
              <img src={cat.strCategoryThumb} alt="imgCat"/>
              <p>{cat.strCategoryDescription}</p>
            </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;