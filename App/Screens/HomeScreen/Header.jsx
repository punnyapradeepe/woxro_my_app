import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import Colors from '../../Utils/Colors';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
  return (
    <View>
      <View style={[styles.upperBox, { backgroundColor: '#B2EBF2' }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={styles.upperBoxText}>Hello</Text>
          <Text style={styles.upperBoxSubText}>Hi James</Text>
        </View>
        <Image
          source={require('./../../../assets/images/home.png')}
          style={styles.upperBoxImage}
        />
      </View>

      <View style={styles.container}>
        <View style={styles.profileMainContainer}>
          <Image
            source={require('./../../../assets/images/login.png')}
            style={styles.loginImage}
          />
          <View style={styles.textContainer}>
            <Text style={{ color: Colors.WHITE, fontSize: 20 }}>Dr.Imran Syahir</Text>
            <Text style={{ color: Colors.WHITE, fontSize: 15 }}>General Doctor</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </View>
      </View>
      
      {/* Search Bar */}
      <View style={styles.SearchBarContainer}>
        <TextInput placeholder='Search' style={styles.textInput} />
        <FontAwesome name="search" style={[styles.searchbtn, { marginLeft: 10 }]} size={24} color={Colors.PRIMARY} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  upperBox: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upperBoxImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  upperBoxText: {
    fontSize: 16,
  },
  upperBoxSubText: {
    fontSize: 14,
    marginLeft: 10,
  },
  container: {
    paddingTop: 10, 
    paddingHorizontal: 10, 
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textContainer: {
    alignItems: 'flex-end', 
  },
  loginImage: {
    width: 50,
    height: 50, 
    borderRadius: 25, 
  },
  SearchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 9,
    width: '85%',
  },
  searchbtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 8,
  },
});
