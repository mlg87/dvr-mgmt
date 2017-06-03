import { AsyncStorage } from 'react-native';
import { observable, action, computed } from 'mobx';

class Games {
  @observable games = [];

  @action pushGame(game) {
    console.log(`Game to add: ${game}`);
    this.games.push(game);
  }
};

export default new Games();
