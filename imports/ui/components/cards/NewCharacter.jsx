import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const NewCharacterCard = (props) => {
    return (
        <Card className="character-card new" onClick={props.handleClick}>
            <Card.Content className="flex flex-column align-center justify-center">
            <Card.Description>
                <Icon 
                    name="add" 
                    size="huge" 
                    color="teal"
                />
            </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default NewCharacterCard