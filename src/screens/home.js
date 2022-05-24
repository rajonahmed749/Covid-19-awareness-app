import React from 'react'
import { View, StyleSheet } from 'react-native'
import Hero from '../components/common/hero'
import Text from '../components/text/text'

const Home = () => {
    return (
        <View>
            <Hero />
            <Text preset='h1'>
                This is home
            </Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {

    }
})