const categories = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case "SHOW CATEGORIES":
      return action.cats;
    default:
      return state;
  }
}

export default categories;