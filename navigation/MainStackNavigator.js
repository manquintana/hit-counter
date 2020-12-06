import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

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
            options={{  title: 'HIT',
                        headerStyle: {backgroundColor: '#051940'},
                        headerTintColor: '#fff'
                    }}
            
        />
        <Stack.Screen
            name='Menu'
            component={Menu}
            options={{  title: 'Menu',
                        headerStyle: {backgroundColor: '#051940'},
                        headerTintColor: '#fff'
                    }}
        />  
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default MainStackNavigator
