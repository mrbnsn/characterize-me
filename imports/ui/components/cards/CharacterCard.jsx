import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import Box from '/imports/ui/components/layout/Box';

const CharacterCard = (props) => {
    const char = props.character;
    return (
        <Box className="pad20">
          <Card className='character-card' onClick={() => {}}>
            <Image src='https://via.placeholder.com/250' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{char.fullname}</Card.Header>
                <Card.Description>{char.domain}</Card.Description>
            </Card.Content>
            {renderAttributes()}
          </Card>
        </Box>
    );

    function renderAttributes() {
        let attributes = char.attributes || [];
        return attributes.map( (att, idx) => {
            return (
                <Card.Content key={idx}>
                    <Card.Header>{att.title}</Card.Header>
                    <Card.Meta>{att.description}</Card.Meta>
                </Card.Content>
            );
        });
    }
};

export default CharacterCard