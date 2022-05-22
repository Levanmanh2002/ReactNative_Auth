import React from "react";
import {StyleSheet, View, Text, Button} from 'react-native';
import { useUserContext } from "../../../UserContext";

export default function LoginScreen() {
    const {siginIn} = useUserContext();

    return (
        <View style={styles.container}>
            <Text>LoginScreen</Text>
            <Button title="Login" onPress={siginIn} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});