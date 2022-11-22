import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = () => {
    const [data, setData] = useState({
        nip: '',
        password: '',
        name: ''
    })
    console.log('data', data);

    useEffect(() => {
        getData()
        return () => { };
    }, []);

    const getData = async () => {
        try {
            let nip = await AsyncStorage.getItem('nip')
            let password = await AsyncStorage.getItem('password')
            let name = await AsyncStorage.getItem('name')
            if (nip !== null) {
                // value previously stored
                setData({
                    nip: nip,
                    password: password,
                    name: name
                })
            }
        } catch (e) {
            // error reading value
        }
    }

    return (
        <View>
            <Text>{data.nip}</Text>
            <Text>{data.password}</Text>
            <Text>{data.name}</Text>
        </View>
    )
}

export default Account