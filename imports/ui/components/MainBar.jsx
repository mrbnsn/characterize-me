import React, { useState } from 'react';

import {
  Button,
  Heading,
} from 'grommet';

import { Notification } from 'grommet-icons';

import AppBar from '/imports/ui/components/AppBar';

const MainBar = (props) => (
    <AppBar>
        <Heading level='3' margin='none'>Dungeons &amp; Dragons</Heading>
        <Button 
            icon={ <Notification /> } 
            onClick={ () => props.onClick() } 
        />
    </AppBar>
);

export default MainBar;