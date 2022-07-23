import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const Challenge = () => {
    let arr = [
        {
            title: "Season 1",
            actor: "Rocking Star Yash",
            director: "Prashant Neel",
            producer: "Hombale Films"
        },
        {
            title: "Season 2",
            actor: "Rocking Star Yash",
            director: "Prashant Neel",
            producer: "Hombale Films"
        },
        {
            title: "Season 3",
            actor: "Rocking Star Yash",
            director: "Prashant Neel",
            producer: "Hombale Films"
        },
        {
            title: "Season 4",
            actor: "Rocking Star Yash",
            director: "Prashant Neel",
            producer: "Hombale Films"
        },
        {
            title: "Season 5",
            actor: "Rocking Star Yash",
            director: "Prashant Neel",
            producer: "Hombale Films"
        },
        {
            title: "Season 6",
            actor: "Rocking Star Yash",
            director: "Prashant Neel",
            producer: "Hombale Films"
        },
        {
            title: "Season 7",
            actor: "Rocking Star Yash",
            director: "Prashant Neel",
            producer: "Hombale Films"
        },
        {
            title: "Season 8",
            actor: "Rocking Star Yash",
            director: "Prashant Neel",
            producer: "Hombale Films"
        },
        {
            title: "Season 9",
            actor: "Rocking Star Yash",
            director: "Prashant Neel",
            producer: "Hombale Films"
        },
        {
            title: "Season 10",
            actor: "Rocking Star Yash",
            director: "Prashant Neel",
            producer: "Hombale Films"
        },
    ]
    return (
        <View style={{ marginTop: 100, margin: 2 }}>
            <FlatList horizontal data={arr} renderItem={({ item }) => {
                return (
                    <View style={styles.card}>
                        <Text>{item.title}</Text>
                        <Text style={styles.actor}>{item.actor}</Text>
                        <Text>{item.director}</Text>
                        <Text>{item.producer}</Text>
                    </View>
                )
            }} />
            <FlatList data={arr} renderItem={({ item }) => {
                return (
                    <View style={styles.card}>
                        <Text>{item.title}</Text>
                        <Text style={styles.actor}>{item.actor}</Text>
                        <Text>{item.director}</Text>
                        <Text>{item.producer}</Text>
                    </View>
                )
            }} />
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        textAlign: "center",
        borderColor: "blue",
        margin: 2,
        padding: 10,
        backgroundColor: "powderblue"
    },
    actor: {
        color: "rgb(0,60,180)",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 16
    }
})

export default Challenge