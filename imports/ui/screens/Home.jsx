import React, { useState } from 'react';

import { 
  Box, 
  Button, 
  Collapsible, 
  Grommet,
  Heading,
  Layer,
  ResponsiveContext
} from 'grommet';

import { FormClose, Notification } from 'grommet-icons';

import MainBar from '/imports/ui/components/MainBar';
import { theme } from '/lib/globals';

const HomeScreen = (props) => {

  let { size, showSidebar } = props;

  return (
    <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
        <Box flex align='center' justify='center'>
        dashboard? characters?
        </Box>
        {(!showSidebar || size !== 'small') ? (
        <Collapsible direction='horizontal' open={showSidebar}>
            <Box
            flex
            width='medium'
            background='light-2'
            elevation='small'
            align='center'
            justify='center'
            >
            sidebar? menu?
            </Box>
        </Collapsible>
        ): (
        <Layer>
            <Box
            background='light-2'
            tag='header'
            justify='end'
            align='center'
            direction='row'
            >
                <Button icon={<FormClose />} onClick={() => props.onClick()} />
            </Box>
            <Box
            fill
            background='light-2'
            align='center'
            justify='center'
            >
            sidebar
            </Box>
        </Layer>
        )}
    </Box>
  );
}

export default HomeScreen;
