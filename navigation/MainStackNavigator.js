import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Image } from 'react-native'

import Home from '../screens/Home'
import Menu from '../screens/Menu'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>
        <Stack.Screen 
            name='Home'
            component={Home}
            options={{  
                headerTitle: (props) => ( // App Logo
                  <Image
                    style={{ width: '100%', height: 50 }}
                    source={require('../assets/hitlogo.png')}
                    resizeMode='center'
                  />),
                        headerStyle: {backgroundColor: '#051940'},
                        headerTintColor: '#fff',
                        
                          
                      }}
            
        />


        <Stack.Screen
            name='Menu'
            component={Menu}
            options={{  title: 'hit - Menu',
                        headerStyle: {backgroundColor: '#051940'},
                        headerTintColor: '#fff'
                    }}
        />  
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default MainStackNavigator
