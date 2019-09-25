import React from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

const CharacterHome = props => {
  const { getQueryData, queryData, characters, type, getType } = props;

  return (
    <React.Fragment>
      <Filters
        getQueryData={getQueryData}
        queryData={queryData}
        getType={getType}
        type={type}
      />

      <CharacterList
        characters={characters}
        queryData={queryData}
         type= {type}
      />
    </React.Fragment>
  );
};

CharacterHome.propTypes = {
  getQueryData: PropTypes.func.isRequired,
  getType: PropTypes.func.isRequired,
  queryData: PropTypes.string.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired
};

export default CharacterHome;