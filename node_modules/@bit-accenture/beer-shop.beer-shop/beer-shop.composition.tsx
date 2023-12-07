import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from "@apollo/client/testing";
import { gqlMocks } from './beer-shop.mocks';
import { BeerShop } from "./beer-shop";
    
export const BeerShopBasic = () => {
  return (
    <MockedProvider mocks={gqlMocks}>
      <MemoryRouter>
        <BeerShop />
      </MemoryRouter>
    </MockedProvider>
  );
}
