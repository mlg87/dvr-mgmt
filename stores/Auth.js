import { AsyncStorage } from 'react-native';
import { observable, action, computed } from 'mobx';

class Auth {
  @observable isLoggingIn = false;
  @obersvable user = {
    email: 'test@test.com',
    name: 'Test User',
    image_url: null,
  }

  @action login(email, password) {
    console.log(`LOGIN::: email - ${email} | password - ${password}`);
  }
};

export default new Auth();
