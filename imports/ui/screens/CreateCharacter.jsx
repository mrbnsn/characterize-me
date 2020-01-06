import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link, useHistory } from "react-router-dom";

import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

const CreateCharacter = (props) => {

    let [ fullname, setFullname ] = useState("");
    let [ characterClass, setCharacterClass ] = useState("");
    let [ race, setRace ] = useState("");
    let [ backstory, setBackstory ] = useState("");

    let history = useHistory();

    console.log(Meteor.user());

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='red' textAlign='center'>
                    Create new character
                </Header>
                <Form size='large' onSubmit={handleSubmit}>
                    <Segment stacked>
                        <Form.Input 
                            fluid 
                            icon='address card' 
                            iconPosition='left' 
                            placeholder='Full name' 
                            name='fullname'
                            type='text'
                            onChange={handleChange}
                        />
                        <Form.Input
                            fluid
                            icon='edit'
                            iconPosition='left'
                            placeholder='Class'
                            name='characterClass'
                            type='text'
                            onChange={handleChange}
                        />
                        <Form.Input
                            fluid
                            icon='edit'
                            iconPosition='left'
                            placeholder='Race'
                            name='race'
                            type='text'
                            onChange={handleChange}
                        />
                        <Form.Input
                            fluid
                            icon='edit'
                            iconPosition='left'
                            placeholder='Backstory'
                            name='backstory'
                            type='textarea'
                            onChange={handleChange}
                        />
                        <Button color='red' fluid size='large'>
                            Create!
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
    function handleChange(e, { name, value }) 
    {
        switch( name ) {
            case "fullname":
                setFullname(value);
                break;
            case "characterClass":
                setCharacterClass(value);
                break;
            case "race":
                setRace(value);
                break;
            case "backstory":
                setBackstory(value);
                break;
                
            default:
                break;
        }
    }

    /**
     * Log in with provided credentials.
     * 
     */
    function handleSubmit() 
    {
        Meteor.call( 'createCharacter', { fullname, characterClass, race, backstory }, (err, res) => {
            if( !err ) {
                console.log(res);
            } else {
                console.log(err);
            }
        });

    }
}

export default CreateCharacter;
