import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Prime() {
  return (
    <>
     <View style={estilos.topo}>
        <Text style={estilos.titleTopo}>Detalhes do Sistema</Text>
    </View>

    <View style={estilos.listaDescricao}>
        <Text style={estilos.nomeLista}>Lista de compra</Text>
    </View>
    <View>
        <Text style={estilos.descricao}>
            Abacate com cenoura e cenoura cenoura com abacate é abacate, porém marmelo não é feito de banana
        </Text>

        <Text style={estilos.preco}>
            R$40,00
        </Text>
    </View>
    </>
   
  )
}

const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 150,
        backgroundColor: "black",
    },
    titleTopo:{
        width: "100%",
        color: "white",
        textAlign: "center",
        fontSize: 20,
        paddingTop:60,
        fontWeight: "bold"
    },
    listaDescricao: {
        paddingTop: 20,
        fontSize: 15,
        marginLeft: 20
    },
    nomeLista :{
        fontWeight: "bold"
    },
    descricao:{
        color: "#212121",
        marginLeft: 20,
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#CD3333",
        fontWeight: "bold",
        fontSize: 26, 
        marginTop: 8,
        marginLeft: 20

    }
})
