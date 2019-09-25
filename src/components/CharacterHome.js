import React from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

const CharacterHome = props => {
  const { getQueryData, queryData, characters, gender, getFilter } = props;

  return (
    <React.Fragment>
      <Filters
        getQueryData={getQueryData}
        queryData={queryData}
        gender={gender}
        getFilter={getFilter}
      />

      <CharacterList
        characters={characters}
        queryData={queryData}
        gender={gender}
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