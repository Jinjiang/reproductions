import React from 'react';
import { render } from '@testing-library/react';
import { BasicMyFirst } from './my-first.composition';

it('should render the correct text', () => {
  const { getByText } = render(<BasicMyFirst />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
