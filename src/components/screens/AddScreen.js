import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {styles} from '../../utils/style/Styles';
import InputField from '../customComponents/InputField';
import {useForm} from 'react-hook-form';
import GradientButton from '../customComponents/GradientButton';
import {addNote} from '../../utils/Firestore/firestore.util';
const AddScreen = () => {
  const [loading, setLoading] = useState(false);
  const {
    control,

    handleSubmit,
    formState: {errors},
  } = useForm();

  const addNewNote = data => {
   
    addNote(data, loading,setLoading);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <InputField
        width="90%"
        rules={{required: 'Title is required'}}
        name="title"
        control={control}
        placeholder="Title"></InputField>
      <InputField
        width="90%"
        rules={{required: 'Message is required'}}
        name="message"
        control={control}
        placeholder="Message"></InputField>
      <InputField
        width="90%"
        rules={{required: 'Date is required'}}
        name="date"
        control={control}
        placeholder="Date"></InputField>
      <GradientButton
        text={loading ? 'loading' : 'Add Note'}
        onPress={handleSubmit(addNewNote)}></GradientButton>
    </View>
  );
};
export default AddScreen;
