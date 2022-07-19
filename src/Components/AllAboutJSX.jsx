import React from "react";
import { View, Text } from 'react-native';

const AllAboutJSX = () => {
    let details = {
        name: "PrashantSL",
        age: 21,
        degree: "BCA"
    }
    return (
        < View >
            <Text>
                Hi My name is {details.name} & age is {details.age}. I have done my graduation is {details.degree}
            </Text>
        </View >
    );
};
export default AllAboutJSX;