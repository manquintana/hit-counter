import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Linking, BackHandler} from 'react-native'

function Menu(props) {
  
  const { navigation } = props
  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Return </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={ ()=>{ Linking.openURL('http://mguntech.com')}}>
        <Text style={styles.buttonText}>Visit MGUNTECH.COM</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => exitApp(navigation)}>
        <Text style={styles.buttonText}>Exit App</Text>
      </TouchableOpacity>
    </View>
  )
}

function exitApp(navigation){
  navigation.navigate('Home')
  BackHandler.exitApp()
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0d3580'
    },
    text: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold'
    },
    buttonContainer: {
      backgroundColor: '#1c6aff',
      borderRadius: 35,
      padding: 10,
      margin: 20,
      width: '70%'
    },
    buttonText: {
      fontSize: 20,
      color: '#fff',
      alignSelf: 'center'

    }
  })

export default Menu
