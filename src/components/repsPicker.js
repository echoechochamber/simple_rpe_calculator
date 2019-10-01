import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import RNPickerSelect from "react-native-picker-select";
import { defaultPicker, picker } from "../styles";

const RepsPicker = props => {
  const changeReps = val => {
    props.onChangeReps(parseInt(val));
  };

  return (
    <View style={picker.container}>
      <Text style={picker.label}>Reps</Text>
      <RNPickerSelect
        style={defaultPicker}
        placeholder={{ label: "Select rep count", value: null }}
        onValueChange={itemValue => changeReps(itemValue)}
        items={[
          { label: "x1", value: "1" },
          { label: "x2", value: "2" },
          { label: "x3", value: "3" },
          { label: "x4", value: "4" },
          { label: "x5", value: "5" },
          { label: "x6", value: "6" },
          { label: "x7", value: "7" },
          { label: "x8", value: "8" },
          { label: "x9", value: "9" },
          { label: "x10", value: "10" },
          { label: "x11", value: "11" },
          { label: "x12", value: "12" }
        ]}
      />
    </View>
  );
};

RepsPicker.propTypes = {
  onChangeReps: PropTypes.func,
  reps: PropTypes.number
};

export default RepsPicker;
