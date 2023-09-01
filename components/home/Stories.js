import { View, Text ,ScrollView,Image,StyleSheet} from 'react-native'
import React from 'react'
import { USERS } from '../../Data/users'

const Stories = () => {
  return (
    <View style={{ marginBottom: 13}}>
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator = {false}
    >
     {USERS.map((story, index) => (
  <Image source={story.image} style={styles.story} key={index} />
))}

        
    </ScrollView>
      <Text style={{color :'black'}}>Stories</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    story: {
        width:80,
        height: 80,
    }
})
export default Stories