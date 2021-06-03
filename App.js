import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import End from './screens/End';
import Game from './screens/Game';
import Start from './screens/Start';

export default class App extends Component {

    state = { screen: 'start', player: 1 };

    startGame() {
        this.setState({
            screen: 'game'
        });
    }

    playerWon(player) {
        this.setState({
            screen: 'end',
            player: player
        });
    }

    restartGame() {
        this.setState({
            screen: 'start'
        });
    }

    render() {
        if (this.state.screen == 'start') {
            return (
                <View style={styles.container}>
                    <Start start2PlayerGame={() => this.startGame()} />
                </View>
            );
        } else if (this.state.screen == 'game') {
            return (
                <View style={styles.container}>
                    <Game player1Won={() => this.playerWon(1)} player2Won={() => this.playerWon(2)} />
                </View>
            );
        } else if (this.state.screen == 'end') {
            return (
                <View style={styles.container}>
                    <End player={this.state.player} restart={() => this.restartGame()} />
                </View>
            );
        }       
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
});


