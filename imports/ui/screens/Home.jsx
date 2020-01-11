import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';

import { useHistory } from "react-router-dom";

import Box from '/imports/ui/components/layout/Box';
import CharacterCard from '/imports/ui/components/cards/CharacterCard';
import NewCharacterCard from '/imports/ui/components/cards/NewCharacter';

const Home = (props) => {

  let [ characters, setCharacters ] = useState([]);
  let history = useHistory();

  useEffect(() => {
    fetchUserCharacters();
  }, []);

  return (
      <Box>
        {renderCharacters()}
      </Box>
  );

  function renderCharacters()
  {
    let cards = characters.map( (char, idx) => {
      return (
        <CharacterCard key={idx} character={char} />
      );
    });

    cards.push(<NewCharacterCard key='create-new-card' handleClick={handleCreateCharacter}/>);

    return cards;
    
  }

  function fetchUserCharacters()
  {
    Meteor.call( 'fetchUserCharacters', (err, res) => {

      if( !err ) {
        
        console.log(res);
        if( res.success ){
          setCharacters(res.characters);
        }
        
        return res;

      } else {
        console.log(err);
        return err;
      }

    });
  }

  function handleCreateCharacter() 
  {
    history.push("/create-character");
  }
}

export default Home;
