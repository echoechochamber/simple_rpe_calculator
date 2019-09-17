import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import RpePicker from "./src/RpePicker";
import RepsPicker from "./src/repsPicker";

export default function App() {
  const [refRpe, setRefRpe] = useState(6);
  const [refReps, setRefReps] = useState(1);
  const [targetReps, setTargetReps] = useState(1);
  const [weight, setWeight] = useState("");

  return (
    <View style={styles.container}>
      <Text>
        the reference values are: \n RPE: {refRpe} \n Weight: {weight} \n Reps:{" "}
        {refReps}
      </Text>

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setWeight(text)}
        value={weight}
        keyboardType={"numeric"}
      />
      <RpePicker RPE={refRpe} onChangeRpe={newRpe => setRefRpe(newRpe)} />
      <RepsPicker reps={refReps} onChangeReps={reps => setRefReps(reps)} />
      <RepsPicker
        reps={targetReps}
        onChangeReps={reps => setTargetReps(reps)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
