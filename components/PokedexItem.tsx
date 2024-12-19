import { Image } from "expo-image";
import {Pokemon } from "@favware/graphql-pokemon";
import { Link } from 'expo-router';
import { Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get("screen").width - 20;

import { StyleSheet, Text, View, FlatList, StatusBar, ScrollView} from 'react-native';

export const PokedexItem = (props: {
  pokemon: Pokemon
}) => {
  const { pokemon } = props
  return (
    <Link href="/pokemon">
      <View style={styles.item}>
        <Image style ={styles.pokemonImage} source={pokemon.sprite}/>
        <Text style={styles.title}>{`${pokemon.species.charAt(0).toUpperCase() + pokemon.species.slice(1)}`}</Text>
      </View>
    </Link>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 40,
    width: SCREEN_WIDTH
  },
  pokemonImage: {
    padding: 20,
    marginLeft: 2,
  },
  title: {
    fontSize: 32,
  },
});