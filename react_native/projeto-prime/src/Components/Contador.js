import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Contador() {
    const [count, setCount] = useState(0);
    const [msg, setMsg ] = useState('');

    useEffect(() => {
        setMsg(`O valor do count foi atualizado ${count} vez(es)`)
    }, [count])
  return (
    <> 
    <Text style={estilos.texto}>Você clicou aqui {count}</Text>
    <Text style={estilos.subTexto}>{msg}</Text>

    <View style={estilos.buttonList}>
        <Button  
        onPress={() => {
            setCount(count + 1);
        }}
        title="Clique aqui"
        />

    </View>

    <View style={estilos.buttonList}>
        <Button  
        onPress={() => {
            setCount(count - 1);
        }}
        title="Diminuir"
        />

    </View>
    </>
  )
}

const estilos = StyleSheet.create({
    buttonList: {
        padding:10
    },
    texto: {
        color: "#010CFA",
        fontWeight: "bold",
        fontSize: 20,
        marginTop:8,
        marginLeft: 20
    },
    subTexto: {
        color: "#6FD8F7",
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 20 
    }
})
