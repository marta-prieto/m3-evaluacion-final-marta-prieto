import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CharacterDetail = props => {
  const {routerProps, characters} = props;
  const charId = parseInt(routerProps.match.params.charId);

  if (charId > characters.length) {
    return (
      <div>
      <p>Mira, mira, que es viernes y me estas.. </p>
      <Link to="/" className="app__back">Vuelve al listado, listo :)</Link>
      </div>
    );
  }
  
  const character = characters.filter(item => item.id === charId);

  if (character[0]) {
  const {name, image, species} = character[0];
    return (
      <React.Fragment>
        <div className="char__detail">
          <h2 className="char__detail-name">{name}</h2>
          <div className="char__detail-img">
            <img src={image} alt={name}/>
          </div>
          <ul className="char__detail-species">
            {species.map((specie, index) => {
              return (
                <li className="detail__species" key={index}>{specie}</li>
              );
            })}
          </ul>
        </div>
        <Link to="/" className="r">Volver al listado</Link>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Chacho, ese no lo tienes</p>
        <Link to="/" className="return_app">Volver al listado</Link>
      </React.Fragment>
    );

  };
}

CharacterDetail.propTypes = {
  routerProps: PropTypes.object.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};


/* const CharacterDetail = props => {
  return (
    <React.Fragment>
      <div className="detail__char">DETALLE</div>
      <Link to="/" className="return__char">VOLVER</Link>
    </React.Fragment>
  );
};
 */
/* CharacterDetail.proptypes = {

}
 */
export default CharacterDetail;