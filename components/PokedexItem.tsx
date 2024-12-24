import { Image } from "expo-image";
import {Pokemon } from "@favware/graphql-pokemon";
import { Link } from 'expo-router';
import { Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get("screen").width - 20;
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { StyleSheet, Text, View, useColorScheme} from 'react-native';

export const PokedexItem = (props: {
  pokemon: Pokemon
}) => {
  const colorScheme = useColorScheme();

  const { pokemon } = props
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Link href="/pokemon">
          <View style={styles.item}>
            <Image style ={styles.pokemonImage} source={pokemon.sprite}/>
            <Text style={styles.title}>{`${pokemon.species.charAt(0).toUpperCase() + pokemon.species.slice(1)}`}</Text>
          </View>
        </Link>
      </SafeAreaView>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    margin: 20,
    borderRadius: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: SCREEN_WIDTH
  },
  pokemonImage: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 32,
  },
});
