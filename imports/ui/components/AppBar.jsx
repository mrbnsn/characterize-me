import React from 'react';

import { Image } from 'semantic-ui-react';
import Box from '/imports/ui/components/layout/Box';
import AppMenu from '/imports/ui/components/AppMenu';

const AppBar = (props) => (
    <Box className='app-bar flex-row align-center justify-between pad20'>
        <h3 className='app-bar-title'>Character Creator</h3>
        <AppMenu />
    </Box>
)

export default AppBar;