const filterTabs = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE TAB':
      return action.str;
    default:
      return state;
  }
}

export default filterTabs;