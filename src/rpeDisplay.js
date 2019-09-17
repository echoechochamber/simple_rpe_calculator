import React from "react";
import { View, Text } from "react-native";
import { PropType } from "prop-types";
import RPE from "./RPE.json";

const RpeDisplay = props => {
  const rpeMultiplier = parseFloat(RPE[props.rpe][props.repCount]);
  const calculated = props.e1RM * rpeMultiplier;
  return (
    <View>
      <Text>
        RPE: {props.rpe} is {calculated}lbs
      </Text>
    </View>
  );
};

RpeDisplay.props = {
  repCount: PropType.number.isRequired,
  e1RM: PropType.number.isRequired,
  rpe: PropType.number.isRequired,
};
