import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Texto() {
  const [texto, setTexto] = useState('Texto do novo componente');

  useEffect(() => {

    setTexto('Outro Texto')
    
  }, []);
    return (
    <Text style={estilos.texto}>{texto}</Text>
  )
}

const estilos = StyleSheet.create({
    texto: {
        color: "#bc9d70",
        fontWeight: "bold",
        fontSize: 26,
        marginTop:8,
        marginLeft: 20
    }
});
