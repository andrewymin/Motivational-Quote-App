import React from 'react';
import colors from './colors';
import { StyleSheet, View, Text } from 'react-native';

function QuoteComponent(props) {
    return (
        <View style={styles.quoteText}>
            <Text style={styles.quoteTextStyle}>{props.q}</Text>
            <Text style={[styles.quoteTextStyle, {alignSelf: "flex-end"}]}>- {props.a}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    quoteTextStyle: {
        fontSize: 25,
        color: colors.primary,
    },
    quoteText: {
        position: 'absolute',
        top: '27%',
        alignSelf: 'center',
        zIndex: 0,
        backgroundColor: colors.secondary,
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 15,
    },
});

export default QuoteComponent;