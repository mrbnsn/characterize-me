import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import LoginScreen from '/imports/ui/screens/Login';
import HomeScreen from '/imports/ui/screens/Home';

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

  console.log(Meteor.user());
  console.log(Meteor.userId());

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        { size => (
          <Box fill>
            <MainBar onClick={() => setShowSidebar(!showSidebar)} />
            { Meteor.userId() ? (
              <HomeScreen size={size} showSidebar={showSidebar} onClick={() => setShowSidebar(!showSidebar)} />
             ) : (
              <LoginScreen size={size} showSidebar={showSidebar} onClick={() => setShowSidebar(!showSidebar)} /> 
             )}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
