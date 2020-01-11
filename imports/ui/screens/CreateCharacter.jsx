import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link, useHistory } from "react-router-dom";

import { Button, Form, Grid, Header, Message, Segment, Select } from 'semantic-ui-react';

const CreateCharacter = (props) => {

    let [ fullname, setFullname ] = useState("");
    let [ characterClass, setCharacterClass ] = useState("");
    let [ race, setRace ] = useState("");
    let [ backstory, setBackstory ] = useState("");
    let [ classes, setClasses ] = useState([]);

    let history = useHistory();

    useEffect(() => {
        fetchClasses();
      }, []);

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Form size='large' onSubmit={handleSubmit}>
                    <Segment>
                        <Select
                            // TODO: look into other component attribute options here
                            fluid
                            placeholder='Select your class' 
                            name='characterClass'
                            onChange={handleChange}
                            options={classes}
                        />
                        {/* <Button color='red' fluid size='large'>
                            Create
                        </Button> */}
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
        console.log(name);
        console.log(value);

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

    /**
     * Fetch classes from dnd5e api and map results to
     * options array for select input. 
     * 
     */
    function fetchClasses()
    {
        Meteor.call( 'getClasses', (err, res) => {

            if( !err ) {
                const options = res.map( cl => {
                    return {
                        key: cl.index,
                        value: cl.name,
                        text: cl.name,
                        url: cl.url,
                    }
                });
                
                setClasses(options);
                return res;

            } else {
                console.log(err);
                return err;
            }

        });
    }
}

export default CreateCharacter;
