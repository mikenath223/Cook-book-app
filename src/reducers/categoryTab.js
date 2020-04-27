const category = (state = [], action) => {
  switch (action.type) {
    case 'DISPLAY TABS':
      return action.tabs;
    default:
      return state;
  }
}

export default category;