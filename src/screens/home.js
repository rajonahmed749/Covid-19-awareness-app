import React from 'react'
import { View, StyleSheet } from 'react-native'
import Hero from '../components/common/hero'
import Prevention from '../components/common/prevention'
import Text from '../components/text/text'

const Home = () => {
    return (
        <View>
            <Hero />
            <Prevention />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {

    }
})