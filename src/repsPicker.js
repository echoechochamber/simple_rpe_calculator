import React from "react";
import { Picker, StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";

const RepsPicker = props => {
  const changeReps = val => {
    props.onChangeReps(parseInt(val));
  };

  return (
    <View>
      <Text style={styles.label}>Reps</Text>
      <Picker
        selectedValue={props.reps}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => changeReps(itemValue)}>
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
        <Picker.Item label="11" value="11" />
        <Picker.Item label="12" value="12" />
      </Picker>
    </View>
  );
};

RepsPicker.propTypes = {
  onChangeReps: PropTypes.func,
  reps: PropTypes.number,
};

const styles = StyleSheet.create({
  picker: {
    margin: "4px",
    height: "30px",
    width: "120px",
  },
  label: {
    paddingLeft: "4px",
    fontFamily: "cabin-semibold",
  },
});

export default RepsPicker;
