const mealTab = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW MEAL':
      return action.meal;
    default:
      return state;
  }
};

export default mealTab;
