import React from "react";
import PropTypes from "prop-types";
import { Picker } from "react-native";

const RpePicker = props => {
  const changeRpe = val => {
    props.onChangeRpe(parseFloat(val));
  };

  return (
    <Picker
      selectedValue={props.RPE}
      style={{ height: 50, width: 100 }}
      onValueChange={(itemValue, itemIndex) => changeRpe(itemValue)}>
      <Picker.Item label="6" value="6" />
      <Picker.Item label="6.5" value="6.5" />
      <Picker.Item label="7" value="7" />
      <Picker.Item label="7.5" value="7.5" />
      <Picker.Item label="8" value="8" />
      <Picker.Item label="8.5" value="8.5" />
      <Picker.Item label="9" value="9" />
      <Picker.Item label="9.5" value="9.5" />
      <Picker.Item label="10" value="10" />
    </Picker>
  );
};

RpePicker.propTypes = {
  onChangeRpe: PropTypes.func,
  RPE: PropTypes.number,
};

export default RpePicker;
