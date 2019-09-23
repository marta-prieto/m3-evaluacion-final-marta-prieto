import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
    const {getQueryData, queryData} = props;
    return (
        <div className="filters__list">
            <input type="text" onChange={getQueryData} value={queryData} />
        </div>
    );
};

Filters.propTypes = {
    getQueryData: PropTypes.func.isRequired,
    queryData: PropTypes.string.isRequired
};

export default Filters;


