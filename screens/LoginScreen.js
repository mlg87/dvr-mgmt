import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';

import styles from '../styles/login';

export default class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit() {
    // TODO add user authentication
    this.props.navigation.navigate('rootNavigation')
  }

  render() {
    const { email, password } = this.state;

    return (
      <Container style={ StyleSheet.flatten(styles.container) }>
        <Content>
          <Form>
            <Item
              floatingLabel
              style={ StyleSheet.flatten(styles.inputGroup) }
            >
              <Label>email</Label>
              <Input
                autoCapitalize={ 'none' }
                onChangeText={ email => this.setState({ email })}
                value={ email }
              />
            </Item>
            <Item
              floatingLabel
              style={ StyleSheet.flatten(styles.inputGroup) }
            >
              <Label>password</Label>
              <Input
                autoCapitalize={ 'none' }
                secureTextEntry
                onChangeText={ password => this.setState({ password }) }
                value={ password }
              />
            </Item>
          </Form>
          <Button
            block
            onPress={ () => this.handleSubmit() }
            style={ StyleSheet.flatten(styles.button) }
            >
              <Text>submit</Text>
            </Button>
        </Content>
      </Container>
    )
  }
};
