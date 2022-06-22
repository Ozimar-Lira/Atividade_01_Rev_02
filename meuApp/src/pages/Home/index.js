import React, { Children } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import Moda from '../../components/Moda';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; 
//import HTMLView from 'react-native-htmlview';


export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <TouchableOpacity style={styles.text}>
                    <Icon name='woman-outline' size={25} color="#900" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.text}>
                    <Icon name='man-outline' size={25} color="#900" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.text}>
                    <Icon name='log-in-outline' size={25} color="#900" />

                </TouchableOpacity>
                <TouchableOpacity style={styles.text}>
                    <Icon name='cart-outline' size={25} color="#900" />

                </TouchableOpacity>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="ios-search" size={20} color="#900" />
                </View>
                <TextInput style={styles.input} placeholder='Buscar' />
            </View>
            <View style={styles.line} />
            <View>
                <Text style={styles.titulo}>BAZZAAR</Text>
            </View>

            <View style={styles.header}>
                <Image
                    source={require('../../images/bazzar.jpg')}
                    style={styles.image}
                />

            </View>

            <ScrollView>
                <View>
                    <Text style={styles.titulo1}>Moda Feminina</Text>

                </View>

                <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                    <ScrollView horizontal={true} style={styles.container}>
                        <Moda img={require('../../images/1.jpg')} cost="R$ 60,00" onClick={() => navigation.navigate('Detail')}>
                            Vestido
                        </Moda>

                        <Moda img={require('../../images/2.jpg')} cost="R$ 80,00" onClick={() => navigation.navigate('Macacao')}>
                            Macacão
                        </Moda>

                        <Moda img={require('../../images/3.jpg')} cost="R$ 60,00" onClick={() => navigation.navigate('Casaco_F')}>
                            Casaco
                        </Moda>

                        <Moda img={require('../../images/4.jpg')} cost="R$ 90,00" onClick={() => navigation.navigate('Jeans_F')}>
                            Calça Jeans
                        </Moda>
                    </ScrollView>
                </View>

                <View>
                    <Text style={styles.titulo1}>Moda Masculina</Text>

                </View>

                <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                    <ScrollView horizontal={true} style={styles.container}>
                        <Moda img={require('../../images/5.jpg')} cost="R$ 60,00" onClick={() => navigation.navigate('Jeans_M')}>
                            Calça Jeans
                        </Moda>

                        <Moda img={require('../../images/6.jpg')} cost="R$ 80,00" onClick={() => navigation.navigate('Casaco_M')}>
                            Casaco
                        </Moda>

                        <Moda img={require('../../images/7.jpg')} cost="R$ 60,00" onClick={() => navigation.navigate('Calca_M')}>
                            Calça
                        </Moda>

                        <Moda img={require('../../images/8.jpg')} cost="R$ 90,00" onClick={() => navigation.navigate('Camisa_M')}>
                            Camisa
                        </Moda>
                    </ScrollView>
                </View>

                <View></View>
                <View style={styles.line} />

                <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ backgroundColor: '#D8d8d8', width: '50%', alignSelf: 'center', height: '100%' }}>
                            <Text style={{ marginHorizontal: '5%' }}>Bem Vindo ao Bazzar!</Text>
                            <Text style={{ marginHorizontal: '5%' }}>Nossos produtos são inspirados pelas pessoas que estão à nossa volta, com suas belezas e qualidades</Text>
                            <Text style={{ marginHorizontal: '5%' }}>Produtos de bom gosto especialmente para você.Descuba our story e aproveite as promoções</Text>
                        </View>
                        <View style={{ backgroundColor: '#D8d8d8', width: '50%', alignSelf: 'center' }}>
                            <Image
                                source={require('../../images/bemvindo.jpg')}
                                //     style={styles.imagem_fundo}
                                resizeMode='contain'
                            />
                        </View>

                    </View>

                    <View style={styles.textContainer}></View>
                <View style={styles.line} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ backgroundColor: '#D8d8d8', width: '50%', alignSelf: 'center', height: '100%' }}>
                            <Text style={{ marginHorizontal: '5%' }}>Rua Eusébio 10</Text>
                            <Text style={{ marginHorizontal: '5%' }}>Centro, Cidade das Águas.</Text>
                            <Text style={{ marginHorizontal: '5%' }}>Aberto de segunda a sexta de 10 às 21.</Text>
                        </View>
                        <View style={{ backgroundColor: '#D8d8d8', width: '50%', alignSelf: 'center' }}>
                            <Image
                                source={require('../../images/endereco_bazzar.jpg')}
                                //     style={styles.imagem_fundo}
                                resizeMode='contain'
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.textContainer}></View>
                <View style={styles.line} />
                <View style={styles.textContainer}>
                    <TouchableOpacity style={styles.text}>
                        <Icon name='logo-twitter' size={15} color="#900" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.text}>
                        <Icon name='logo-facebook' size={15} color="#900" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.text}>
                        <Icon name='logo-linkedin' size={15} color="#900" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.text}>
                        <Icon name='logo-instagram' size={15} color="#900" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.text}>
                        <Icon name='logo-whatsapp' size={15} color="#900" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.text}>
                        <Icon name='card-outline' ali size={15} color="#900" />
                    </TouchableOpacity>
                </View>

            </ScrollView >
        </View >


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
        fontSize: 20,
        marginVertical: '2%',
        marginHorizontal: '2%',
        marginBottom: '1%',


    },

    titulo1: {
        color: '#dadada',
        fontSize: 15,
        marginVertical: '2%',
        marginHorizontal: '2%',
        marginBottom: '1%',


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