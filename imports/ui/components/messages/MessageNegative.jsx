import React from 'react';
import { Message } from 'semantic-ui-react';

const MessageNegative = (props) => (
    <Message negative {...props}>
        <Message.Header>{props.title}</Message.Header>
        {props.children}
    </Message>
);

export default MessageNegative;