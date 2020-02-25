import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import Logo from "./images/animal-track.png";

class SettingsScreen extends Component {
    render() {
        return (
            <View>
                <Text>I am the settings screen</Text>
                <Button
                    title="Go to Users"
                    onPress={() => this.props.navigation.navigate('Users' ,{
                        uerId: 12,
                        userName: 'Francis',
                        userLastName: 'Jones'
                    })}
                />
            </View>
        )
    }
}

export default SettingsScreen