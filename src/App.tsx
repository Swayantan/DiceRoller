import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SingleDiceRoll from '../components/SingleDiceRoll';
import DoubleDiceRoll from '../components/DoubleDiceRoll';
import TwoDiceRolls from '../components/TwoDiceRolls';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.main}>
          <ScrollView horizontal={true}>
            <View style={styles.container}>
              <View style={styles.singleDice}>
                <SingleDiceRoll />
              </View>
              <View style={styles.doubleDice}>
                <DoubleDiceRoll />
              </View>
              <View style={styles.twoDice}>
                <TwoDiceRolls />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 900,
    // width:1200,
    backgroundColor: 'FFF2F2',
  },
  container: {flexDirection: 'row'},
  singleDice: {
    height: 900,
    width: 450,
  },
  doubleDice: {height: 900, width: 480},
  twoDice: {height: 900, width: 450},
});
