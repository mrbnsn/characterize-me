import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import Box from '/imports/ui/components/layout/Box';

const NewCharacterCard = (props) => {
    return (
        <Box className="pad20">
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
        </Box>
    );
};

export default NewCharacterCard