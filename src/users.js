import React, { Component } from "react";
import {View, Text, Button} from 'react-native'

class UserScreen extends Component {
    // static – will kick in before anything else kicks in

    render() {
        const userId = this.props.navigation.getParam('userId','N/A');
        const userName = this.props.navigation.getParam("userName");
        const userLastName = this.props.navigation.getParam("userLastName")
            
        return (
        <View
            style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white"
            }}
        >
            <Text>I am the users screen</Text>
            <Text>User id: {userId}</Text>
            <Text>Name: {userName}</Text>
            <Text>Lastname: {userLastName}</Text>
            <Button
                title="open sidedrawer"
                onPress={() => this.props.navigation.openDrawer()}
            />
            <Button
            title="Go to home"
            onPress={() => this.props.navigation.navigate("Home", {
                message: 'Hello guys'
            })}
            />
            <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
            />
        </View>
        );
    }
}

export default UserScreen;
