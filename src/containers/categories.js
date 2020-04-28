import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SHOWCATEGORIES } from '../actions/index';
import Search from './searchCats';
import ListCat from '../components/listCat';


const mapDispatchToProps = dispatch => ({
  showCats: cats => dispatch(SHOWCATEGORIES(cats)),
});

const mapStateToProps = state => ({
  cats: state.categories,
  filter: state.filterCat
});

var slideIndex = 0;

let slides = document.getElementsByClassName('mySlides');
function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  if (slideIndex === slides.length) { slideIndex = 0 }
  console.log(slideIndex);

  slides[slideIndex].style.display = "block";
  slideIndex++;
  setTimeout(showSlides, 2000)
}

const CategoriesList = ({ showCats, cats, filter }) => {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.json())
      .then(
        reslt => {
          setIsLoaded(true);
          showCats(reslt.categories);
          setTimeout(showSlides, 0);
        },

        err => {
          setIsLoaded(true);
          setErr(err);
        }
      )
  }, [showCats, cats.length])

  const filterSel = () => {
    if (filter !== '' && filter.split('')[filter.length - 1] !== '\\') {
      const pattern = new RegExp(`^${filter}`, 'i');
      const filtered = cats.filter(entry => pattern.test(entry.strCategory))
      return filtered.map(cat => <ListCat cat={cat} key={cat.idCategory} />);
    } else {
      return cats.map(cat => <ListCat cat={cat} key={cat.idCategory} />);
    }
  }

  if (err) {
    return <div>Error: {Error.message} </div>;
  } else if (!isLoaded) {
    return <div>
      <h3 data-testid="check-home-route">Categories</h3>
      <img src="https://miro.medium.com/max/978/0*cWpsf9D3g346Va20.gif" alt="" />
    </div>;
  } else {
    return (
      <div>
        <Search />
        <div className="slideshow-container">
          <div className="slide-text">
            <small>coffee & dessert</small>
            <h2>EVERY DAY IS <br /> TASTY.</h2>
          </div>
          <div className="mySlides fade">
            <img src="https://lovogallery.com/wp-content/uploads/2019/10/hotel_food_photography_01.jpg" alt="" />
          </div>
          <div className="mySlides fade">
            <img src="https://pixelstrobist.com/wp-content/uploads/2017/11/autumn_food_photography_0.jpg" alt="" />
          </div>
          <div className="mySlides fade">
            <img src="https://blog.yelp.com/wp-content/uploads/2017/04/Screenshot-2017-04-03-14.58.54-768x493.png" alt="" />
          </div>
        </div>
        <h3 data-testid="check-home-route">Categories</h3>
        <ul>
          {filterSel()}
        </ul>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);