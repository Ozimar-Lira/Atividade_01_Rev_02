import { StatusBar } from 'react-native';
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import header from '../styles/index.js';

class Header extends Component {
    render() {
        return (
            <View style={header.background}>
                <StatusBar style= "light" backgroundColor="#000" translucent={true}/>
                <View style={header.container}>
                    <Text style={header.title}>Titulo</Text>
                    <Text style={header.subtitle}>Novidades</Text>
                    <Text style={header.subtitle}>Promoções</Text>
                    <Text style={header.subtitle}>Feminino</Text>
                    <Text style={header.subtitle}>Masculino</Text>
 
                </View>
            </View>
        );
    }
}

export default Header;