import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Keyboard,
  ScrollView,
} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Icon, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as Style from '../constants/styles/Styles';

const Notes = ({navigation, ...props}) => {
  const [searchNote, setSearchNote] = useState();
  function deleteNote(index) {
    let newArray = [...props.notes];
    let moveNote = newArray.splice(index, 1);
    props.setNotes(newArray);
    props.setMoveToBin(moveNote);
    let bin = [moveNote, ...props.moveToBin];
    props.setMoveToBin(bin);
  }
  function search() {
    if (searchNote === '') {
      Alert.alert('Type something in search box');
    } else if (searchNote !== '') {
      props.notes.forEach((item, index) => {
        if (item.includes(searchNote)) {
          let searchItem = [...props.notes];
          let firstElofArray = searchItem[0];
          let index = [...props.notes].indexOf(item);
          searchItem[0] = item;
          searchItem[index] = firstElofArray;
          props.setNotes(searchItem);
        }
      });
    }
    setSearchNote('');
    Keyboard.dismiss();
  }
  function clearAllNotes() {
    let emptyArray = [...props.notes];
    let deletedComArray = [...props.moveToBin];
    emptyArray.forEach((item, index) => {
      deletedComArray.push(item);
    });
    emptyArray = [];
    props.setNotes(emptyArray);
    props.setMoveToBin(deletedComArray);
  }
  return (
    <View style={styles.notesContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}> Your Notes...</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={[styles.button, {marginLeft: 40}]}
            onPress={() => navigation.navigate('DeleteNotes')}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
              <Icon
                name="trash-2-outline"
                fill="white"
                style={{width: 25, height: 50}}
              />
            </ApplicationProvider>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate('AddNote')}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
              <Icon
                name="plus-outline"
                fill="white"
                style={{width: 25, height: 50}}
              />
            </ApplicationProvider>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontWeight: '700', fontSize: 18, color: Style.color}}>
          Total:
        </Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search..."
          placeholderTextColor={Style.color}
          style={[styles.input, {borderWidth: 3}]}
          value={searchNote}
          onChangeText={text => setSearchNote(text)}></TextInput>
        <TouchableOpacity
          style={[styles.searchButton, {width: 50}]}
          onPress={() => search()}>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
            <Icon name="search" fill="white" style={{width: 25, height: 40}} />
          </ApplicationProvider>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => clearAllNotes()}>
          <Text style={styles.searchButtonText}> Clear</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {props.notes.length === 0 ? (
          <View style={styles.emptyNoteContainer}>
            <Text style={styles.emptyNoteText}>There is no note yet!</Text>
          </View>
        ) : (
          props.notes.map((data, index1) => (
            <View style={styles.item} key={index1}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.note}>
                  <Text style={styles.index}>{index1 + 1}.</Text>
                  <Text style={styles.text}>{data}</Text>
                </View>
                <TouchableOpacity onPress={() => deleteNote(index1)}>
                  <Text style={styles.delete}>X</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dateContainer}>
                <Text style={{color: 'black'}}> {props.date}</Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('EditNote', {
                      i: index1,
                      n: data,
                    })
                  }>
                  <Text style={styles.delete}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};
export const styles = StyleSheet.create({
  notesContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    marginBottom: 70,
    opacity: 0.9,
  },

  heading: {
    fontSize: 30,
    fontWeight: '700',
    color: Style.color,
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: Style.color,
    marginTop: 5,
    marginBottom: 5,
  },
  item: {
    marginBottom: 20,
    padding: 15,
    color: 'black',
    fontWeight: '600',
    opacity: 0.8,
    shadowColor: Style.color,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderColor: Style.color,
    borderWidth: 2,
    borderRadius: 5,
    borderLeftWidth: 15,
  },

  index: {
    fontSize: 16,
    color: 'black',
    fontWeight: '800',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    backgroundColor: Style.color,
    width: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    height: 50,
  },
  buttonText: {
    fontWeight: '800',
    fontSize: 32,
    color: 'white',
  },
  scrollView: {
    marginBottom: 70,
  },
  note: {
    flexDirection: 'row',
    width: '75%',
  },
  text: {
    fontWeight: '700',
    fontSize: 17,
    color: 'black',
    alignItems: 'center',
  },
  delete: {
    color: Style.color,
    fontWeight: '700',
    fontSize: 15,
  },
  input: {
    height: 40,
    paddingHorizontal: 20,
    width: '65%',
    fontSize: 19,
    color: 'black',
    fontWeight: '600',
    opacity: 0.8,
    shadowColor: Style.color,
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderColor: Style.color,
    borderWidth: 2,
    borderRadius: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },

  searchButton: {
    backgroundColor: Style.color,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 40,
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
  emptyNoteContainer: {
    alignItems: 'center',
    marginTop: 240,
  },
  emptyNoteText: {
    color: Style.color,
    fontWeight: '600',
    fontSize: 15,
  },
  dateContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Notes;
