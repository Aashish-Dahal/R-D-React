import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import * as Style from '../constants/styles/Styles';
import {styles} from './Notes';
const DeleteNotes = ({...props}) => {
  function emptyBin() {
    Alert.alert(
      'Delete All',
      'Are You sure you want to permanently delete all notes',
      [
        {
          text: 'No',
          onPress: () => console.log('No'),
        },
        {
          text: 'yes',
          onPress: () => {
            let emptyArray = [...props.moveToBin];
            emptyArray = [];
            props.setMoveToBin(emptyArray);
          },
        },
      ],
    );
  }
  function undoAllNotes() {
    let deleteNotes = [...props.moveToBin];
    let notes = [...props.notes];
    deleteNotes.forEach((item, index) => {
      notes.push(item);
    });
    props.setMoveToBin([]);
    props.setNotes(deleteNotes);
  }
  function undoNote(index) {
    let getBack = props.moveToBin[index];
    let array = [getBack, ...props.notes];
    props.setNotes(array);
    let newArray = [...props.moveToBin];
    newArray.splice(index, 1);
    props.setMoveToBin(newArray);
  }
  function permanentlyDelete(index) {
    Alert.alert(
      'Delete All',
      'Are You sure you want to permanently delete this item',
      [
        {
          text: 'No',
          onPress: () => console.log('No'),
        },
        {
          text: 'yes',
          onPress: () => {
            let newArray = [...props.moveToBin];
            newArray.splice(index, 1);
            props.setMoveToBin(newArray);
          },
        },
      ],
    );
  }
  return (
    <ScrollView>
      <View style={[styles.notesContainer]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={style.emptyButton}
            onPress={() => undoAllNotes()}>
            <Text style={styles.emptyButtonText}>Undo All</Text>
          </TouchableOpacity>
          <Text style={{fontWeight: '700', fontSize: 18, color: Style.color}}>
            Total: {props.moveToBin.length}
          </Text>
          <TouchableOpacity
            style={style.emptyButton}
            onPress={() => emptyBin()}>
            <Text style={styles.emptyButtonText}>Empty</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider}></View>
        {props.moveToBin.length === 0 ? (
          <View style={styles.emptyNoteContainer}>
            <Text style={styles.emptyNoteText}>Nothing to show yet.....!</Text>
          </View>
        ) : (
          props.moveToBin.map((data, index) => (
            <View style={styles.item} key={index}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.note}>
                  <Text style={styles.index}>{index + 1}.</Text>
                  <Text style={styles.text}>{data}</Text>
                </View>
                <TouchableOpacity onPress={() => undoNote(index)}>
                  <Text style={styles.delete}>Undo</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dateContainer}>
                <Text style={{color: 'black'}}>Date:</Text>
                <TouchableOpacity onPress={() => permanentlyDelete(index)}>
                  <Text style={styles.delete}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  emptyButton: {
    backgroundColor: Style.color,
    width: '25%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    marginBottom: 5,
  },
  emptyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
export default DeleteNotes;
