import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import Card from '../Components/Card';

export default function Home() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text style={styles.tituloContato}>Seja Bem vindo</Text>
        <Card
        title="Sobre"
        content="Saiba Mais sobre nós e nossos serviços"
        buttonText="Ir para sobre"
        onPress={() => navigation.navigate('Sobre')}/>
  
        
        <Text style={styles.tituloInfo}>Mais Informações </Text>

        <Card
        title="Contato"
        content="Clique abaixo para entrar em contato"
        buttonText="Ir para contato"
        onPress={() => navigation.navigate('Contato')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding:20,
    },
    tituloContato: {
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: "center"
    },
    tituloInfo:{
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
    }
})
