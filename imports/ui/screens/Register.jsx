import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Link, useHistory } from "react-router-dom";

import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

import { client } from '/client/main';

const Register = (props) => {

  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  let history = useHistory();

  console.log(Meteor.user());
  console.log(client);
  console.log(history);

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='red' textAlign='center'>
          Create your account
        </Header>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input 
              fluid 
              icon='address card' 
              iconPosition='left' 
              placeholder='First name' 
              name='firstName'
              type='text'
              onChange={handleChange}
            />
            <Form.Input 
              fluid 
              icon='address card' 
              iconPosition='left' 
              placeholder='Last name' 
              name='lastName'
              type='text'
              onChange={handleChange}
            />
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
              Register
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );

  /**
   * Update input value as it changes.
   * 
   * @param {object} e 
   * @param {object} params 
   */
  function handleChange(e, { name, value }) {
    switch( name ) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
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
   * Create account with provided user data.
   * 
   */
  function handleSubmit() {

    const profile = {
      firstName,
      lastName,
    }

    Accounts.createUser({ email, password, profile }, error => {
      if( !error ) {
        console.log('Account created!');
        history.push("/");
      } else {
        console.log(error);
      }
    });


  }
}

export default Register;
