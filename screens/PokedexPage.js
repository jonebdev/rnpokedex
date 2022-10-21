import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Image} from 'react-native';
import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from './../utl/network';
import { NavigationContainer } from '@react-navigation/native';


const PokedexPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getPokemon('Pikachu');
      // console.log(resp)
      setData(resp);
    };
    fetchData();
  }, []); 


  console.log(data)

  return (
    <View>
      <ScrollView>
        <Text>
          {data.getPokemon.species}
        </Text>
        {/* <Image source={data.getPokemon.sprite}></Image> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 24
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 12,
    paddingRight: 2,
    fontSize: 18,
    height: 44,
  },
})

export default PokedexPage