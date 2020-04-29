import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Search from '../containers/searchCats';
import rootReducer from '../reducers/index';


afterEach(cleanup);
const div = document.createElement('div');
const store = createStore(rootReducer);

const reduxRendering = component => ({
  ...render(<Provider store={store}>{component}</Provider>),
});


it('shows the search input field with redux', () => {
  reduxRendering(
    <MemoryRouter>
      <Search />
    </MemoryRouter>, div,
  );
});

it('checks input value', () => {
  const { getByTestId } = reduxRendering(
    <MemoryRouter>
      <Search />
    </MemoryRouter>, div,
  );
  const input = getByTestId('entry');

  expect(input.value).toBe('');
  input.focus();
  expect(input).toHaveFocus();
  input.blur();
  expect(input).not.toHaveFocus();
});
