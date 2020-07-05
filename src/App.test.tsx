import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("renders any's site warning", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Any's site is under construction/i);
  expect(textElement).toBeInTheDocument();
});
