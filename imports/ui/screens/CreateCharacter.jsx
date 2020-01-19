import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';

import { Form, Grid, Segment, Label, Input, Select, Button } from 'semantic-ui-react';

const CreateCharacter = (props) => {

    let [ fullName, setFullName ] = useState("");
    let [ nickname, setNickname ] = useState("");
    let [ race, setRace ] = useState("");
    let [ characterClass, setCharacterClass ] = useState("");
    let [ background, setBackground ] = useState("");
    let [ races, setRaces ] = useState([]);
    let [ classes, setClasses ] = useState([]);
    let [ backgrounds, setBackgrounds ] = useState([]);

    console.log(races);
    console.log(classes);

    useEffect(() => {
        if( !races.length ){
            fetchRaces();
        }
        
        if( !classes.length ){
            fetchClasses();
        }

        if( !backgrounds.length ){
            fetchBackgrounds();
        }
        
      }, []);

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' padded>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Form size='large' onSubmit={handleSubmit}>
                    <Segment raised textAlign='left'>
                        <Label attached='top'>Full Name</Label>
                        <Input
                            fluid
                            placeholder='Full name'
                            name='fullName'
                            onChange={handleChange}
                            value={fullName}
                        />
                    </Segment>
                    <Segment raised textAlign='left'>
                        <Label attached='top'>Nickname</Label>
                        <Input
                            fluid
                            placeholder='Nickname'
                            name='nickname'
                            onChange={handleChange}
                            value={nickname}
                        />
                    </Segment>
                    <Segment raised textAlign='left'>
                        <Label attached='top'>Race</Label>
                        <Select
                            fluid
                            placeholder='Select your race' 
                            name='race'
                            onChange={handleChange}
                            options={races}
                        />
                    </Segment>
                    <Segment raised textAlign='left'>
                        <Label attached='top'>Class</Label>
                        <Select
                            fluid
                            placeholder='Select your class' 
                            name='characterClass'
                            onChange={handleChange}
                            options={classes}
                        />
                    </Segment>
                    <Segment raised textAlign='left'>
                        <Label attached='top'>Background</Label>
                        <Select
                            fluid
                            placeholder='Select your background' 
                            name='background'
                            onChange={handleChange}
                            options={backgrounds}
                        />
                    </Segment>
                    <Segment raised >
                        <Button color='red' fluid size='large'>
                            Create
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
            case "fullName":
                setFullName(value);
                break;
            case "nickname":
                setNickname(value);
                break;
            case "characterClass":
                setCharacterClass(value);
                break;
            case "race":
                setRace(value);
                break;
            case "background":
                setBackground(value);
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
        Meteor.call( 'createCharacter', { fullName, nickname, characterClass, race, background }, (err, res) => {
            if( !err ) {
                console.log(res);
            } else {
                console.log(err);
            }
        });

    }

    /**
     * Fetch races from dnd5e api and map results to
     * options array for select input. 
     * 
     */
    function fetchRaces()
    {
        Meteor.call( 'getRaces', (err, res) => {

            if( !err ) {
                const options = res.map( r => {
                    return {
                        key: r.index,
                        value: r.name,
                        text: r.name,
                        url: r.url,
                    }
                });
                
                setRaces(options);
                return res;

            } else {
                console.log(err);
                return err;
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
                const options = res.map( r => {
                    return {
                        key: r.index,
                        value: r.name,
                        text: r.name,
                        url: r.url,
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

    /**
     * Fetch backgrounds from open5e api and map results to
     * options array for select input. 
     * 
     */
    function fetchBackgrounds()
    {
        Meteor.call( 'getBackgrounds', (err, res) => {

            if( !err ) {
                const options = res.map( r => {
                    return {
                        key: r.slug,
                        value: r.name,
                        text: r.name,
                        url: r.url,
                    }
                });
                
                setBackgrounds(options);
                console.log(res);
                return res;

            } else {
                console.log(err);
                return err;
            }

        });
    }
}

export default CreateCharacter;
