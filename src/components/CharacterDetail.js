import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const CharacterDetail = props => {
  const { routerProps, characters } = props;
  const charId = parseInt(routerProps.match.params.charId);

 

CharacterDetail.propTypes = {
  routerProps: PropTypes.object.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CharacterDetail;

