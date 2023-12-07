import { ok } from 'node:assert';
import { BeerServer } from './beer-server.js';

describe('beer server', () => {
  // eslint-disable-next-line jest/expect-expect
  it('should say hello', async () => {
    const beerServer = BeerServer.from();
    const beers = await beerServer.listBeers();
    ok(beers.length > 1);
  })
});
    