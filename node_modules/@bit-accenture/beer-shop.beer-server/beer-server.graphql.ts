
import { gql } from 'graphql-tag';
import { DocumentNode } from 'graphql';
import { GraphQLResolverMap } from '@apollo/subgraph/dist/schema-helper';
import { BeerServer } from './beer-server.js';

export type ServerSchema = {
  typeDefs: DocumentNode,
  resolvers: GraphQLResolverMap
}

export function beerServerSchema(beerServer: BeerServer) {
  const typeDefs = gql`#graphql
  
  type Beer {
    name: String
    type: String
    price: Float
  }

  type Query {
    beers: [Beer]
  }
`;

  const resolvers = {
    Query: {
      beers: async () => {
        return beerServer.listBeers();
      },
    },
  };

  return {
    typeDefs,
    resolvers
  };
} 
