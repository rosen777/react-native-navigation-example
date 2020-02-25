import React from 'react'
import { 
          createAppContainer, 
          createDrawerNavigator, 
          createBottomTabNavigator,
          createStackNavigator
         } from "react-navigation"
import {Image} from 'react-native'
import HomeScreen from './src/home'
import UserScreen from './src/users'
import SettingsScreen from './src/settings'

import LogoTitle from './src/logo'
import SideMenu from "./src/sidedrawer"

import Icon from './src/images/animal-track.png'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Users: UserScreen
})

const OtherStack = createStackNavigator({
  Settings: SettingsScreen,
  Users: UserScreen
})

// const AppNavigator = createBottomTabNavigator({
//   Home: HomeStack,
//   Settings: OtherStack
// })

const AppNavigator = createDrawerNavigator({
  Home: HomeStack,
  Settings: OtherStack
})


// const AppNavigator = createBottomTabNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions:({navigation}) =>({
//     tabBarIcon: ({ focused, horizontal, tintColor }) => {
//       const { routeName } = navigation.state

//       return(<Image
//         source={Icon}
//         style={{ width: 30, height: 30 }}
//       />)
//     },
//   })
// },
//   Users: UserScreen
// }, {
//     initialRouteName: 'Home',
//     order: ['Users', 'Home'],
//     tabBarOptions: {
//       // activeTintColor: 'red',
//       // activeBackgroundColor: 'blue',
//       // inactiveTintColor: 'grey',
//       // inactiveBackgroundColor: 'grey',
//       showLabel: true,
//       style: {
//         backgroundColor: 'green'
//       },
//       labelStyle: {
//         fontSize: 20
//       }
//     },
//     defaultNavigationOptions: () => ({
//       // tabBarIcon: ({focused, horizontal, tintColor}) => {
//       //   const {routeName} = navigation.state
//       //   if(routeName === 'Users') {
//       //     console.warn('Users icon')
//       //   } else {
//       //     console.warn('Home icon')
//       //   }
//       //   return <Image 
//       //     source={Icon}
//       //     style={{width: 30, height: 30}}
//       //   />
//       // },
//       tabBarOnPress: ({ navigation, defaultHandler })=>{
//         if(navigation.state.key === 'Users') {
//           // alert('Hello')
//           navigation.navigate('Home')
//         } else {
//           defaultHandler()
//         }
//       }
//     })
// })

// // const AppNavigator = createDrawerNavigator({
// //   Home: {
// //     screen: HomeScreen,
// //     // navigationOptions: ({navigation}) => ({
// //     //   drawerLabel: 'Super awesome'
// //     // })
// //   },
// //   Users: UserScreen
// // },{
// //   contentComponent: SideMenu,
// //   drawerWidth: 200,
// //   drawerPosition: 'right',
// //   drawerBackgroundColor: '#fff',
// //   drawerType: 'front',
// //   contentOptions: {
// //     activeBackgroundColor: 'blue'
// //   },
// //   navSectionStyle:{
// //     backgroundColor: '#2e2e2e'
// //   },
// //   navItemStyle: {
// //     padding: 10,
// //     color: '#fff'
// //   }
// // })

// // const AppNavigator = createStackNavigator(
// //   {
// //     Home: {
// //       screen: HomeScreen,
// //       navigationOptions: {
// //         title: 'Home',
// //         headerTitle: LogoTitle
// //       }
// //     },
// //     Users: {
// //       screen: UserScreen,
// //     }
// //   },
// //   {
// //     initialRouteName: "Home",
// //     defaultNavigationOptions: {
// //       headerStyle: {
// //         backgroundColor: "green"
// //       },
// //       headerTintColor: "#fff",
// //       headerTitleStyle: {
// //         fontWeight: "bold",
// //         flex: 1,
// //         textAlign: "center"
// //       }
// //     },
// //     mode: 'card',
// //   }
// // )

export default createAppContainer(AppNavigator);