import { Client, GraphQLPokemonResponse } from "./util/client";
import type { Pokemon } from "@favware/graphql-pokemon";
import React, { useState, useEffect, useMemo } from "react";
import { StyleSheet, Text, View, FlatList, StatusBar, ScrollView, Image} from 'react-native';
import { PokedexItem } from "./PokedexItem";


function isForm(species: string): boolean {
  const formRegex = /[A-z]*-+[mega|hisui|gmax|paldea|alola]*.*/
  const checkIfForm = new RegExp(formRegex)

  return checkIfForm.test(species)
}

export default function PokemonList() {
  const [data, setData] = useState<Omit<readonly Pokemon[], "__typename">>()
  const client = new Client()

  useMemo(() => {
    const fetchData = async () => {
      const resp = await client.getAllPokemon()
      setData(resp);
    };
    fetchData();
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        if (isForm(item.species)) {
          return null
        }
        return (<PokedexItem pokemon={item} />)
      }}
      keyExtractor={item => `${item.species}${item.num}`}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 40
  },
  title: {
    fontSize: 32,
  },
});
