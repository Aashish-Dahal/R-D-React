/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notes from './src/components/Notes';
import AddNote from './src/components/AddNote';
import DeleteNotes from './src/components/DeleteNotes';

const Stack = createNativeStackNavigator();

const App = () => {
  const [note, setNote] = useState();
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState(new Date().toUTCString());
  const [moveToBin, setMoveToBin] = useState([]);
  function handleNote() {
    let newNote = note;
    let newNotes = [newNote, ...notes];
    setNotes(newNotes);
    setNote('');
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notes">
          {props => (
            <Notes
              {...props}
              moveToBin={moveToBin}
              setMoveToBin={setMoveToBin}
              notes={notes}
              setNotes={setNotes}
              note={note}
              setNote={setNote}
              date={date}
              setDate={setDate}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddNote">
          {props => (
            <AddNote
              {...props}
              note={note}
              setNote={setNote}
              handleNote={handleNote}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="DeleteNotes">
          {props => (
            <DeleteNotes
              {...props}
              moveToBin={moveToBin}
              setMoveToBin={setMoveToBin}
              notes={notes}
              setNotes={setNotes}
              date={date}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
