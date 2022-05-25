import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { colors } from '../../theme/colors';
import Text from '../text/text';

const Prevention = () => {
  return (
    <View style={styles.container}>
      <Text preset='h2'>Prevention</Text>

      <View style={styles.preventContainer}>
        <View>
          <Image
            style={styles.preventionImg}
            source={require('../../data/avoid.png')}
          />
          <Text preset='h3'>Avoid close {'\n'} contact</Text>
        </View>
        <View>
          <Image
            style={styles.preventionImg}
            source={require('../../data/clean.png')}
          />
          <Text preset='h3' style={{ marginLeft: 10 }}>Clean your {'\n'} hands often</Text>
        </View>
        <View>
          <Image
            style={styles.preventionImg}
            source={require('../../data/musk.png')}
          />
          <Text preset='h3' style={{ marginLeft: 25 }}>Wear a {'\n'} facemask</Text>
        </View>
      </View>

      {/* second part  */}
      <View style={styles.preventCard}>
        <Image
          style={styles.prevetCardImg}
          source={require('../../data/help.png')}
        />
        <View style={{ textAlign: 'center' }}>
          <Text preset='h2' style={{ color: colors.white }}>Do your own test!</Text>
          <Text preset='para' style={{ color: colors.white, marginTop: 5 }}>
            Follow the instructions to do {'\n'}  your own test.
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Prevention;

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  preventionImg: {
    height: 100,
    width: 100,
    marginRight: 20

  },
  preventContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  preventCard: {
    backgroundColor: colors.bg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    marginTop: 20,
    borderRadius: 20
  },
  prevetCardImg: {
    height: 120,
    width: 120,
  }

})
