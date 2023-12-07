// import { MockedProvider } from "@apollo/client/testing";
import { gqlBeersMock } from '@bit-accenture/beer-shop.hooks.use-beers';
// import { TopBeers } from './top-beers.js';
import { gql } from '@apollo/client';

export const LIST_BEERS_X = gql`#graphql
  query LIST_BEERS {
    beers {
      name
      type
      price
    }
  }
`;

console.log({ gql, LIST_BEERS_X})

export const BasicTopBeers = () => {
  console.log(gqlBeersMock)
  return (
    // <MockedProvider mocks={[gqlBeersMock]}>
    //   <TopBeers />
    // </MockedProvider>
    <h1>Hello</h1>
  );
}
