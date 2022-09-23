import PropTypes from 'prop-types';
import { Info, FindInput } from 'components/Filter/Filter.styled';

const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <Info>Find contacts by name</Info>
      <FindInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;
