import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const UseEffectHook = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        let response = await fetch("https://thapatechnical.github.io/userapi/users.json");
        let resp = await response.json();
        setData(resp);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={{ marginTop: 45 }}>
            <FlatList data={data} renderItem={(e) => {
                return (
                    <View style={styles.card}>
                        <Image style={[styles.image, styles.common]} source={{ uri: e.item.image }} />
                        <Text>#{e.item.userId}</Text>
                        <Text>{e.item.name}</Text>
                        <Text>{e.item.email}</Text>
                        <Text>{e.item.mobile}</Text>
                        <Text>{e.item.website}</Text>
                    </View>
                )
            }} />
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        padding: 9,
        alignItems: "center"
    },
    common: {
        borderWidth: 8,
    },
    image: {
        height: 100,
        width: 100
    }
});

export default UseEffectHook