import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
      <Image
      
       style={styles.logo} source = {require('../../assets/logo.png')} />
    </TouchableOpacity>

    <View style={styles.iconsContainer}>
      <TouchableOpacity>
        
        <Image 
        source = {require('../../assets/vv.jpg')}
        style = {styles.icons}
        />
        
        </TouchableOpacity>    

        <TouchableOpacity>
        
        <Image 
        source = {require('../../assets/love.png')}
        style = {styles.icons}
        />
        
        </TouchableOpacity>        

        <TouchableOpacity>
          <View style={styles.UnreadBadge}>
          <Text style={styles.UnreadBadgeText}>11</Text>
          </View>
        <Image 
        source = {require('../../assets/bb.png')}
        style = {styles.icons}
        />
        
        </TouchableOpacity>        



    </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,

    },
    iconsContainer: {
        flexDirection: 'row',
    },

    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },

    icons: {
        width: 30,
        height: 40,
        marginLeft: 10,
        resizeMode: 'contain',
    },

    UnreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    UnreadBadgeText: {
        color: 'white',
        fontWeight: '600',

    }
})

export default Header