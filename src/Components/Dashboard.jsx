import React from 'react';
import { View, Text, Button } from 'react-native';

const Dashboard = ({ navigation }) => {
    return (
        <View>
            <Text>Dashboard</Text>
            <Button title='Go Back' onPress={() => navigation.goBack()} />
        </View>
    )
};

export default Dashboard;