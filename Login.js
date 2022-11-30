import { View, Text, TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'

export default function Login({navigation}) {
    return (
        <View>
            <TouchableOpacity style={{
                backgroundColor: 'grey',
                justifyContent: 'center',
                width: '50%',
                height: 45,

                alignItems: 'center'
            }}
            onPress={()=>navigation.navigate('Home')}
            >
                <Text>Go to Home Screen</Text>
            </TouchableOpacity>
        </View>
    )
}