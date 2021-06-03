import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Game extends Component {

    state = { player: 1, sum: 0 };

    changeSum(value) {
        const sum = this.state.sum + value;

        if (sum < 21) {
            this.setState({
                sum: sum,
                player: this.state.player == 1 ? 2 : 1
            });
        } else if (sum == 21 && this.state.player == 1) {
            this.props.player1Won();
        } else if (sum == 21 && this.state.player == 2) {
            this.props.player2Won();
        } else if (sum > 21 && this.state.player == 1) {
            this.props.player2Won();
        } else {
            this.props.player1Won();
        }
    }

    render() {
        return (
            <View>
                <Text>Player { this.state.player }</Text>
                <Text>{ this.state.sum }</Text>
                <View>
                    <Button onPress={() => this.changeSum(1)} title="1" />
                    <Button onPress={() => this.changeSum(2)} title="2" />
                    <Button onPress={() => this.changeSum(3)} title="3" />
                </View>
            </View>
        );
    }
}
