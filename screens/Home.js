import React,  { Component } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'


function Home(props) {
  const { navigation } = props
  
  var sumas = ['0','0','0','0','0','0','0','0','0','0','0'];

  return (
    <View style={styles.container}>
        <View style={styles.item1}>
            <Text style ={styles.text}>10 x </Text>
            <Text style ={styles.text}>  9 x</Text>
            <Text style ={styles.text}>  8 x</Text>
            <Text style ={styles.text}>  7 x</Text>
            <Text style ={styles.text}>  6 x</Text>
        </View>
        <View style={styles.item2}>
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                //onChangeText={numero => setState({x10:numero})}
                defaultValue={sumas[10]}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={sumas[9]}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={sumas[8]}
                 
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={sumas[7]}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={sumas[6]}
            />
        </View>
        <View style={styles.item1}>
            <Text style ={styles.text}>  5 x</Text>
            <Text style ={styles.text}>  4 x</Text>
            <Text style ={styles.text}>  3 x</Text>
            <Text style ={styles.text}>  2 x</Text>
            <Text style ={styles.text}>  1 x</Text>
        </View>
        <View style={styles.item2}>
        <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={sumas[5]}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={sumas[4]}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={sumas[3]}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={sumas[2]}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={sumas[1]}
            />
        </View>
        <Text style = {styles.text} >
            Total = {parseInt(sumas[1]) + parseInt(sumas[2]) * 2 + parseInt(sumas[3]) * 3 + parseInt(sumas[4]) * 4 + 
                parseInt(sumas[5]) * 5 + parseInt(sumas[6]) * 6 + parseInt(sumas[7]) * 7 + 
                parseInt(sumas[8]) * 8 + parseInt(sumas[9]) * 9 + parseInt(sumas[10]) * 10}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#0d3580'
  },
  item1: {
    marginTop: '10%',
    paddingLeft: '10%',
    width: '25%'
  },
  item2: {
    marginTop: '10%',
    // paddingLeft: '10%',
    width: '25%'
  },
  text: {
    color: '#fff',
    fontSize: 26,
    marginTop: 20
  },
  textinput:{
    width:50, 
    height: 40, 
    borderColor: '#1c6aff', 
    borderWidth: 1,
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 16
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

export default Home