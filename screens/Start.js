import React, { Component } from "react";
import { Button, View } from "react-native";

export default class Start extends Component {

    render() {
        return (
            <View>
                <Button onPress={() => this.props.start2PlayerGame()} title="Single Player" />
                <Button onPress={() => this.props.start2PlayerGame()} title="Double Player" />
            </View>
        );
    }
    
}

