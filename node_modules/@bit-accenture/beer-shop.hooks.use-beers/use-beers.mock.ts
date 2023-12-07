import { beersMock } from '@bit-accenture/beer-shop.entities.beer';
import { MockedResponse } from '@apollo/client/testing';
import { LIST_BEERS } from "./use-beers.js";

export const gqlBeersMock: MockedResponse = {
  request: { 
    query: LIST_BEERS
  },
  result: {
    data: {
      beers: beersMock
    }
  }
};
