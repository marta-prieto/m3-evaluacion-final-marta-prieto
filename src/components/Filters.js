import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
    const { getQueryData, queryData, gender, getFilter } = props;
    return (
        <React.Fragment>
        <div>
        <select name="" id="" onChange={getFilter} value={gender} >
            <option value="all">All</option>
            <option value="Female">female</option>
            <option value="Male">male</option>
            <option value="unknown">unknown</option>
        </select>
        </div>
        <div className="filters__list">
            <label>Busca a tu personaje: </label>
            <input className="input" type="text" onChange={getQueryData} value={queryData} />
        </div>
        </React.Fragment>
    );
};

Filters.propTypes = {
    getQueryData: PropTypes.func.isRequired,
    queryData: PropTypes.string.isRequired
};

export default Filters;


