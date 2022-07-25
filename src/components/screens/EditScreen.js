import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {styles} from '../../utils/style/Styles';
import InputField from '../customComponents/InputField';
import {useForm} from 'react-hook-form';
import GradientButton from '../customComponents/GradientButton';
import firestore from '@react-native-firebase/firestore';
import {editNote} from '../../utils/Firestore/firestore.util';
const EditScreen = ({route}) => {
  const id = route.params.id;
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const updateNote = data => {
    editNote(data, id, loading, setLoading);
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
        text={loading ? 'loading' : 'Edit Note'}
        onPress={handleSubmit(updateNote)}></GradientButton>
    </View>
  );
};
export default EditScreen;
