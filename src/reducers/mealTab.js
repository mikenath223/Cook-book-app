const mealTab = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'SHOW MEAL':
      return action.meal;
    default:
      return state;
  }
};

export default mealTab;
