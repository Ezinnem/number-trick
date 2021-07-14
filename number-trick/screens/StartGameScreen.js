import React,{useState} from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';
import { TouchableWithoutFeedback } from 'react-native';


const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
    };

    const confirmInputHandler = () => {

    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} blurOnSubmit autoCapitalize autoCorrect={false} keyboardType="number-pad" maxLength={2} onChangeText={numberInputHandler} value={enteredValue}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttton}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/></View>
                   <View style={styles.button}><Button title="Confirm" onPress={() => {}} color={Colors.primary}/></View>

                </View>
            </Card>
        </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer :{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    input:{
        width: 50,
        textAlign: 'center'
    },
    buttonContainer: {
       flexDirection: 'row',
       width: '100%',
       justifyContent: 'space-between',
       paddingHorizontal: 15
        
    },
    button: {
        width: 100
    }
});

export default StartGameScreen;