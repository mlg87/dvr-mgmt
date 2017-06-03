import React, { Component } from 'react';
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

export default class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit() {
    console.log('i want to submit!');
  }

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>email</Label>
              <Input
                onChangeText={ email => this.setState({ email })}
                value={ email }
              />
            </Item>
            <Item floatingLabel>
              <Label>password</Label>
              <Input
                secureTextEntry
                onChangeText={ password => this.setState({ password }) }
                value={ password }
              />
            </Item>
            <Button
              block
              onPress={ () => this.handleSubmit() }
            >
              <Text>submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
};
