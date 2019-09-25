import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
    const { getQueryData, queryData, getType, type } = props;
    return (
        <React.Fragment>
        <div className="filters__list">
            <label>Busca a tu personaje: </label>
            <input className="input" type="text" onChange={getQueryData} value={queryData} />
        </div>
        <div className="filter__type">
            <label>Elegi type</label>
            <input className="input-type" type="text" onChange={getType} value={type} />
        </div>
        </React.Fragment>
    );
};

Filters.propTypes = {
    getQueryData: PropTypes.func.isRequired,
    queryData: PropTypes.string.isRequired
};

export default Filters;


