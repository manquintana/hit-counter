import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity, Image, Linking} from 'react-native'
import { Ionicons } from '@expo/vector-icons';



export default class Home extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      punto1: 0,
      punto2: 0,
      punto3: 0,
      punto4: 0,
      punto5: 0,
      punto6: 0,
      punto7: 0,
      punto8: 0,
      punto9: 0,
      punto10: 0,
      suma: 0
    };
  }

  updateSuma = () => {
    this.setState({ suma: this.state.punto1 + this.state.punto2 * 2 + this.state.punto3 * 3 +
                      this.state.punto4 * 4 + this.state.punto5 * 5 + this.state.punto6 * 6 +
                      this.state.punto7 * 7 + this.state.punto8 * 8 + this.state.punto9 * 9 + this.state.punto10 * 10
    })
    console.log('Suma:' + this.state.suma )
  }
 
 
  resetAllOk = () => {
    console.log('All is being deleted')
    this.setState({
      punto1: 0,
      punto2: 0,
      punto3: 0,
      punto4: 0,
      punto5: 0,
      punto6: 0,
      punto7: 0,
      punto8: 0,
      punto9: 0,
      punto10: 0,
      suma: 0 })
    console.log('Suma:' + this.state.suma )
  }
  resetAll = () => {
    Alert.alert(
      'Reset values?',
      'All progress will be deleted',      
      [
        {text: 'Yes, i want to reset', onPress: () => this.resetAllOk()},
        {text: 'Cancel'},
      ],
      { cancelable: false }
    )
  }
  updatePoint1 = (point1) => {
    console.log('Updated:'+ point1)
    if(isNaN(point1)){
      this.setState({ punto1: 0 })
    }
    else{
      this.setState({ punto1: parseInt(point1) })
    }
  }
  updatePoint2 = (point2) => {
    console.log('Updated:'+ point2)
    if(isNaN(point2)){
      this.setState({ punto2: 0 })
    }
    else{
      this.setState({ punto2: parseInt(point2) })
    }
  }
  updatePoint3 = (point3) => {
    console.log('Updated:'+ point3)
    if(isNaN(point3)){
      this.setState({ punto3: 0 })
    }
    else{
      this.setState({ punto3: parseInt(point3) })
    }
  }
  updatePoint4 = (point4) => {
    console.log('Updated:'+ point4)
    if(isNaN(point4)){
      this.setState({ punto4: 0 })
    }
    else{
      this.setState({ punto4: parseInt(point4) })
    }
  }
  updatePoint5 = (point5) => {
    console.log('Updated:'+ point5)
    if(isNaN(point5)){
      this.setState({ punto5: 0 })
    }
    else{
      this.setState({ punto5: parseInt(point5) })
    }
  }
  updatePoint6 = (point6) => {
    console.log('Updated:'+ point6)
    if(isNaN(point6)){
      this.setState({ punto6: 0 })
    }
    else{
      this.setState({ punto6: parseInt(point6) })
    }
  }
  updatePoint7 = (point7) => {
    console.log('Updated:'+ point7)
    if(isNaN(point7)){
      this.setState({ punto7: 0 })
    }
    else{
      this.setState({ punto7: parseInt(point7) })
    }
  }
  updatePoint8 = (point8) => {
    console.log('Updated:'+ point8)
    if(isNaN(point8)){
      this.setState({ punto8: 0 })
    }
    else{
      this.setState({ punto8: parseInt(point8) })
    }
  }
  updatePoint9 = (point9) => {
    console.log('Updated:'+ point9)
    if(isNaN(point9)){
      this.setState({ punto9: 0 })
    }
    else{
      this.setState({ punto9: parseInt(point9) })
    }
  }
  updatePoint10 = (point10) => {
    console.log('Updated:'+ point10)
    if(isNaN(point10)){
      this.setState({ punto10: 0 })
    }
    else{
      this.setState({ punto10: parseInt(point10) })
    }
  }
 

  render() {
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
                onChangeText={numero => this.updatePoint10(parseInt(numero))}
                //gotFocus = {}
                //value = {this.state.punto10.toString()}
            >
              
            </TextInput>
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                onChangeText={numero => this.updatePoint9(parseInt(numero))}
                
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                onChangeText={numero => this.updatePoint8(parseInt(numero))}
                 
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                onChangeText={numero => this.updatePoint7(parseInt(numero))}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                onChangeText={numero => this.updatePoint6(parseInt(numero))}
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
                onChangeText={numero => this.updatePoint5(parseInt(numero))}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                onChangeText={numero => this.updatePoint4(parseInt(numero))}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                onChangeText={numero => this.updatePoint3(parseInt(numero))}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                onChangeText={numero => this.updatePoint2(parseInt(numero))}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                onChangeText={numero => this.updatePoint1(parseInt(numero))}
            />
        </View>
        <View style= {styles.buttonsView}>
          <View style={styles.button1}>
            <TouchableOpacity
                style = {styles.buttonImage}
                onPress={() => this.updateSuma()}>
                <Ionicons name="md-calculator" size={40} color="white"/> 
            </TouchableOpacity>
          </View>
          <View style={styles.button2}>
            <TouchableOpacity
                  style = {styles.buttonImage}
                  onPress={() => this.resetAll()}>
                  
                  <Ionicons name="md-refresh" size={40} color="white"/> 
            </TouchableOpacity>
          </View>
          
        </View>
        
  
        
        <View style = {styles.viewCenter}>
          <Text style = {styles.cleanText} >  
              Total: {this.state.suma.toString()}
          </Text>
        </View>
        <View style= {styles.linkWeb}>
          <TouchableOpacity 
            style = {styles.imageLink}
            onPress={visitarWeb}>
              
              <Image
              resizeMode="contain"
              source={require('../assets/weblink.png')}
              />
          </TouchableOpacity>
        </View>
    </View>

    )
  }
}

function visitarWeb() {
  Linking.openURL('https://mguntech.com');
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
    marginTop: '2%',
    paddingLeft: '10%',
    width: '25%'
  },
  item2: {
    marginTop: '2%',
    // paddingLeft: '10%',
    width: '25%'
  },
  text: {
    color: '#fff',
    fontSize: 26,
    marginTop: 20
  },
  cleanText: {
    color: '#fff',
    fontSize: 30,
    marginTop: 0
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
  },

  buttonsView:{
    width:'100%',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop:'8%',
    marginBottom:'5%'
    
  },
  button1: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:60,
    height:60,
    backgroundColor:'#051940',
    borderRadius:50,
    marginRight:'5%'
  },
  button2: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:60,
    height:60,
    backgroundColor:'#051940',
    borderRadius:50,
  },

  viewCenter:{
    width: '100%',
    height:'auto',
    marginTop: 0,
    //backgroundColor: '#444',
    alignItems: 'center'
  },
  linkWeb:{
    width: '100%',
    height:'auto',
    //position: 'absolute',
    bottom:0,
    marginTop:'10%',
    alignItems:'center',
  }

})

//export default Home