import '@testing-library/jest-dom/vitest';

import { it, expect } from 'vitest';
import { render } from '@testing-library/react';

const Foo = () => {
  return <button>hello world!</button>;
};

it('should render with the correct text', () => {
  const { getByText } = render(<Foo />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeInTheDocument();
});
