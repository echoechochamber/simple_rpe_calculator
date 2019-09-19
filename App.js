import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import RpePicker from "./src/RpePicker";
import RepsPicker from "./src/repsPicker";
import RpeDisplay from "./src/rpeDisplay";
import { calculateE1RM } from "./src/lib";

export default function App() {
  const [refRpe, setRefRpe] = useState(6);
  const [refReps, setRefReps] = useState(1);
  const [targetReps, setTargetReps] = useState(1);
  const [weight, setWeight] = useState("0");
  const rpeValues = ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"];

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={rpeValues}
          keyExtractor={rpeVal => rpeVal}
          renderItem={({ item }) => (
            <RpeDisplay
              e1RM={calculateE1RM(weight, refReps, refRpe)}
              repCount={targetReps}
              rpe={item}
            />
          )}
        />
      </View>

      <View style={styles.referenceContainer}>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => setWeight(text)}
          value={weight}
          keyboardType={"numeric"}
          clearTextOnFocus={true}
        />
        <RpePicker RPE={refRpe} onChangeRpe={newRpe => setRefRpe(newRpe)} />
        <RepsPicker reps={refReps} onChangeReps={reps => setRefReps(reps)} />
      </View>
      <View>
        <RepsPicker
          reps={targetReps}
          onChangeReps={reps => setTargetReps(reps)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  referenceContainer: {
    flexDirection: "row",
  },
});
