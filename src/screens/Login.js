import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../assets/movie.png'

const App = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Text
                style={{
                    color: 'white',
                    fontSize: 30,
                    marginBottom: 20,
                }}>
                Movie Review
            </Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="white"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="white"
                />
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Don't have an account? <Text style={{ fontWeight: 'bold' }}> Sign Up</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#333',
        borderRadius: 10,
        color: 'white',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: '#f2ed46',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: '#000',
        fontSize: 20,
    },
    text: {
        color: 'white',
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
    },
})

export default App