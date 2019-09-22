import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const RpePicker = props => {
  const changeRpe = val => {
    props.onChangeRpe(parseFloat(val));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>RPE</Text>
      <RNPickerSelect
        placeholder={{ label: "Select RPE", value: null }}
        onValueChange={value => changeRpe(value)}
        items={[
          { label: "@6", value: "6" },
          { label: "@6.5", value: "6.5" },
          { label: "@7", value: "7" },
          { label: "@7.5", value: "7.5" },
          { label: "@8", value: "8" },
          { label: "@8.5", value: "8.5" },
          { label: "@9", value: "9" },
          { label: "@9.5", value: "9.5" },
          { label: "@10", value: "10" },
        ]}
      />
    </View>
  );
};

RpePicker.propTypes = {
  onChangeRpe: PropTypes.func,
  RPE: PropTypes.number,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    margin: 4,
  },
});
export default RpePicker;
