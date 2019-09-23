import React from 'react';
import PropTypes from 'prop-types';

const CharacterList = props => {
  const { characters, queryData } = props;
  return (
  <ol className="main__list-characters">
    {characters
      .filter(filterChar => filterChar.name.toUpperCase().includes(queryData.toUpperCase()))
      .map(item => {
        return (
          <li className="list__characters" key={item.id}>
            <div className="box__name">
              <div><img src={item.image} alt={item.name} /></div>
              <h2 className="title__name">{item.name}</h2>
              <h3 className="">{item.species}</h3>
            </div>
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