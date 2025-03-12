import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import SearchBar from './components/SearchBar';
import { fetchPokemonAbilities } from './services/api';

interface PokemonData {
  name: string;
  abilities: string[];
}

export default function App() {
  const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSearch = async (pokemon: string) => {
    const abilities = await fetchPokemonAbilities(pokemon);
    if (abilities.length > 0) {
      setPokemonData([{ name: pokemon, abilities }, ...pokemonData]);
      setErrorMessage(null);
    } else {
      setErrorMessage(`Pokemon "${pokemon}" não foi encontrado ou não possui habilidades.`);
    }
  };

  const handleRemove = (index: number) => {
    const newData = [...pokemonData];
    newData.splice(index, 1);
    setPokemonData(newData);
  };

  const showRemoveAlert = (index: number) => {
    Alert.alert(
      "Remover Pokemon",
      "Você quer remover esse Pokemon da sua lista?",
      [
        {
          text: "Não",
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: () => handleRemove(index),
          style: "destructive"
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Pokemon Abilities</Text>
        <SearchBar onSearch={handleSearch} />
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        <FlatList
          data={pokemonData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => showRemoveAlert(index)}>
              <View style={styles.pokemonContainer}>
                <Text style={styles.pokemonName}>{item.name}</Text>
                {item.abilities.map((ability, idx) => (
                  <Text key={idx} style={styles.ability}>
                    {ability}
                  </Text>
                ))}
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  listContent: {
    width: '100%',
  },
  pokemonContainer: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  pokemonName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  ability: {
    fontSize: 18,
    color: '#fff',
  },
  separator: {
    height: 1,
    backgroundColor: '#555',
    marginVertical: 5,
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
});