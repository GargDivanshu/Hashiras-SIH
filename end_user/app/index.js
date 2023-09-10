import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import HomeComponent from '../components/home/HomeComponent';


const Home = () => {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>
                    This is Home Screen For End User
                </Text>
            <HomeComponent/>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Home;

