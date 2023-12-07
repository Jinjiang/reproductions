import { Beer } from '@bit-accenture/beer-shop.entities.beer';
import { beersMock } from './beers-mock.js';

/**
 * beer server
 */
export class BeerServer {
  /**
   * list all beers
   */
  async listBeers() {
    return beersMock.map((plainBook) => {
      return Beer.from(plainBook)
    });
  }

  /**
   * create a new instance of a beer server.
   */
  static from() {
    return new BeerServer();
  }
}    
