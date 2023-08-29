import { View, Text, Image, StyleSheet,TouchableOpacity  } from 'react-native'
import React from 'react'


const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Image style={styles.logo} 
      source= {require('../../assets/Logo.png')}
      />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
          source = {require('../../assets/plus.png')
            }
          style={styles.icon}
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
    marginHorizontal: 50,
  },

  iconsContainer: {
    flexDirection: 'row',
  },

  logo:{
    width: 100,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'flex-start'
  },

  icon: {
    width: 30,
    height: 30,
    marginLeft: 20,
    resizeMode: 'contain'
  }
})

export default Header