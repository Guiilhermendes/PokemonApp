import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AbilityListProps {
  abilities: string[];
}

const AbilityList: React.FC<AbilityListProps> = ({ abilities }) => {
  return (
    <View style={styles.container}>
      {abilities.map((ability, index) => (
        <View key={index} style={styles.abilityContainer}>
          <Text style={styles.ability}>{ability}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
  },
  abilityContainer: {
    backgroundColor: '#444',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  ability: {
    fontSize: 18,
    color: '#fff',
  },
});

export default AbilityList;