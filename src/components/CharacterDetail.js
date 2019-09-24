import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const CharacterDetail = props => {

  const {routerProps, characters} = props;
  const charId = parseInt(routerProps.match.params.id);

  const getMyCharacter = characters.filter(item => item.id === charId)
  if (getMyCharacter > charId.length){
  const {name, image, species, origin, episode, status} = characters[0];
  return(
    <React.Fragment>
      <div className="detail__card">
        <h2 className="detail__name">{name}</h2>
        <div className="detail__image">
          <img src={image} alt={name}/>
        </div>
        <p className="detail__species">{species}</p>
        <p className="detail__episode">{episode}</p>
        <p className="detail__origin">{origin}</p>
        <p className="detail__status">{status}</p>
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

      /*   <ul className="poke-detail__types">
          {types.map((type, index) => {
            return (
              <li className="poke-detail__type" key={index}>{type}</li>
            );
          })}
        </ul>
      </div>
      <Link to="/" className="app__back">Volver al listado</Link>
    </React.Fragment>
  ); */


