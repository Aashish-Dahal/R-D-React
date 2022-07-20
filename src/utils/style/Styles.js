import React from 'react';

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  inputCard: {
    marginTop: 15,
    flexDirection: 'row',
    backgroundColor: '#C7CDEC',
    width: '80%',
    height: 45,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
  },

  mainContainer: {
    marginTop: 70,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    marginTop: 40,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  gradientButton: {
    marginBottom: 20,
    marginTop: 40,
    borderRadius: 100,
    elevation: 5,
    width: 250,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'black',
    width: 250,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodySmall: {
    fontSize: 20,
    textAlign: 'center',

    color: 'white',
    marginBottom: 20,
  },
});
