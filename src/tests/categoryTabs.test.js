import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import reduxRendering from './route.test';
import CategoryTabs from '../containers/cat_tabs/category_tabs';

const match = {
  params: {
    name: 'Beef',
  },
};
const div = document.createElement('div');

it('renders correct component', () => {
  reduxRendering(
    <MemoryRouter>
      <CategoryTabs match={match} />
    </MemoryRouter>, div,
  );
});

it('the component has the right input', () => {
  const { getByTestId } = reduxRendering(
    <MemoryRouter>
      <CategoryTabs match={match} />
    </MemoryRouter>,
  );

  expect(getByTestId('check-category-route')).toHaveTextContent('Category Section');
});
