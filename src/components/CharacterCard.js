import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = props => {
  const { name, image, species } = props;
  return (
    <div className="box__name">
      <div><img src={image} alt={`Foto de${name}`} /></div>
      <h2 className="title__name">{name}</h2>
      <h3 className="subtitle__name">{species}</h3>
    </div>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default CharacterCard;