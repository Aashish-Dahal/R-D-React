import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import * as Style from '../constants/styles/Styles';
import {styles} from './AddNote';
const EditNote = ({route, navigation, ...props}) => {
  const {i, n} = route.params;
  const [newEdit, setNewEdit] = useState(n);
  function editNote() {
    let edited = [...props.notes];
    edited[i] = newEdit;
    props.setNotes(edited);
    navigation.navigate('Notes');
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{padding: 20, justifyContent: 'space-around'}}>
            <TextInput
              placeholder="Type Here..."
              placeholderTextColor={Style.color}
              style={[styles.input]}
              value={newEdit.toString()}
              onChangeText={text => setNewEdit(text)}
            />
            <TouchableOpacity style={styles.button} onPress={() => editNote()}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
export default EditNote;
