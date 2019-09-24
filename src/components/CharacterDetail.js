import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const CharacterDetail = props => {

  const {routerProps, characters} = props;
  const charId = parseInt(routerProps.match.params.id);
  const getMyCharacter = characters.find(item => item.id === charId) 
  return(
    <React.Fragment>
      <p>{characters.name}</p>

    </React.Fragment>
  )


}
 
CharacterDetail.propTypes = {
  routerProps: PropTypes.object.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CharacterDetail;
