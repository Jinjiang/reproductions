import { Routes, Route } from 'react-router-dom';
import { TopBeers } from '@bit-accenture/beer-shop.blocks.top-beers';
import { Heading } from '@bit-accenture/design.content.heading';
import { BeerShopApolloProvider } from './apollo-provider';

export function BeerShop() {
  return (
    <BeerShopApolloProvider>
      <Routes>
        <Route path="/" element={(
          <div>
          <Heading>My top list of beers!</Heading>
          <TopBeers />
        </div>
        )} />
      </Routes>
    </BeerShopApolloProvider>
  );
}
