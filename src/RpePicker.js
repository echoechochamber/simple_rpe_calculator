import React from "react";
import PropTypes from "prop-types";
import { Picker, StyleSheet, Text, View } from "react-native";

const RpePicker = props => {
  const changeRpe = val => {
    props.onChangeRpe(parseFloat(val));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>RPE</Text>
      <Picker
        selectedValue={props.RPE}
        style={styles.picker}
        itemStyle={styles.itemPicker}
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
    </View>
  );
};

RpePicker.propTypes = {
  onChangeRpe: PropTypes.func,
  RPE: PropTypes.number,
};

const styles = StyleSheet.create({
  picker: {
    height: 30,
    width: 120,
  },
  pickerItem: {
    height: 16,
  },
  label: {},
  container: {
    flex: 1,
    padding: 4,
    margin: 4,
  },
});
export default RpePicker;
