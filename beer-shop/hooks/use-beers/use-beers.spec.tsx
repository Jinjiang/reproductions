import { ReactNode } from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react';
import { useBeers } from './use-beers.js';
import { gqlBeersMock } from './use-beers.mock.js';

it('list all featured beers', () => {
  const results = renderHook(() => useBeers(), {
    wrapper: ({ children }: { children: ReactNode }) => (
      <MockedProvider mocks={[gqlBeersMock]}>{children}</MockedProvider>
    ),
  });

  expect(results?.result?.current?.length).toEqual(undefined);
});
