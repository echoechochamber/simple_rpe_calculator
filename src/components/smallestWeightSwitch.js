import { Switch, View, Text } from "react-native";
import React from "react";
import { toggle } from "../styles";
import PropTypes from "prop-types";

const SmallestWeightSwitch = props => {
  return (
    <View style={toggle.container}>
      <Text style={toggle.description}>Smallest Plates</Text>
      <View style={toggle.horizontal }>
        <Text style={toggle.label}>5lbs</Text>
        <Switch onValueChange={props.onValueChange} value={props.value} />
        <Text style={toggle.label}>2.5lbs</Text>
      </View>
    </View>
  );
};

SmallestWeightSwitch.propTypes = {
  onValueChange: PropTypes.func,
  value: PropTypes.any
};

export default SmallestWeightSwitch;
