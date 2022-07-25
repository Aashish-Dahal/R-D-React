import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../../utils/style/Styles';
import React, {useState, useEffect} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import FirebaseUtil from '../../utils/firebase/firebase';
import {deleteNote, getNotes} from '../../utils/Firestore/firestore.util';

const HomeScreen = ({navigation}) => {
  const handleSignOut = () => {
    FirebaseUtil.signOut();
    navigation.navigate('Login');
  };
  const [note, setNote] = useState([]);

  useEffect(() => {
    getNotes(setNote);
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 20}}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {index + 1}
          </Text>
        </View>
        <View style={{height: 80, backgroundColor: 'grey', width: 1}}></View>
        <View
          style={{
            flex: 9,
            paddingLeft: 15,
            paddingTop: 10,
            paddingBottom: 5,
          }}>
          <Text
            style={{
              color: 'grey',
            }}>
            {item.date}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 5,
            }}>
            {item.title}
          </Text>
          <Text style={{color: 'black', marginTop: 5}}>{item.description}</Text>
        </View>
        <View style={{height: 80, backgroundColor: 'grey', width: 1}}></View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingRight: 10,
            paddingLeft: 10,
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Edit', {
                id: item.id,
              })
            }>
            <Icons
              name="pencil-sharp"
              color="grey"
              size={20}
              style={{marginBottom: 15}}></Icons>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteNote(item.id)}>
            <Icons name="trash" color="red" size={20}></Icons>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.homeContainer}>
      <FlatList
        data={note}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}></FlatList>
      <TouchableOpacity onPress={() => navigation.navigate('Add')}>
        <View style={styles.floatingButton}>
          <Icons name="add" color="white" size={30}></Icons>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({});
