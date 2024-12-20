import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          keyArgs: false,
          merge(existing = {}, incoming) {
            return {
              ...incoming,
              results: existing.results
                ? [...existing.results, ...incoming.results]
                : incoming.results,
            };
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_API,
  cache: cache,
});
