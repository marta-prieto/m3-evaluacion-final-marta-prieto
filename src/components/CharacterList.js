import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
  const { characters, queryData } = props;
  return (
    <ol className="main__list-characters">
      {characters
        .filter(filterChar => filterChar.name.toUpperCase().includes(queryData.toUpperCase()))
        .map(item => {
          return (
            <li className="list__characters" key={item.id}>
             <CharacterCard 
             name={item.name}
             image={item.image}
             species={item.species}
             />
            </li>
          );
        })}
    </ol>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  queryData: PropTypes.string.isRequired
};

export default CharacterList;