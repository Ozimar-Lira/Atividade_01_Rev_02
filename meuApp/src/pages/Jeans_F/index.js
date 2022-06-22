import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import Moda from '../../components/Moda';
import Home from '../Home';

export default function Jeans_F({ navigation }, props) {
  return (
    <View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../../images/4.jpg')}
          style={styles.image}
          resizeMode='stretch'
        />
        <Text style={styles.titulo}>Calça Jeans</Text>
        <Text style={styles.titulo1}>R$ 90,00</Text>
        <Text style={styles.titulo2}>Lorem ipsum ut a senectus porttitor erat malesuada leo himenaeos placerat, donec eleifend metus aliquam ad auctor quis sollicitudin tortor molestie, ut himenaeos varius hac ac diam ullamcorper vulputate sagittis. fringilla placerat tempus aliquam nullam cursus at eleifend pulvinar neque amet mattis, aliquet faucibus auctor varius suscipit nam cras adipiscing tortor laoreet. class per lacus orci erat nulla conubia vitae sapien, proin laoreet tortor lacus sagittis curabitur metus etiam, curabitur vulputate id sollicitudin elit quisque nulla. fusce vitae integer congue curae sociosqu inceptos at sapien egestas at id porta, feugiat cursus libero fermentum egestas aenean sodales pharetra habitant duis non. </Text>
      </View>


      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        {/* Volta para a rota anterior */}
        <Button
          title="RETORNAR"
          onPress={() => { navigation.goBack() }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',

  },

  header: {
    marginBottom: 1,
  },

  image: {
    width: '100%',
  },

  textContainer: {
    flexDirection: 'row',
    marginVertical: '1%',
    //    marginHorizontal: '5%',
    //    backgroundColor: '#000',
    width: '100%',
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  text: {
    color: '#000',
    fontSize: 10,
    height: 60,
    width: 60,
    marginHorizontal: '2%',
    backgroundColor: '#ecf0f1',
    opacity: 0.4,
    borderColor: '#dadada',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    //    marginHorizontal: '1%'

  },

  titulo: {
    color: '#dadada',
    fontSize: 50,
    marginVertical: '2%',
    marginHorizontal: '2%',
    marginBottom: '1%',



  },

  titulo1: {
    color: '#dadada',
    padding: 5,
    fontSize: 25,
    marginVertical: '2%',
    marginHorizontal: '2%',
    marginBottom: '1%',
    backgroundColor: 'green',
    borderRadius: 30,
    opacity: 0.4,


  },

  titulo2: {

    fontSize: 15,
    textAlign: 'justify',
    marginVertical: '2%',
    marginHorizontal: '3%',
    marginBottom: '1%',
    opacity: 0.99,


  },


  line: {
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  },

  imagem_fundo: {
    //    width: 220,
    //    height: 110,
    justifyContent: 'flex-end'

  },

  /*    input2: {
          margin: 15,
          height: 40,
          borderColor: '#7a42f4',
          borderWidth: 1,
          backgroundColor: '#fff'
      },
  */
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 12,

  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',

  },

  moda: {
    // paddingLeft: 10,
    //  paddingTop: 10,
    //   paddingBottom: 10,
  }





});
