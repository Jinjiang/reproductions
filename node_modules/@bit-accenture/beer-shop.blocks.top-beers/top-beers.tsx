// import type { ReactNode } from 'react';
import { useBeers } from '@bit-accenture/beer-shop.hooks.use-beers';

// export type TopBeersProps = {
//   children?: ReactNode;
// };

export function TopBeers() {
  const beers = useBeers();

  if (!beers) return <div>loading</div>;

  return (
    <div>
      {beers.map((beer) => {
        return <div key={beer.name}>{beer.name}</div>;
      })}
    </div>
  );
}
