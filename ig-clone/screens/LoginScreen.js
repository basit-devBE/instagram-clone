import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'

const INSTAGRAM_LOGO =
'https://img.icons8.com/?size=256&id=Xy10Jcu1L2Su&format=png'

const LoginScreen = ({navigation}) => 
  (
    <View style={StyleSheet.container}>
        <View style={styles.logoContainer}>
        <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width:100 }} />
        </View>
    <LoginForm navigation={navigation} />
    </View>
  )

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },

    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    }
  })


export default LoginScreen