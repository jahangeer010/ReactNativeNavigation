import { Image, View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';

export default function Login({ navigation }) {
    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={{
                        uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
                    }}
                    style={{
                        width: 200,
                        height: 200
                    }}
                />
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginVertical: 10 }}>Login Here</Text>
            </View>
            <View style={{margin:10}}>
                <TextInput label='email' />

                <TextInput style={{marginTop:20}} label='Password' />
            </View>

            <View>
                <TouchableOpacity>
                    
                </TouchableOpacity>

            </View>

            {/* <TouchableOpacity style={{
                backgroundColor: 'grey',
                justifyContent: 'center',
                width: '50%',
                height: 45,

                alignItems: 'center'
            }}
            onPress={()=>navigation.navigate('Home')}
            >
                <Text>Go to Home Screen</Text>
            </TouchableOpacity> */}
        </SafeAreaView>
    )
}