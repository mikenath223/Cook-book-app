const categories = (state = [], action) => {
  switch (action.type) {
    case 'SHOW CATEGORIES':
      return action.cats;
    default:
      return state;
  }
};

export default categories;
