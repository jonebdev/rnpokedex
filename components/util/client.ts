import type { Query, QueryGetAllPokemonArgs, Pokemon } from "@favware/graphql-pokemon";
import ApolloClient, {gql} from "apollo-boost";
import fetch from "cross-fetch";
// import gql from "graphql-tag";

interface ClientOptions {
  uri: string;
  fetch: any;
}

export type GraphQLPokemonResponse<K extends keyof Omit<Query, "__typename">> = Record<
  K,
  Omit<Query[K], "__typename">
>;

const getAllPokemon = gql`
  query GetAllPokemon {
    getAllPokemon(offset: 93, take: 232) {
      sprite
      species
      num
      types {
        name
      }
    }
  }
`;

export class Client {
  private client: ApolloClient<ClientOptions>;
  constructor() {
    this.client = new ApolloClient({
      uri: "https://graphqlpokemon.favware.tech/v8",
      fetch,
    });
  }

  public async getAllPokemon() {
    const {
      data: { getAllPokemon: pokemonData },
    } = await this.client.query<
      GraphQLPokemonResponse<"getAllPokemon">,
      QueryGetAllPokemonArgs
    >({
      query: getAllPokemon,
    });

    return pokemonData;
  }
}
