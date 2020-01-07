import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import Box from '/imports/ui/components/layout/Box';

const CharacterCard = (props) => {
    const char = props.character;
    return (
        <Box className="pad20">
          <Card className='character-card' onClick={() => {}}>
            <Image src='https://via.placeholder.com/150' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{char.fullname}</Card.Header>
                <Card.Meta>
                    <span className='date'>{char.characterClass}</span>
                </Card.Meta>
                <Card.Description>
                    {char.backstory}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                {char.race}
            </Card.Content>
          </Card>
        </Box>
    );
};

export default CharacterCard