import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import RPE from "./RPE.json";
import { roundToNearestWeight } from "./lib";

const RpeDisplay = props => {
  const rpeMultiplier = parseFloat(RPE[props.rpe][props.repCount]);
  const calculated = roundToNearestWeight(
    props.e1RM * rpeMultiplier,
    props.hasSmallWeights
  );
  return (
    <View>
      <Text>
        RPE: {props.rpe} is {calculated}lbs
      </Text>
    </View>
  );
};

RpeDisplay.propTypes = {
  repCount: PropTypes.number.isRequired,
  e1RM: PropTypes.number.isRequired,
  rpe: PropTypes.number.isRequired,
  hasSmallWeights: PropTypes.bool.isRequired,
};

export default RpeDisplay;
