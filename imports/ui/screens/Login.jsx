import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Link, useHistory } from "react-router-dom";

import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import MessageNegative from '/imports/ui/components/messages/MessageNegative';

import { client } from '/client/main';

const Login = (props) => {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ errorCode, setErrorCode ] = useState();
  const [ errorMessage, setErrorMessage ] = useState("");

  let history = useHistory();

  console.log(Meteor.user());
  console.log(client);

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='red' textAlign='center'>
          Sign in to your account
        </Header>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment>
            <Form.Input 
              fluid 
              icon='envelope' 
              iconPosition='left' 
              placeholder='E-mail address' 
              name='email'
              type='email'
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              name='password'
              type='password'
              onChange={handleChange}
            />
            <Button color='red' fluid size='large'>
              Sign In
            </Button>
          </Segment>
        </Form>
        <Message>
          New user? <Link to="/register">Register Now</Link>
        </Message>
        {showLoginMessage()}
      </Grid.Column>
    </Grid>
  );

  function showLoginMessage() {
    if( errorCode ) {
      return (
        <MessageNegative className="text-left" title="Login Failed">
          <p>{errorMessage}</p>
        </MessageNegative>
      )
    }
  }

  /**
   * Update input value as it changes.
   * 
   * @param {object} e 
   * @param {object} params 
   */
  function handleChange(e, { name, value }) {
    switch( name ) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  }

  /**
   * Log in with provided credentials.
   * 
   */
  function handleSubmit() {

    Meteor.loginWithPassword(email, password, (err, res) => {
      if( !err ) {
        setErrorCode(null);
        history.push("/");
      } else {
        setErrorCode(err.error);
        setErrorMessage(err.reason);
        console.log(err);
      }
    });

  }
}

export default Login;
