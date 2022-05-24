import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { presets } from './text.presets';


const Text = ({ children, preset = "default", style }) => {
    const textStyles = StyleSheet.compose(presets[preset], style);
    return (
        <RNText style={textStyles}>
            {children}
        </RNText>
    )
}

export default Text;