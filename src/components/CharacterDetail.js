import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const CharacterDetail = props => {

  const {routerProps, characters} = props;
  const charId = parseInt(routerProps.match.params.charId);

  if (charId > characters.length) {
    return (
      <div>
      <p>No está tu personaje</p>
      <Link to="/" className="return__app">VOLVER AL LISTADO</Link>
      </div>
    );
}

  const getMyCharacter = characters.filter(item => item.id === charId);
  if (getMyCharacter[0]){
  const {name, image, species, origin, episode, status} = getMyCharacter[0];
  return(
    <React.Fragment>
      <div className="detail__card">
        <h2 className="detail__name">Name: {name}</h2>
        <div className="detail__image"> 
          <img src={image} alt={name}/>
        </div>
        <p className="detail__species">Specie: {species}</p>
        <p className="detail__episode">Number of Episodes: {episode.length}</p>
        <p className="detail__origin">Origin: {origin.name}</p>
        <p className="detail__status">Status: {status}</p>
      </div>
      <Link to="/" className="return__app">VOLVER</Link>
    </React.Fragment>
  )
  }else{
    return (
      <React.Fragment>
        <p>No lo tienes</p>
        <Link to="/" className="app__back">Volver al listado</Link>
      </React.Fragment>
    );

  }
}

  CharacterDetail.propTypes = {
    routerProps: PropTypes.object.isRequired,
    characters: PropTypes.arrayOf(PropTypes.object).isRequired
  };
  
 export default CharacterDetail; 



