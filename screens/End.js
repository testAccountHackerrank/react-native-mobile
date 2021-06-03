import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class End extends Component {

    render() {
        return (
            <View>
                <Text>Game Over</Text>
                <Text>Player {this.props.player} won!</Text>
                <Button title="Restart Game" onPress={() => this.props.restart()} />
            </View>
        );
    }

}