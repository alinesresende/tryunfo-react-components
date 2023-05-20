import PropTypes from 'prop-types';
import React from 'react';

class Filter extends React.Component {
  render() {
    const {
      filterName,
      filterRarity,
      filterCheckBox,
      onInputChange,
      resetFilterState,
    } = this.props;
    return (
      <div>
        <input
          name="filterName"
          type="text"
          data-testid="name-filter"
          placeholder="nome das cartas"
          value={ filterName }
          onChange={ onInputChange }
          disabled={ filterCheckBox }
        />
        <select
          name="filterRarity"
          data-testid="rare-filter"
          value={ filterRarity }
          onChange={ onInputChange }
          disabled={ filterCheckBox }
        >
          <option selected>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>

        </select>
        <section>
          <label
            htmlFor="checkbox"
          >
            Super Trunfo
            <input
              type="checkbox"
              name="filterCheckBox"
              id="checkbox"
              checked={ filterCheckBox }
              onChange={ resetFilterState }
              data-testid="trunfo-filter"
            />
          </label>
        </section>
      </div>
    );
  }
}

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterRarity: PropTypes.string.isRequired,
  filterCheckBox: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  resetFilterState: PropTypes.func.isRequired,
};

export default Filter;
