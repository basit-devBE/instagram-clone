import { View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import React from 'react'
import { USERS } from '../../Data/users'

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
        <ScrollView 
        horizontal
         showsHorizontalScrollIndicator={false}
         >
          {USERS.map((story, index) => (
            <View key={index}>
           <Image source={{uri: story.image}} style={styles.story}/>
            <Text style={styles.storyText}>{story.user }</Text>
           </View>
          )
          )}
         </ScrollView>
      
    </View>
  )
}
const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501',
    },
    storyText: {
        color: 'white',
        textAlign: 'center', // Center-aligns the text horizontally under the image.
      },
})

export default Stories