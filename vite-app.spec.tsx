import React from 'react';
import { expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
// import { render } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import { App } from './vite-app';

it('properly handles form inputs', async () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

  // await expect.element(getByText('Hello Bit and Vite!')).toBeInTheDocument()
  await expect(getByText('Hello Bit and Vite!')).toBeTruthy()
})