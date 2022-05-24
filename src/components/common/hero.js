import React from 'react'
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import Text from '../text/text';

const Hero = () => {
    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <Feather name="menu" size={24} color="white" />
                <Feather name="bell" size={24} color="white" />
            </View>

            <View style={styles.container}>
                <Text preset='h1' style={{ color: colors.white }}>Covid-19</Text>
                <View style={styles.selectCountry}>
                    <Image
                        style={styles.flag}
                        source={require('../../data/flag.png')}
                    />
                    <Text preset='h3' style={{ marginHorizontal: 10 }}>USA</Text>
                    <AntDesign name="caretdown" size={15} color="black" />
                </View>
            </View>

            <Text preset='h2' style={{ color: colors.white, paddingHorizontal: 20, }}>
                Are You Feeling Sick?
            </Text>
            <Text preset='para' style={{ color: colors.white, paddingHorizontal: 20, }}>
                If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.
            </Text>

            <View style={styles.buttonContainer}>
                <Pressable style={styles.callButton} onPress={() => alert('Functionality will be added ')}>
                    <Ionicons name="md-call" size={24} color="white" />
                    <Text preset='h3' style={{ color: colors.white, paddingHorizontal: 10, }}>Call Now</Text>
                </Pressable>
                <Pressable style={styles.msgButton} onPress={() => alert('Functionality will be added ')}>
                    <Feather name="message-circle" size={24} color="white" />
                    <Text preset='h3' style={{ color: colors.white, paddingHorizontal: 10, }}>Send SMS</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Hero;

const styles = StyleSheet.create({
    body: {
        backgroundColor: colors.vilet,
        paddingBottom: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,

    },
    flag: {
        borderRadius: 10
    },
    selectCountry: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.white,
        borderRadius: 20,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center'
    },
    callButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.orange,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginHorizontal: 20
    },
    msgButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.lightBlue,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginHorizontal: 20
    },

})