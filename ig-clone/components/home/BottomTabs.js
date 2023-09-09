import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Divider } from 'react-native-elements';

const BottomTabIcons = [
  {
    name: 'Home',
    active:
      'https://img.icons8.com/?size=256&id=2797&format=png',
    inactive:
      'https://img.icons8.com/?size=256&id=i6fZC6wuprSu&format=png',
  },
  {
    name: 'Search',
    active:
      'https://img.icons8.com/?size=256&id=132&format=png',
    inactive:
      'https://img.icons8.com/?size=256&id=7695&format=png',
  },
  {
    name: 'Reels',
    active:
      'https://img.icons8.com/?size=256&id=YoIaSvIehcuI&format=png',
    inactive:
      'https://img.icons8.com/?size=256&id=PxI9IPCyBAOD&format=png',
  },
  {
    name: 'Shop',
    active:
      'https://img.icons8.com/?size=256&id=Rkrtz3LGI0Iw&format=png',
    inactive:
      'https://img.icons8.com/?size=256&id=ySRi3OLgoOJX&format=png',
  },
  {
    name: 'Profile',
    active:
    'https://phantom-marca.unidadeditorial.es/ad728f2d16b4ed70c8f1be7fc9af57ff/resize/828/f/jpg/assets/multimedia/imagenes/2023/05/24/16849500271539.jpg',
    inactive:
    'https://phantom-marca.unidadeditorial.es/ad728f2d16b4ed70c8f1be7fc9af57ff/resize/828/f/jpg/assets/multimedia/imagenes/2023/05/24/16849500271539.jpg'
  }
];

const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>

      <Divider width={1} orientation='vertical' />

      <View style={styles.container}>
      <Icon icon={BottomTabIcons[0]} />
      <Icon icon={BottomTabIcons[1]} />
      <Icon icon={BottomTabIcons[2]} />
      <Icon icon={BottomTabIcons[3]} />
      <Icon icon={BottomTabIcons[4]} />

      icon.name == 'Profile' ? styles.profilepic() : null
    </View>
    </View>

  );
};

const styles = StyleSheet.create({
  wrapper:{
    position: 'absolute',
    width: '100%',
    bottom: '0.1%',
    zIndex: 999,
  
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white'
  },
  icon: {
    width: 30,
    height: 30,
  },
profilepic: {

  borderRadius: 30,
}
    
});

export default BottomTabs;
