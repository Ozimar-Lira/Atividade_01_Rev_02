import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Moda(props) {
    function filterDesc(desc){
        if(desc.length < 18){
            return desc;
        }
        return `${desc.substring(0,18)}...`;
    }
    
    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image
                source={props.img}
                style={styles.modaImg}
                resizeMode = 'stretch'
            />
            <Text style={styles.moda}>{filterDesc(props.children)}</Text>
            <Text style={styles.preco}>{props.cost}</Text>

        </TouchableOpacity>

    );
}


const styles = StyleSheet.create({

    container:{
        paddingVertical: '2%',
        paddingHorizontal: '1%',
        alignItems: 'center',
        justifyContent: 'center',


    },

    modaImg:{
        width: 175,
        height:175,

    },

    moda:{
        fontSize:16,

    },

    preco: {
        fontSize:16,
        opacity: 0.4


    },

});