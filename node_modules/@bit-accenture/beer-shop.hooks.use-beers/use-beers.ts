import { Beer } from '@bit-accenture/beer-shop.entities.beer';
// import { useQuery, gql } from '@apollo/client';

// export const LIST_BEERS_X = gql`#graphql
//   query LIST_BEERS {
//     beers {
//       name
//       type
//       price
//     }
//   }
// `;

export const LIST_BEERS = ''

export function useBeers(): Beer[]|null|undefined {
  // const results = useQuery(LIST_BEERS);
  // if (results.loading) return undefined;
  // if (!results.loading && !results.data) return null;

  // return results.data.beers.map((beer) => {
  //   return Beer.from(beer);
  // });
  return []
}
