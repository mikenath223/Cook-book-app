const SHOWCATEGORIES = cats => ({
  type: 'SHOW CATEGORIES',
  cats,
});

const FILTER = str => ({
  type: 'CHANGE FILTER',
  str,
});

const DISPLAYTABS = tabs => ({
  type: 'DISPLAY TABS',
  tabs,
});

const FILTERTABS = str => ({
  type: 'CHANGE TAB',
  str,
});

const SHOWMEAL = meal => ({
  type: 'SHOW MEAL',
  meal,
});

export {
  SHOWCATEGORIES, FILTER, DISPLAYTABS, FILTERTABS, SHOWMEAL,
};
