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

const App = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        { size => (
          <Box fill>
            <MainBar onClick={() => setShowSidebar(!showSidebar)} />
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align='center' justify='center'>
                app body
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
                    sidebar
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
                      <Button icon={<FormClose />} onClick={() => setShowSidebar(false)} />
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
          </Box>
        )}
      </ResponsiveContext.Consumer>~
    </Grommet>
  );
}

export default App;
