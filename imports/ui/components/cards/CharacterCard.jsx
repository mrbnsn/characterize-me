import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import Box from '/imports/ui/components/layout/Box';

const CharacterCard = (props) => {
    const char = props.character;
    console.log(char);
    return (
        <Box className="pad20">
          <Card className='character-card' onClick={() => {}}>
            <Card.Content>
                <Card.Header>{char.fullName}</Card.Header>
                <Card.Meta>{char.nickname}</Card.Meta>
                <Card.Meta>{char.race}</Card.Meta>
                <Card.Meta>{char.characterClass}</Card.Meta>
                <Card.Meta>{char.background}</Card.Meta>
            </Card.Content>
          </Card>
        </Box>
    );
};

export default CharacterCard