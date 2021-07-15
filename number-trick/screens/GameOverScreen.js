import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <Text>The number of Rounds: {props.roundsNumber}</Text>
            <Text>The Correct Number is: {props.userNumber}</Text>
            <Button title='Restart Game' onPress={props.onRestart} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;