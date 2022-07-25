import React from 'react';

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  icon: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 5,
  },
  inputCard: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#C7CDEC',
    width: '80%',
    height: 45,
    marginBottom: 0,

    borderWidth: 1,
    borderRadius: 8,
  },

  mainContainer: {
    marginTop: 70,

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  heading: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 5,
  },
  gradientButton: {
    marginBottom: 20,
    marginTop: 20,
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
  subHeading: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginBottom: 30,
  },
  checkBoxTile: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  trailing: {
    marginTop: 18,
    color: 'white',
    fontSize: 14,
    marginLeft: 50,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,

    color: 'white',
  },
  subText: {
    marginLeft: 2,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  checkBoxContainer: {
    marginVertical: 0,

    marginTop: 5,
    marginHorizontal: 0,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  floatingButton: {
    width: 60,
    bottom: 0,
    right: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    display: 'flex',
    height: 60,
    marginRight: 15,
    marginBottom: 15,
    elevation: 8,
    position: 'absolute',
    backgroundColor: 'blue',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 10,

    borderRadius: 10,
    backgroundColor: '#C7CDEC',

    borderColor: 'white',
    borderWidth: 1,
  },
});
