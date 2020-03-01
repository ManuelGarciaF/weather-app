import React from 'react';
import PropTypes from 'prop-types';

import Switch from 'react-switch';

import './UnitControl.scss';

const UnitControl = (props) => {
  const { onChange, checked } = props;
  return (
    // Disabled because control is inside custom component.
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="unit-control">
      <Switch
        checked={checked}
        onChange={onChange}
        uncheckedIcon={<div className="toggle-symbol">℃</div>}
        checkedIcon={<div className="toggle-symbol">℉</div>}
        onColor="#364054"
        offColor="#364054"
      />
    </label>
  );
};

UnitControl.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default UnitControl;
