import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
 
export default function Card({ title, content, buttonText, onPress }) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>
                {title}
            </Text>
            <Text style={styles.cardContent}>
                {content}
            </Text>
            <Button title={ buttonText } onPress = { onPress }/>
        </View>
    )
}
 

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#c1c1c1',
        borderRadius: 10,
        padding: 15,
        marginTop: 12,
        elevation: 3,
        shadowColor: '#00',
        shadowOpacity: 0.2,
        shadowRadius: 1.41

    },
    cardTitle:{
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10
    },
    cardContent: {
      fontSize: 14,
      marginBottom: 10
    }
})
