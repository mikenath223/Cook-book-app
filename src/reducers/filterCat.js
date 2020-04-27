const filterCat = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE FILTER':
      return action.str;
    default:
      return state;
  }
}

export default filterCat;