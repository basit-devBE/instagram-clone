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

        <TouchableOpacity>
          <Image
          source = {require('../../assets/hearts.png')
        }

        style={styles.icon}
        />
        </TouchableOpacity>

        <TouchableOpacity>
          <TouchableOpacity>
            <View style = {styles.unreadBadge}>
            <Text style = {styles.unreadBadgeText}>11</Text>
            </View>
          </TouchableOpacity>
          <Image
          source = {require('../../assets/messages.png')
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
  },

  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 30,
    bottom: 20,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 200,
  },

  unreadBadgeText:{
    color: 'black',
    fontWeight: '600',
  }
})

export default Header