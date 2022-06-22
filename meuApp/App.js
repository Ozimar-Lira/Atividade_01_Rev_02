//import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header.js';

import Routers from './src/router.js';


// Criamos a nossa classe App para renderizar nosso projeto 
export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routers/>

    </>
  );
}


// Informamos qual classe será renderizada no aplicativo 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});