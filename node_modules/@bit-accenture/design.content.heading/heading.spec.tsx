import React from 'react';
import { render } from '@testing-library/react';
import { BasicHeading } from './heading.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicHeading />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
