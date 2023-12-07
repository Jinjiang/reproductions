import { ReactNode } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

export type BeerShopApolloProviderProps = {
  children: ReactNode;
};

export function BeerShopApolloProvider({ children }: BeerShopApolloProviderProps) {
  const client = new ApolloClient({
    uri: import.meta?.env?.VITE_BEER_SERVER,
    cache: new InMemoryCache(),
  });
  
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
