import React from 'react';
import { render } from '@testing-library/react';
import { ToggleButton } from './ToggleButton';

test('renders three spans', () => {
  const { container } = render(<ToggleButton />);
  const toggleElements = container.querySelectorAll('span');
  expect(toggleElements).toHaveLength(3);
});
