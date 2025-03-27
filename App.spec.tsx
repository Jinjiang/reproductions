import React from "react";
import { it, expect } from 'vitest'
import { render } from 'vitest-browser-react'
import { App } from './App';

it('properly handles form inputs', async () => {
  const { getByText } = render(<App />);
  expect(getByText('Hello world!')).toBeTruthy();
});
