import React from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

const CharacterHome = props => {
  const { getQueryData, queryData, characters } = props;

  return (
    <React.Fragment>
      <Filters
        getQueryData={getQueryData}
        queryData={queryData}
      />

      <CharacterList
        pokemones={characters}
        queryData={queryData}
      />
    </React.Fragment>
  );
};

CharacterHome.propTypes = {
  getQueryData: PropTypes.func.isRequired,
  queryData: PropTypes.string.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CharacterHome;