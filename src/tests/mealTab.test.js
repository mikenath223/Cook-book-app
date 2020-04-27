import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import reduxRendering from './route.test';
import MealTab from '../containers/meal_tab/meal_tab';

const match = {
  params: {
    name: 'Beef%20and%20Mustard%20Pie',
  },
};
const div = document.createElement('div');

it('renders correct component', () => {
  reduxRendering(
    <MemoryRouter>
      <MealTab match={match}/>
    </MemoryRouter>, div
  )
});

it('the component has the right input', () => {
  const { getByTestId } = reduxRendering(
    <MemoryRouter>
      <MealTab match={match}/>
    </MemoryRouter>,
  );

  expect(getByTestId('check-meal-route')).toHaveTextContent('Meal Recipe');
})