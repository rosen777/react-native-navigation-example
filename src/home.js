import React, {Component} from 'react'
import {View, Text, Button, Image} from 'react-native'
import Logo from "./images/animal-track.png"

class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: () => (
            <Image
                source={Logo}
                style={{width: 30, height: 30}}
             />
        )
    }
//   static navigationOptions = ({navigation}) => {
//     return {
//         headerLeft: (
//             <Button 
//                 title="B"
//                 onPress={() => navigation.navigate('Users')}
//             />
//         ),
//         headerRight: (
//             <Button
//                 title="R"
//                 onPress={() => navigation.navigate('Users')}
//             />
//         )
//     }
//   }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white"
        }}
      >
        <Text>Homescreen</Text>
        <Button
            title="open sidedrawer"
            onPress={() => this.props.navigation.openDrawer()}
        />
        <Button
          title="Go to users"
          onPress={() =>
            this.props.navigation.navigate("Users", {
              userId: 12,
              userName: "Francis",
              userLastName: "Jones"
            })
          }
        ></Button>
      </View>
    );
  }
}

export default HomeScreen